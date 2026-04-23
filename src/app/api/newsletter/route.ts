import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Resend } from 'resend';
import { WelcomeEmail } from '@/components/emails/WelcomeEmail';
import { NotificationEmail } from '@/components/emails/NotificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'invalid email' }, { status: 400 });
        }

        // 1. Log to local file (Backup)
        const logPath = path.join(process.cwd(), 'newsletter_signups.txt');
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] ${email}\n`;
        fs.appendFileSync(logPath, logEntry);

        // 2. Send Emails using Resend
        if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_123456789') {
            try {
                // Send Welcome email to subscriber
                await resend.emails.send({
                    from: 'raviolifortwo <onboarding@resend.dev>', // Update this with your verified domain later
                    to: email,
                    subject: 'hello again.',
                    react: WelcomeEmail(),
                });

                // Send Notification email to owner
                if (process.env.NOTIFICATION_EMAIL) {
                    await resend.emails.send({
                        from: 'raviolifortwo <onboarding@resend.dev>',
                        to: process.env.NOTIFICATION_EMAIL,
                        subject: 'New Newsletter Subscriber!',
                        react: NotificationEmail({ email }),
                    });
                }
            } catch (emailError) {
                console.error('Email delivery error:', emailError);
                // We still logged the email to the file, so we can proceed with success
            }
        } else {
            console.warn('RESEND_API_KEY not set. Skipping email delivery.');
        }

        console.log(`Newsletter signup: ${email}`);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Newsletter signup error:', error);
        return NextResponse.json({ error: 'failed to subscribe' }, { status: 500 });
    }
}
