import * as React from 'react';

export const WelcomeEmail = () => (
    <div style={{
        fontFamily: 'serif',
        lineHeight: '1.6',
        color: '#2c2c2c',
        padding: '40px',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#fdfcf8',
        border: '1px solid #e5e5e5'
    }}>
        <h1 style={{ fontWeight: 'normal', fontStyle: 'italic', fontSize: '24px', marginBottom: '24px' }}>
            hello again.
        </h1>
        <p style={{ fontSize: '16px', marginBottom: '16px' }}>
            thank you for staying. for noticing.
        </p>
        <p style={{ fontSize: '16px', marginBottom: '24px' }}>
            i send letters sometimes. no schedule. only when they are ready.
            i&apos;m glad you&apos;re here to receive them.
        </p>
        <div style={{ borderTop: '1px solid #eee', paddingTop: '20px', marginTop: '20px' }}>
            <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
                talk soon,<br />
                seven
            </p>
        </div>
        <footer style={{ marginTop: '40px', fontSize: '12px', color: '#999' }}>
            raviolifortwo
        </footer>
    </div>
);
