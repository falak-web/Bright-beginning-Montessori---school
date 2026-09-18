-- Production-oriented schema for the school CMS.
-- Run this in Supabase SQL Editor, then add RLS policies appropriate to your staff roles.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'staff' check (role in ('admin','editor','staff')),
  created_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text not null,
  event_date date not null,
  start_time time,
  end_time time,
  location text,
  description text,
  image_url text,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  parent_name text not null,
  student_grade text,
  rating int not null check (rating between 1 and 5),
  review text not null,
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.teacher_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  position text not null,
  qualification text,
  experience_years int,
  cover_message text,
  cv_path text,
  status text not null default 'new' check (status in ('new','reviewing','shortlisted','rejected','hired')),
  created_at timestamptz not null default now()
);

create table if not exists public.admissions (
  id uuid primary key default gen_random_uuid(),
  parent_name text not null,
  email text not null,
  phone text not null,
  student_name text not null,
  grade text not null,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  body text,
  image_url text,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.gallery (
  id uuid primary key default gen_random_uuid(),
  title text,
  image_url text not null,
  category text,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  id int primary key default 1,
  school_name text not null default 'Northbridge Academy',
  phone text,
  admissions_phone text,
  email text,
  emergency_phone text,
  address text,
  office_hours text,
  maps_url text,
  facebook_url text,
  instagram_url text,
  youtube_url text,
  updated_at timestamptz not null default now()
);

insert into public.site_settings (id) values (1) on conflict (id) do nothing;

-- Enable Row Level Security.
alter table public.profiles enable row level security;
alter table public.events enable row level security;
alter table public.reviews enable row level security;
alter table public.teacher_applications enable row level security;
alter table public.admissions enable row level security;
alter table public.news enable row level security;
alter table public.gallery enable row level security;
alter table public.site_settings enable row level security;

-- Public content can be read; private submissions must NOT be publicly readable.
create policy "published events are public"
on public.events for select
using (published = true);

create policy "approved reviews are public"
on public.reviews for select
using (approved = true);

create policy "published news are public"
on public.news for select
using (published = true);

create policy "published gallery is public"
on public.gallery for select
using (published = true);

create policy "site settings are public"
on public.site_settings for select
using (true);

-- IMPORTANT:
-- Do NOT add public SELECT policies to teacher_applications or admissions.
-- Admin/editor policies should be created using authenticated staff roles.
-- CV storage bucket should be PRIVATE, with signed URLs generated only for authorized staff.
