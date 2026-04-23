import * as React from 'react';

export const NotificationEmail = ({ email }: { email: string }) => (
    <div style={{
        fontFamily: 'sans-serif',
        lineHeight: '1.6',
        color: '#2c2c2c',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        border: '1px solid #ddd'
    }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>New Newsletter Subscriber!</h2>
        <p style={{ fontSize: '16px' }}>
            A new person has signed up for your &quot;Letters&quot;:
        </p>
        <p style={{
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: '#fff',
            padding: '10px',
            display: 'inline-block',
            border: '1px solid #eee'
        }}>
            {email}
        </p>
        <p style={{ fontSize: '14px', color: '#666', marginTop: '20px' }}>
            This person was added to your `newsletter_signups.txt` file.
        </p>
    </div>
);
