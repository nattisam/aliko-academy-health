

# Aliko Academy – Health Website Plan

## Overview
A professional, compliance-ready healthcare training website with cohort-based enrollment, admin management capabilities, and seamless LMS integration. The design will be corporate & institutional, prioritizing trust, clarity, and accessibility for adult learners.

---

## Design System

### Brand Colors (Locked)
- **Primary Blue (#1F6FE5)**: Headers, buttons, links, navigation
- **Action Orange (#F7941D)**: Start date badges, progress indicators, highlights only
- **Dark Text (#1E1E1E)**: Body copy, headings
- **Light Background (#F6F8FB)**: Page backgrounds
- **Divider Gray (#E2E6EC)**: Borders, separators

### Typography & Layout
- Clean, professional sans-serif typography
- Structured grid layouts with clear visual hierarchy
- Conservative spacing consistent with university websites
- Mobile-first responsive design
- WCAG 2.1 AA accessibility compliance

---

## Site Structure & Pages

### 1. **Home Page**
- **Header**: Logo (top-left, links to home), main navigation, "Apply Now" CTA button
- **Hero Section**: 
  - Headline: "Start Your Healthcare Career with Confidence"
  - Subheadline about industry-aligned training with cohort start dates
  - Two CTAs: "View Programs" and "Apply Now"
- **Programs Snapshot**: Grid of all 9 programs as cards (CNA & Medical Billing first)
  - Each shows: name, duration, delivery mode, start date badge, "Apply Now" CTA
- **How It Works**: 6-step visual process (Choose → Enroll → Access LMS → Train → Certify → Career)
- **Trust Strip**: Compliance messaging, accreditation-ready statement
- **Footer**: Contact, policy links, disclaimer

### 2. **Programs Catalog**
- Filterable grid of program cards
- Filters: Program type, modality, location, enrollment status
- Default view: Enrollment Open programs first
- Cards display: Name, credential, duration, hours, start date, enrollment status, CTA

### 3. **Program Detail Pages** (Dynamic template for all 9 programs)
- Program Overview
- Career Pathways
- Curriculum Outline with hours breakdown (Theory/Lab/Clinical)
- Tuition & Full Cost Breakdown
- Admission Requirements
- Certification/Exam Pathway
- Start Date & Enrollment Status
- Apply CTA

### 4. **Start Dates & Schedule**
- Calendar/table view of all program start dates
- Clear distinction between programs and their cohorts
- Enrollment status indicators (Open/Closed)

### 5. **Tuition & Payment Plans**
- Tuition per program with transparent breakdown
- What's included in tuition
- Payment options: One-time, Installments, Sponsor/Agency pay
- Link to full refund policy

### 6. **Admissions (How to Apply)**
- Step-by-step enrollment process
- Required documents checklist
- Application form submission
- Next steps explanation

### 7. **Partners Page** (Two sections)
- **Clinical Practice Partners**: Organization name, type, region, programs supported
  - Required disclaimer about placement coordination
- **Career Network Partners**: Organization, industry, roles hired, region
  - Required disclaimer: No employment guarantee

### 8. **Career Services**
- Resume support overview
- Interview preparation
- Job search guidance
- Employer engagement explanation
- Link to Career Network Partners

### 9. **Accreditation & Compliance**
- Accreditation-ready messaging (no false claims)
- Quality framework overview
- State alignment information

### 10. **Policies & Student Handbook**
- Refund & Cancellation
- Attendance Policy
- Grievance & Complaints
- Academic Progress
- ADA Accommodations
- Privacy & FERPA
- Code of Conduct

### 11. **About Aliko Academy**
- Mission, vision, values
- Leadership/team overview
- History and commitment to healthcare education

### 12. **Contact Us**
- Contact form submission
- Phone, email, address
- Office hours

### 13. **Student Login**
- Redirect button to existing LMS (no LMS rebuild)

---

## Programs Included (All 9)

1. **Certified Nursing Assistant (CNA)** ★ Featured
2. **Medical Billing & Coding** ★ Featured
3. Medical Assistant (MA)
4. Phlebotomy Technician
5. Electrocardiogram (EKG) Technician
6. Patient Care Technician (PCT)
7. Home Health Aide (HHA)
8. Medication Aide Certification
9. Basic Life Support (BLS) & CPR

Each will have placeholder content for curriculum, hours, tuition, and requirements.

---

## Admin Dashboard (Backend Required)

An admin interface for staff to manage:

### Program Management
- Edit program details (description, curriculum, hours, tuition)
- Set start dates per program
- Toggle enrollment status (Open/Closed)

### Partner Management
- Add/edit/remove Clinical Practice Partners
- Add/edit/remove Career Network Partners

### Application Management
- View submitted applications
- Application status tracking

### Content Management
- Edit page content (About, Policies, Career Services)
- Update contact information

---

## Backend Architecture (Supabase)

### Database Tables
- **programs**: All program information, start dates, enrollment status
- **applications**: Student application submissions
- **clinical_partners**: Clinical practice partner organizations
- **career_partners**: Career network partner organizations
- **page_content**: Editable content blocks for various pages
- **admin_users**: Staff with dashboard access (role-based)

### Key Features
- Row-level security for admin access
- Form submission handling
- No payment processing (external)
- No user authentication for students (form-only)

---

## Technical Approach

- **Frontend**: React with TypeScript, Tailwind CSS, shadcn/ui components
- **Backend**: Supabase for database & admin authentication
- **Forms**: Zod validation for all form inputs
- **Accessibility**: WCAG 2.1 AA compliant
- **Mobile**: Responsive, mobile-first design
- **SEO**: Proper meta tags, semantic HTML

---

## What's NOT Included

- ❌ LMS functionality (uses existing external LMS)
- ❌ Online payment processing (external payments)
- ❌ Student user accounts (form submissions only)
- ❌ "Immediate Start" or "Start Today" language

---

## Delivery Phases

**Phase 1**: Core website structure, all public pages, navigation, design system

**Phase 2**: All 9 program pages with placeholder content

**Phase 3**: Backend setup, admin dashboard, form handling

**Phase 4**: Partners pages, Career Services, Policies

**Phase 5**: Polish, accessibility audit, mobile optimization

