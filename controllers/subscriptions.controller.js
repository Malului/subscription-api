import { SERVER_URL } from "../config/env.js";
import Subscription from "../models/subscription.model.js";

import { workflowClient } from "../config/upstash.js";

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ... req.body,
            user: req.user._id,
        });

        const { workflowRunId } = await workflowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: {
                subscriptionId: subscription.id,
            },
            headers: {
                'content-type': 'application/json',
            },
            retries: 0,
        });

        res.status(201).json({
            success: true,
            data: {
                subscription,
                workflowRunId
            }
        });
    } catch (error) {
        next(error);
    }
};

export const getAllSubscriptions = async (req, res, next) => {
    try {
        const subscription = await Subscription.find();

        res.status(200).json({
            success: true,
            data: subscription
        });
    } catch (error) {
        next(error);
    }
};

export const getSubscriptionDetails = async (req, res, next) => {
    try {
        const subscription = await Subscription.findById(req.params.id).select('');

        if (!subscription) {
            const error = new Error('Subscription does not exist');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            data: subscription
        })
    } catch (error) {
        next(error);
    }
    
}

export const getUserSubscription = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id) {
            const error = new Error('You are not the owner!');
            error.statusCode = 401;
            throw error;
        }

        const subscription = await Subscription.find({ user: req.params.id});

        res.status(200).json({
            success: true,
            data: subscription
        })
    } catch (error) {
        next(error);
    }
};

