```markdown
# Subscription Workflow API 🔄

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
   git clone https://github.com/Malului/subscription-api.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (`.env`):
   ```env
   DB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ARCJET_KEY=your_arcjet_key
   EMAIL_PASSWORD=your_gmail_app_password
   QSTASH_TOKEN=your_upstash_qstash_token
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

5. Start the local upstash server:
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