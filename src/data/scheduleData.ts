export type ScheduleType = "morning" | "evening" | "weekend";
export type WeekPhase = "theory" | "skills" | "clinical";
export type DayMode = "Online" | "In Person" | "Clinical Facility";

export interface ScheduleDay {
  day: string; // e.g. "Monday"
  hours: number;
  content: string;
  skills?: string;
  mode: DayMode;
  phase: WeekPhase;
}

export interface ScheduleWeek {
  week: number;
  title: string;
  totalHours: number;
  phase: WeekPhase;
  days: ScheduleDay[];
}

export interface ScheduleConfig {
  id: ScheduleType;
  label: string;
  timeRange: string;
  daysOfWeek: string;
  totalHours: number;
  programLength: string;
  icon: "sun" | "moon" | "calendar";
  weeks: ScheduleWeek[];
}

// Shared curriculum (same for morning & evening)
const weekdayWeeks: ScheduleWeek[] = [
  {
    week: 1,
    title: "Classroom + Skills",
    totalHours: 20,
    phase: "theory",
    days: [
      { day: "Monday", hours: 4, content: "Chapter 1 & 2", mode: "Online", phase: "theory" },
      { day: "Tuesday", hours: 4, content: "Chapter 2 (cont.) & Chapter 3", mode: "Online", phase: "theory" },
      { day: "Wednesday", hours: 4, content: "Exam (Ch.1–3) & Chapter 4", skills: "Skills: Ch.4", mode: "In Person", phase: "theory" },
      { day: "Thursday", hours: 4, content: "Exam (Ch.4) & Chapter 5", mode: "Online", phase: "theory" },
      { day: "Friday", hours: 4, content: "Chapter 6", skills: "Skills: Ch.5 & 6", mode: "In Person", phase: "theory" },
    ],
  },
  {
    week: 2,
    title: "Classroom + Skills",
    totalHours: 23,
    phase: "theory",
    days: [
      { day: "Monday", hours: 4, content: "Exam (Ch.5–6) & Chapter 7", skills: "Skills: Ch.7", mode: "Online", phase: "theory" },
      { day: "Tuesday", hours: 4, content: "Chapter 8 & Exam (Ch.7–8)", skills: "Skills: Ch.8", mode: "Online", phase: "theory" },
      { day: "Wednesday", hours: 5, content: "Chapter 9 & 10 + Exam", skills: "Skills: Ch.9 & 10", mode: "In Person", phase: "theory" },
      { day: "Thursday", hours: 5, content: "Skills Practice Day", skills: "All skills", mode: "Online", phase: "skills" },
      { day: "Friday", hours: 5, content: "Skills Practice Day", skills: "All skills", mode: "In Person", phase: "skills" },
    ],
  },
  {
    week: 3,
    title: "Full Skills Week",
    totalHours: 25,
    phase: "skills",
    days: [
      { day: "Monday", hours: 5, content: "Full Skills Practice", skills: "All skills", mode: "Online", phase: "skills" },
      { day: "Tuesday", hours: 5, content: "Full Skills Practice", skills: "All skills", mode: "Online", phase: "skills" },
      { day: "Wednesday", hours: 5, content: "Full Skills Practice", skills: "All skills", mode: "In Person", phase: "skills" },
      { day: "Thursday", hours: 5, content: "Full Skills Practice", skills: "All skills", mode: "Online", phase: "skills" },
      { day: "Friday", hours: 5, content: "Full Skills Practice", skills: "All skills", mode: "In Person", phase: "skills" },
    ],
  },
  {
    week: 4,
    title: "Clinical Rotation",
    totalHours: 40,
    phase: "clinical",
    days: [
      { day: "Monday", hours: 8, content: "Clinical Practice", mode: "Clinical Facility", phase: "clinical" },
      { day: "Tuesday", hours: 8, content: "Clinical Practice", mode: "Clinical Facility", phase: "clinical" },
      { day: "Wednesday", hours: 8, content: "Clinical Practice", mode: "Clinical Facility", phase: "clinical" },
      { day: "Thursday", hours: 8, content: "Clinical Practice", mode: "Clinical Facility", phase: "clinical" },
      { day: "Friday", hours: 8, content: "Clinical Practice", mode: "Clinical Facility", phase: "clinical" },
    ],
  },
];

export const schedules: ScheduleConfig[] = [
  {
    id: "morning",
    label: "Morning Class",
    timeRange: "8:00 AM – 12:00 PM",
    daysOfWeek: "Monday – Friday",
    totalHours: 108,
    programLength: "4 Weeks",
    icon: "sun",
    weeks: weekdayWeeks,
  },
  {
    id: "evening",
    label: "Evening Class",
    timeRange: "5:00 PM – 9:00 PM",
    daysOfWeek: "Monday – Friday",
    totalHours: 108,
    programLength: "4 Weeks",
    icon: "moon",
    weeks: weekdayWeeks,
  },
  {
    id: "weekend",
    label: "Weekend Class",
    timeRange: "8:00 AM – 5:00 PM",
    daysOfWeek: "Saturday – Sunday",
    totalHours: 108,
    programLength: "8 Weeks",
    icon: "calendar",
    weeks: [
      {
        week: 1,
        title: "Classroom + Skills",
        totalHours: 16,
        phase: "theory",
        days: [
          { day: "Saturday", hours: 8, content: "Chapter 1, 2 & 3", mode: "Online", phase: "theory" },
          { day: "Sunday", hours: 8, content: "Exam (Ch.1–3) & Chapter 4", skills: "Skills: Ch.4", mode: "In Person", phase: "theory" },
        ],
      },
      {
        week: 2,
        title: "Classroom + Skills",
        totalHours: 16,
        phase: "theory",
        days: [
          { day: "Saturday", hours: 8, content: "Exam (Ch.4) & Chapter 5, 6", skills: "Skills: Ch.5 & 6", mode: "Online", phase: "theory" },
          { day: "Sunday", hours: 8, content: "Exam (Ch.5–6) & Chapter 7", skills: "Skills: Ch.7", mode: "In Person", phase: "theory" },
        ],
      },
      {
        week: 3,
        title: "Classroom + Skills",
        totalHours: 16,
        phase: "theory",
        days: [
          { day: "Saturday", hours: 8, content: "Chapter 8 & Exam (Ch.7–8)", skills: "Skills: Ch.8", mode: "Online", phase: "theory" },
          { day: "Sunday", hours: 8, content: "Chapter 9, 10 + Exam", skills: "Skills: Ch.9 & 10", mode: "In Person", phase: "theory" },
        ],
      },
      {
        week: 4,
        title: "Skills Practice",
        totalHours: 10,
        phase: "skills",
        days: [
          { day: "Saturday", hours: 5, content: "Skills Practice Day", skills: "All skills", mode: "Online", phase: "skills" },
          { day: "Sunday", hours: 5, content: "Skills Practice Day", skills: "All skills", mode: "In Person", phase: "skills" },
        ],
      },
      {
        week: 5,
        title: "Full Skills Week",
        totalHours: 10,
        phase: "skills",
        days: [
          { day: "Saturday", hours: 5, content: "Full Skills Practice", skills: "All skills", mode: "In Person", phase: "skills" },
          { day: "Sunday", hours: 5, content: "Full Skills Practice", skills: "All skills", mode: "In Person", phase: "skills" },
        ],
      },
      {
        week: 6,
        title: "Clinical Rotation",
        totalHours: 16,
        phase: "clinical",
        days: [
          { day: "Saturday", hours: 8, content: "Clinical Practice", mode: "Clinical Facility", phase: "clinical" },
          { day: "Sunday", hours: 8, content: "Clinical Practice", mode: "Clinical Facility", phase: "clinical" },
        ],
      },
      {
        week: 7,
        title: "Clinical Rotation",
        totalHours: 16,
        phase: "clinical",
        days: [
          { day: "Saturday", hours: 8, content: "Clinical Practice", mode: "Clinical Facility", phase: "clinical" },
          { day: "Sunday", hours: 8, content: "Clinical Practice", mode: "Clinical Facility", phase: "clinical" },
        ],
      },
      {
        week: 8,
        title: "Clinical Rotation",
        totalHours: 8,
        phase: "clinical",
        days: [
          { day: "Saturday", hours: 8, content: "Clinical Practice", mode: "Clinical Facility", phase: "clinical" },
        ],
      },
    ],
  },
];

// Upcoming cohort start dates
export interface CohortDate {
  id: string;
  date: string; // ISO date
  scheduleType: ScheduleType;
  seatsAvailable: number | null;
  status: "open" | "waitlist" | "closed";
}

export const upcomingCohorts: CohortDate[] = [
  { id: "m-apr-2026", date: "2026-04-07", scheduleType: "morning", seatsAvailable: 12, status: "open" },
  { id: "e-apr-2026", date: "2026-04-07", scheduleType: "evening", seatsAvailable: 8, status: "open" },
  { id: "w-apr-2026", date: "2026-04-11", scheduleType: "weekend", seatsAvailable: 15, status: "open" },
  { id: "m-may-2026", date: "2026-05-05", scheduleType: "morning", seatsAvailable: 20, status: "open" },
  { id: "e-may-2026", date: "2026-05-05", scheduleType: "evening", seatsAvailable: 20, status: "open" },
  { id: "w-may-2026", date: "2026-05-09", scheduleType: "weekend", seatsAvailable: 20, status: "open" },
  { id: "m-jun-2026", date: "2026-06-01", scheduleType: "morning", seatsAvailable: null, status: "open" },
  { id: "e-jun-2026", date: "2026-06-01", scheduleType: "evening", seatsAvailable: null, status: "open" },
  { id: "w-jun-2026", date: "2026-06-06", scheduleType: "weekend", seatsAvailable: null, status: "open" },
  { id: "m-jul-2026", date: "2026-07-06", scheduleType: "morning", seatsAvailable: null, status: "open" },
  { id: "e-jul-2026", date: "2026-07-06", scheduleType: "evening", seatsAvailable: null, status: "open" },
  { id: "w-jul-2026", date: "2026-07-11", scheduleType: "weekend", seatsAvailable: null, status: "open" },
];
