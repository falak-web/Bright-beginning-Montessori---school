# Northbridge Academy — Professional School Website

## What this is
A production-oriented Next.js school website foundation with:
- premium responsive public website
- events/news/gallery/reviews architecture
- teacher application architecture
- admissions architecture
- Supabase database schema
- role-ready admin architecture
- private application/CV data model

## Run locally

1. Install Node.js.
2. Open this folder in VS Code.
3. Create `.env.local` from `.env.example`.
4. Add your Supabase project URL and anon key.
5. Run:

npm install
npm run dev

Open http://localhost:3000

## Supabase
Open `supabase/schema.sql` and run it in the Supabase SQL editor.

For a real school:
- enable email/password or approved SSO authentication
- create staff/admin roles
- create RLS policies for staff
- create a PRIVATE CV storage bucket
- use signed URLs for authorized CV viewing
- never expose service-role keys in browser code
- add rate limiting / CAPTCHA to public forms
- configure backups and monitoring

## Ownership model
For a client handoff, create the Supabase and hosting accounts under the school's ownership (or transfer them after payment), then give the school its admin user. Keep your developer access only if the contract permits maintenance access.

## Replace before delivery
- school name
- logo
- photos
- phone numbers
- email
- address
- actual statistics
- policies
- testimonials
- event information
- legal/privacy/terms pages

This starter deliberately does not invent real security guarantees or fake school claims.
