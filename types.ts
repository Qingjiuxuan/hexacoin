import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  subtext?: string;
}

export interface AuditItem {
  category: string;
  checks: string[];
}

export interface TokenDetail {
  label: string;
  value: string;
}