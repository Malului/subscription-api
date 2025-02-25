import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env.js';

export const accountEmail = 'malului227@gmail.com'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: accountEmail,
        pass: EMAIL_PASSWORD
    },
     // Add these options to handle SSL certificate issues
     tls: {
        // Do not fail on invalid certificates
        rejectUnauthorized: false
    }
});

export default transporter;