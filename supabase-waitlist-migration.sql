-- Migration: Create waitlist_leads table for pre-launch campaign
-- Execute this in the Supabase SQL Editor (Dashboard > SQL Editor)

CREATE TABLE public.waitlist_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  area_de_estudo TEXT NOT NULL CHECK (area_de_estudo IN ('medicina', 'odontologia', 'outro')),
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  position SERIAL,
  lgpd_consent BOOLEAN NOT NULL DEFAULT false,
  lgpd_consent_at TIMESTAMP WITH TIME ZONE,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(email)
);

ALTER TABLE public.waitlist_leads ENABLE ROW LEVEL SECURITY;

CREATE INDEX idx_waitlist_leads_email ON public.waitlist_leads (email);
CREATE INDEX idx_waitlist_leads_created ON public.waitlist_leads (created_at DESC);

CREATE OR REPLACE FUNCTION public.get_waitlist_count()
RETURNS INTEGER AS $$
  SELECT COUNT(*)::INTEGER FROM public.waitlist_leads;
$$ LANGUAGE sql SECURITY DEFINER;
