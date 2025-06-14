
export const APP_NAME = "CiviLenz";
export const APP_MOTTO = "Disiplina, may bayad. Trabaho, para sa lahat. Kaayusan, para sa bayan.";

export const GEMINI_TEXT_MODEL = "gemini-2.5-flash-preview-04-17";
export const GEMINI_IMAGE_MODEL = "imagen-3.0-generate-002"; // For potential future use, current focus is text analysis for reports

// Mock API base URL (replace with actual if available)
export const API_BASE_URL = "/api/mock"; // Using relative for potential Vercel deployment of mock API routes if set up

// Maximum file size for uploads in bytes (e.g., 10MB)
export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

export const DEFAULT_MAP_CENTER: [number, number] = [14.5995, 120.9842]; // Manila
export const DEFAULT_MAP_ZOOM = 13;

export const CIVIPOINTS_PER_VALIDATED_REPORT = 10;
export const CIVIPOINTS_PER_GREY_ZONE_DISCOVERY = 15;
export const CIVIPOINTS_PER_LEGAL_PARKING_UPLOAD = 5;

export const USER_LEVELS_XP_THRESHOLDS = {
  [UserLevel.ENFORCER]: 100,
  [UserLevel.GUARDIAN]: 500,
  [UserLevel.CIVIC_SENTINEL]: 2000,
};

export const ROUTES = {
  HOME: "/",
  REPORT_VIOLATION: "/report",
  MODERATION: "/moderate",
  KAMOTE_MAP: "/map",
  PARK_SMART: "/park-smart",
  MISSIONS: "/missions",
  LEADERBOARD: "/leaderboard",
  PROFILE: "/profile",
  LGU_DASHBOARD: "/lgu",
  VIOLATION_NOTIFICATION: "/check-plate",
  PRIVACY_POLICY: "/privacy",
  RULES: "/rules",
  LOGIN: "/login", // Mock
};

// Enum imports for use in constants (if needed)
import { UserLevel } from './types';
