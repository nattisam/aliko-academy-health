// State configuration for multi-state support
// Currently only Washington is active, but this architecture supports expansion

export interface StateConfig {
  id: string;
  name: string;
  abbreviation: string;
  isActive: boolean;
  contact: {
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    admissionsPhone: string;
    email: string;
    admissionsEmail: string;
    generalEmail?: string;
  };
  officeHours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  regulatory: {
    department: string;
    departmentAbbr: string;
    certifications: string[];
  };
  regions: string[];
}

export const stateConfigs: Record<string, StateConfig> = {
  WA: {
    id: "WA",
    name: "Washington",
    abbreviation: "WA",
    isActive: true,
    contact: {
      address: "123 Healthcare Drive, Suite 100",
      city: "Seattle",
      state: "WA",
      zip: "98101",
      phone: "206-353-5373",
      admissionsPhone: "206-353-5373",
      email: "info@alikohub.com",
      admissionsEmail: "academy@alikohub.com",
      generalEmail: "academy-health@alikohub.com",
    },
    officeHours: {
      weekday: "Monday – Friday: 8:00 AM – 6:00 PM",
      saturday: "Saturday: 9:00 AM – 2:00 PM",
      sunday: "Sunday: Closed",
    },
    regulatory: {
      department: "Washington State Department of Health",
      departmentAbbr: "WA DOH",
      certifications: [
        "Washington State CNA Certification",
        "AAPC CPC Certification",
        "AAMA CMA Certification",
        "ASCP Phlebotomy Certification",
        "NHA EKG Technician Certification",
        "NHA CPCT Certification",
        "WA State HCA/HHA Certification",
        "AHA BLS Provider Certification",
      ],
    },
    regions: ["Seattle", "Bellevue", "Tacoma", "King County", "Pierce County", "Snohomish County"],
  },
  OR: {
    id: "OR",
    name: "Oregon",
    abbreviation: "OR",
    isActive: false,
    contact: {
      address: "456 Medical Center Blvd, Suite 200",
      city: "Portland",
      state: "OR",
      zip: "97201",
      phone: "(503) 555-0100",
      admissionsPhone: "(503) 555-0101",
      email: "oregon@alikoacademy.edu",
      admissionsEmail: "admissions.or@alikoacademy.edu",
    },
    officeHours: {
      weekday: "Monday – Friday: 8:00 AM – 6:00 PM",
      saturday: "Saturday: 9:00 AM – 2:00 PM",
      sunday: "Sunday: Closed",
    },
    regulatory: {
      department: "Oregon Health Authority",
      departmentAbbr: "OHA",
      certifications: [
        "Oregon State CNA Certification",
        "AAPC CPC Certification",
        "AAMA CMA Certification",
        "ASCP Phlebotomy Certification",
        "NHA EKG Technician Certification",
        "NHA CPCT Certification",
        "OR State HCA/HHA Certification",
        "AHA BLS Provider Certification",
      ],
    },
    regions: ["Portland", "Salem", "Eugene", "Multnomah County", "Washington County", "Clackamas County"],
  },
  CA: {
    id: "CA",
    name: "California",
    abbreviation: "CA",
    isActive: false,
    contact: {
      address: "789 Health Sciences Way, Suite 300",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      phone: "(213) 555-0100",
      admissionsPhone: "(213) 555-0101",
      email: "california@alikoacademy.edu",
      admissionsEmail: "admissions.ca@alikoacademy.edu",
    },
    officeHours: {
      weekday: "Monday – Friday: 8:00 AM – 6:00 PM",
      saturday: "Saturday: 9:00 AM – 2:00 PM",
      sunday: "Sunday: Closed",
    },
    regulatory: {
      department: "California Department of Public Health",
      departmentAbbr: "CDPH",
      certifications: [
        "California State CNA Certification",
        "AAPC CPC Certification",
        "AAMA CMA Certification",
        "ASCP Phlebotomy Certification",
        "NHA EKG Technician Certification",
        "NHA CPCT Certification",
        "CA State HHA Certification",
        "AHA BLS Provider Certification",
      ],
    },
    regions: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "Orange County", "San Bernardino County"],
  },
  TX: {
    id: "TX",
    name: "Texas",
    abbreviation: "TX",
    isActive: false,
    contact: {
      address: "321 Healthcare Plaza, Suite 150",
      city: "Houston",
      state: "TX",
      zip: "77001",
      phone: "(713) 555-0100",
      admissionsPhone: "(713) 555-0101",
      email: "texas@alikoacademy.edu",
      admissionsEmail: "admissions.tx@alikoacademy.edu",
    },
    officeHours: {
      weekday: "Monday – Friday: 8:00 AM – 6:00 PM",
      saturday: "Saturday: 9:00 AM – 2:00 PM",
      sunday: "Sunday: Closed",
    },
    regulatory: {
      department: "Texas Health and Human Services",
      departmentAbbr: "TX HHS",
      certifications: [
        "Texas State CNA Certification",
        "AAPC CPC Certification",
        "AAMA CMA Certification",
        "ASCP Phlebotomy Certification",
        "NHA EKG Technician Certification",
        "NHA CPCT Certification",
        "TX State HHA Certification",
        "AHA BLS Provider Certification",
      ],
    },
    regions: ["Houston", "Dallas", "Austin", "San Antonio", "Harris County", "Travis County"],
  },
};

// Default state (Washington)
export const DEFAULT_STATE = "WA";

// Get all active states
export const getActiveStates = (): StateConfig[] => {
  return Object.values(stateConfigs).filter((state) => state.isActive);
};

// Get all states (for admin purposes)
export const getAllStates = (): StateConfig[] => {
  return Object.values(stateConfigs);
};

// Get state by ID
export const getStateConfig = (stateId: string): StateConfig | undefined => {
  return stateConfigs[stateId];
};
