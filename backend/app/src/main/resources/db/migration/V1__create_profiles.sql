create table profiles (
                          id           uuid primary key,
                          email        text not null,
                          display_name text,
                          created_at   timestamptz not null default now(),
                          updated_at   timestamptz not null default now()
);

alter table profiles enable row level security;