export interface SessionTracking {
  fingerprint: string;
  confidence_score: number;
  screen_resolution?: string;
  platform?: string;
  timezone?: string;
}