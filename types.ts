
export enum ViolationCategory {
  ILLEGAL_PARKING = "Illegal Parking",
  SIDEWALK_OBSTRUCTION = "Sidewalk Obstruction",
  CROSSWALK_VIOLATION = "Crosswalk Violation",
  TRASH_DUMPING = "Illegal Trash Dumping",
  OTHER = "Other",
}

export enum ReportStatus {
  PENDING = "Pending",
  VALIDATED = "Validated",
  REJECTED = "Rejected",
  RESOLVED = "Resolved",
}

export interface ViolationReport {
  id: string;
  userId: string;
  timestamp: number;
  latitude: number;
  longitude: number;
  category: ViolationCategory;
  description: string;
  imageUrl?: string; // URL to the uploaded image
  blurredImageUrl?: string; // URL to blurred image
  status: ReportStatus;
  civipointsAwarded?: number;
  address?: string; // Geocoded address
  weather?: string; // Weather metadata
  upvotes: number;
  downvotes: number;
}

export interface User {
  id: string;
  username: string;
  civipoints: number;
  level: UserLevel;
  profilePictureUrl?: string;
  reportedViolations: string[]; // Array of report IDs
  validatedContributions: number;
}

export enum UserLevel {
  TRAINEE = "Trainee",
  ENFORCER = "Enforcer",
  GUARDIAN = "Guardian",
  CIVIC_SENTINEL = "Civic Sentinel",
}

export interface CivicMission {
  id: string;
  title: string;
  description: string;
  criteria: string; // e.g., "Submit 3 red-zone violations"
  rewardPoints: number;
  isCompleted: boolean;
  theme?: string; // e.g., "Anti-Kamote Week"
  expiresAt?: number;
}

export interface ParkingSpot {
  id: string;
  latitude: number;
  longitude: number;
  type: "Free" | "Paid" | "Overnight";
  notes?: string;
  contributedBy: string; // User ID
  isValidated: boolean;
  address?: string;
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  retrievedContext?: {
    uri: string;
    title: string;
  };
}
