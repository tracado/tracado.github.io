export interface FrameworkInfo {
  id: string;
  name: string;
  version: string;
  badge: string;
  color: string;
  controlsCount: number;
  description: string;
  role: string;
  domains: string[];
  mappingHub: string;
}

export interface GraphNodeStep {
  step: number;
  title: string;
  normReference: string;
  description: string;
  input: string;
  output: string;
  commonMarketMistake: string;
  iconName: string;
}

export interface DependencyLink {
  from: string;
  to: string;
  payload: string;
  businessReason: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  isPopular?: boolean;
  highlightBadge?: string;
  frameworkScope: string[];
  features: string[];
  limitations?: string[];
  ctaLabel: string;
  ctaAction: 'community' | 'essential' | 'advanced' | 'enterprise';
}

export interface LeadFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  companySize: string;
  role: string;
  primaryFrameworks: string[];
  hasAiInterest: boolean;
  needsAuditorMentorship: boolean;
  notes?: string;
}

export interface EvidenceDemoItem {
  id: string;
  filename: string;
  fileType: 'pdf' | 'docx' | 'screenshot' | 'policy';
  sourceAsset: string;
  detectedText: string;
  aiSuggestedControls: {
    iso27001: string;
    cis: string;
    nist: string;
    lgpd?: string;
    confidence: number;
    justification: string;
  };
  humanStatus: 'pending' | 'approved' | 'modified';
}
