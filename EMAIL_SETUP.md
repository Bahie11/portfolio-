# Contact Form Email Setup Guide

Your contact form is now ready to send emails! Choose one of the following options to configure it:

## Option 1: EmailJS (Recommended) 

### Setup Steps:
1. Go to [emailjs.com](https://emailjs.com/) and sign up (free tier available)
2. Go to **Admin** → **Email Services** and add a service (Gmail, Outlook, etc.)
3. Create an email template in **Email Templates**
   - Template variables should include: `from_name`, `from_email`, `message`
   - Email should be sent to: `to_email`
4. Get your **Public Key** from **Account** section
5. Copy your **Service ID** and **Template ID**
6. Create a `.env.local` file in the project root with:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxxxxxx
```

7. Restart the development server: `npm run dev`

---

## Option 2: Formspree (Simpler Alternative)

### Setup Steps:
1. Go to [formspree.io](https://formspree.io/) and sign up
2. Create a new form
3. Copy the form endpoint
4. Create a `.env.local` file in the project root with:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

5. Restart the development server: `npm run dev`

---

## Testing the Form

1. Fill in the contact form on your portfolio website
2. Click "Send Message"
3. You should receive an email at `mahmoudelbahie4@gmail.com`

## Troubleshooting

- **Messages not sending?** Check that your email service is properly configured
- **Check browser console** for error messages (Press F12 → Console tab)
- **EmailJS Gmail setup?** You may need to generate an [App Password](https://support.google.com/accounts/answer/185833)
- **Formspree issues?** Make sure your form is verified on the Formspree dashboard

---

Emails will be sent to: **mahmoudelbahie4@gmail.com**
