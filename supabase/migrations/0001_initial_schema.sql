-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Services Table
CREATE TABLE public.services (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    tagline TEXT,
    short_description TEXT,
    icon_name TEXT,
    slug TEXT NOT NULL UNIQUE,
    deliverables JSONB DEFAULT '[]'::jsonb,
    sub_services JSONB DEFAULT '[]'::jsonb,
    benefits JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Portfolio Table
CREATE TABLE public.portfolio (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    client TEXT,
    category TEXT,
    services JSONB DEFAULT '[]'::jsonb,
    thumbnail TEXT,
    short_description TEXT,
    result_metric TEXT,
    result_label TEXT,
    is_placeholder BOOLEAN DEFAULT false,
    slug TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Blog Table
CREATE TABLE public.blog (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    summary TEXT,
    content JSONB DEFAULT '[]'::jsonb,
    category TEXT,
    published_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    read_time TEXT,
    author JSONB DEFAULT '{"name": "AdPulse Media", "role": "Editorial"}'::jsonb,
    keywords JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. FAQs Table
CREATE TABLE public.faqs (
    id TEXT PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Testimonials Table
CREATE TABLE public.testimonials (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT,
    company TEXT,
    location TEXT,
    quote TEXT NOT NULL,
    rating INTEGER DEFAULT 5,
    avatar_url TEXT,
    is_placeholder BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Site Config Table (Single Row)
CREATE TABLE public.site_config (
    id INTEGER PRIMARY KEY DEFAULT 1,
    site_config JSONB NOT NULL,
    business_metrics JSONB NOT NULL,
    industries JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    CONSTRAINT single_row CHECK (id = 1)
);

-- Enable RLS on all tables
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_config ENABLE ROW LEVEL SECURITY;

-- Create Policies (Public Read Access)
CREATE POLICY "Public Read Access on services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Public Read Access on portfolio" ON public.portfolio FOR SELECT USING (true);
CREATE POLICY "Public Read Access on blog" ON public.blog FOR SELECT USING (true);
CREATE POLICY "Public Read Access on faqs" ON public.faqs FOR SELECT USING (true);
CREATE POLICY "Public Read Access on testimonials" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Public Read Access on site_config" ON public.site_config FOR SELECT USING (true);

-- Note: Insert/Update/Delete operations will be handled by the Service Role key in the Next.js API route,
-- which inherently bypasses RLS, so we do not need to create explicit RLS policies for mutations.
