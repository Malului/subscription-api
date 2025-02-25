import Subscription from '../models/subscription.model.js';
import dayjs from 'dayjs';

import { createRequire } from 'module';
import { sendReminderEmail } from '../utils/send-email.js';
const require = createRequire(import.meta.url);
const { serve } = require('@upstash/workflow/express');

const REMINDERS = [7, 5, 2, 1];

export const sendReminder = serve(async (context) => {
    const { subscriptionId } = context.requestPayload;

    const subscription = await fetchSubscription(context, subscriptionId);

    if(!subscription || subscription.status !== 'active') {
        console.log('Subscription is not active || Subscription does not exist')
        return;
    }
    const renewalDate = dayjs(subscription.renewalDate);

    if (renewalDate.isBefore(dayjs())) {
        console.log(`Renewal date has passed for subscription ${subscriptionId}. Stopping workflow`);
        return;
    }

    for (const daysBefore of REMINDERS) {
        const reminderDate = renewalDate.subtract(daysBefore, 'day');
        // Renewal date = 22 Jan, reminder date = 15 Jan, 17, 20, 21

        if (reminderDate.isAfter(dayjs())) {
            await sleepUntilReminder(context, `Reminder ${daysBefore} days before`, reminderDate);
        }

        await triggerReminder(context, `${daysBefore} days before reminder`, subscription);
    }
});

const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', async () => {
        return Subscription.findById(subscriptionId).populate('user', 'name email');
    })
};

const sleepUntilReminder = async (context, label, date) => {
    console.log(`Sleeping until ${label} reminder at ${date}`);
    await context.sleepUntil(label, date.toDate());
};

const triggerReminder = async (context, label, subscription) => {
    return await context.run(label, async () => {
        try {
            console.log(`Triggering ${label}`);

            // Send email
            await sendReminderEmail({
                to: subscription.user.email,
                type: label,
                subscription
            });
            console.log(`Email sent successfully for ${label}`);
        } catch (error) {
            console.error(`Error sending ${label} reminder:`, error);
            // Consider implementing a retry mechanism here
        }
    })
}