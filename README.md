# Snaplytics — Operational Guide

...

## How to Enable Screenshot API in Production

1. **Obtain a Browserless API Key**  
   Register and subscribe at [browserless.io](https://www.browserless.io/) to get an API token.

2. **Set the API Key in Your Environment**  
   Add `BROWSERLESS_API_KEY` to your environment settings on Railway, Vercel, or local `.env.local`.  
   ```
   BROWSERLESS_API_KEY=your-browserless-api-key
   ```

3. **Deploy the app**  
   When deployed with a valid API key, Snaplytics will instantly capture screenshots of websites via `/api/capture`.  
   The Browserless API is billed/policed by quota, so use responsibly.

4. **Security & Quotas**  
   Your API key must NOT be exposed to browsers. All API requests are proxied from the Next.js server action.  
   For larger usage/capture scale, see [browserless quota docs](https://www.browserless.io/docs/quotas).

---

For code questions or new feature directions, contact Chirag Dodiya (chirag@bidx.ai).