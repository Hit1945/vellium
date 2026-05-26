-- Vellium baseline schema
create table if not exists profiles (
  id uuid primary key,
  full_name text,
  avatar_url text,
  bio text,
  theme text default 'system',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
