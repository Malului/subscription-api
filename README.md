# Subscription Tracking API 🔄

A robust API for managing subscriptions with automated renewal reminders. Built for developers who need to track and notify users about upcoming subscription renewals securely and efficiently.

## Features ✨

- **Subscription Management**: Create, read, update, and track subscriptions with custom frequencies (daily, weekly, etc.).
- **Automated Reminders**: Schedule email reminders 7, 5, 2, and 1 day before renewal.
- **Security**: Rate limiting, bot detection, and JWT-based authentication.
- **Email Notifications**: Customizable HTML templates for reminders.
- **Workflow Automation**: Powered by Upstash for reliable scheduling.

## Tech Stack 🛠️

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Security**: Arcjet (rate limiting, bot detection), JWT
- **Email**: Nodemailer (Gmail integration)
- **Workflows**: Upstash (QStash and Workflows)
- **Utilities**: Day.js (date handling), Dotenv (environment variables)

## Installation ⚙️

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/subdub-api.git


2. Start the local upstash server:
```bash
npx @upstash/qstash-cli dev
```

## API Endpoints 🌐

- **Auth**: `/api/v1/auth/sign-up`, `/sign-in`, `/logout`
- **Users**: `/api/v1/users` (CRUD operations)
- **Subscriptions**: `/api/v1/subscriptions` (Manage subscriptions)
- **Workflows**: `/api/v1/workflows/subscription/reminder` (Trigger reminders)

## License 📜

MIT License. Feel free to fork and adapt! 

---

🌟 **Tip**: Pair this API with a frontend for a full-stack subscription management app. Contributions welcome!
```