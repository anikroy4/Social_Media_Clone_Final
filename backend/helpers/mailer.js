const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const { OAuth2 } = google.auth;
const oauth_link = 'https://developers.google.com/oauthplayground/';

const {EMAIL, MAILING_ID, MAILING_SECRET, MAILING_REFRESH_TOKEN, } = process.env 

const auth =new OAuth2(
    MAILING_ID,
    MAILING_SECRET,
    MAILING_REFRESH_TOKEN,
    oauth_link
)

exports.sendVerificationEmail =  (email, name, url) => {
    auth.setCredentials({
        refresh_token: MAILING_REFRESH_TOKEN
    })
    const accessToken = auth.getAccessToken()
    
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: EMAIL,
            clientId: MAILING_ID,
            clientSecret: MAILING_SECRET,
            refreshToken: MAILING_REFRESH_TOKEN,
            accessToken: accessToken
        }
    })

    const mailOptions = {
        from: EMAIL,
        to: email,
        subject: 'Verify your email',
        html: `
        <div style="font-family: Arial, sans-serif; background: #f6f8fb; padding: 30px;">
            <div style="max-width: 650px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.08);">
                <div style="background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 28px 24px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px;">Verify Your Email</h1>
                    <p style="margin: 8px 0 0; color: #e0e7ff; font-size: 15px;">Welcome to Social Media Clone</p>
                </div>

                <div style="padding: 30px 24px; color: #334155;">
                    <p style="font-size: 16px; margin: 0 0 12px;">Hello <strong>${name}</strong>,</p>
                    <p style="font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
                        Thanks for joining us. Please confirm your email address to activate your account.
                    </p>

                    <div style="text-align: center; margin: 24px 0;">
                        <a href="${url}" style="background: #4f46e5; color: #ffffff; text-decoration: none; padding: 13px 24px; border-radius: 8px; display: inline-block; font-weight: bold;">
                            Verify Email
                        </a>
                    </div>

                    <p style="font-size: 13px; color: #64748b; line-height: 1.6; margin: 0 0 12px;">
                        If the button above does not work, copy and paste this link into your browser:
                    </p>
                    <p style="word-break: break-all; font-size: 13px; color: #2563eb; margin: 0;">${url}</p>
                </div>
            </div>
        </div>
        `
    }
    smtpTransport.sendMail(mailOptions, (err, res) => {
        if(err){
            console.log('Error sending email:', err);   

        }else{ 
            console.log('Email sent successfully:', res);
        }
    }
    )
}