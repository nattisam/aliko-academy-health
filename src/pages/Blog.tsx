import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User, BookOpen } from "lucide-react";

const blogPosts = [
  {
    id: "how-to-prepare-for-cna-classes",
    title: "How to Prepare for Your CNA Classes: What to Expect",
    excerpt:
      "Starting CNA training can feel overwhelming. Here's everything you need to know about what to expect during your first weeks, from classroom instruction to hands-on lab skills practice.",
    category: "Training Advice",
    date: "March 10, 2026",
    readTime: "5 min read",
    content: `Starting your CNA training journey is an exciting step toward a rewarding healthcare career. Here's what you can expect:

**Week 1-2: Classroom Foundation**
Your first days will focus on foundational knowledge — medical terminology, patient rights, infection control, and basic anatomy. You'll learn the theory behind every skill you'll later practice hands-on.

**Week 2-3: Lab Skills Practice**
The lab is where things get real. You'll practice taking vital signs, proper body mechanics, patient positioning, bed-making, and personal care skills on training mannequins and with classmates.

**Week 3-4: Clinical Rotations**
Clinical experience takes place at partner healthcare facilities where you'll work alongside experienced CNAs and nurses. This is where you apply everything you've learned with real patients under supervision.

**Tips for Success:**
- Arrive on time and be prepared every day
- Practice skills at home when possible
- Ask questions — your instructors want you to succeed
- Study in small chunks rather than cramming
- Take care of your physical health — CNA work is physical`,
  },
  {
    id: "cna-interview-preparation-guide",
    title: "CNA Interview Preparation: Top Questions & How to Answer Them",
    excerpt:
      "Landing your first CNA job starts with acing the interview. Learn the most common CNA interview questions and proven strategies to present yourself as the ideal candidate.",
    category: "Career Tips",
    date: "March 5, 2026",
    readTime: "7 min read",
    content: `Your CNA certification opens doors, but the interview is where you seal the deal. Here are the most common questions and how to answer them:

**"Why do you want to be a CNA?"**
Be genuine. Talk about your passion for helping people and your desire to make a direct impact on patient care.

**"How would you handle a difficult patient?"**
Emphasize patience, empathy, and de-escalation. Give a specific example if possible.

**"Describe your experience with vital signs."**
Walk through the process confidently — blood pressure, pulse, respiration, temperature. Mention any clinical experience.

**"What would you do if you noticed a change in a patient's condition?"**
Always answer: report to the charge nurse immediately, document observations, and continue monitoring.

**General Tips:**
- Dress professionally in clean, neat attire
- Bring copies of your certification and resume
- Research the facility beforehand
- Prepare questions to ask the interviewer
- Follow up with a thank-you email within 24 hours`,
  },
  {
    id: "career-paths-after-cna-certification",
    title: "5 Career Paths You Can Pursue After CNA Certification",
    excerpt:
      "A CNA certification is more than a job — it's a launchpad for your healthcare career. Discover the many career paths available to certified nursing assistants.",
    category: "Career Guidance",
    date: "February 28, 2026",
    readTime: "6 min read",
    content: `Your CNA certification opens more doors than you might think:

**1. Registered Nurse (RN)**
Many RNs started as CNAs. Your hands-on experience gives you a significant advantage in nursing school and beyond.

**2. Licensed Practical Nurse (LPN)**
LPN programs are shorter than RN programs and offer another pathway to advance your nursing career.

**3. Patient Care Technician (PCT)**
Add phlebotomy and EKG skills to your CNA foundation for expanded duties and higher pay.

**4. Home Health Aide / Private Duty Care**
Enjoy more autonomy and flexible schedules working one-on-one with patients in their homes.

**5. Healthcare Administration**
With additional education, your clinical experience can transition into management and administrative roles.

Each path builds on the compassionate care skills you develop as a CNA. The healthcare industry continues to grow, making now the perfect time to start your journey.`,
  },
  {
    id: "understanding-washington-cna-requirements",
    title: "Understanding Washington State CNA Requirements in 2026",
    excerpt:
      "Stay up to date with Washington State's CNA certification requirements, including training hours, exam details, background checks, and license renewal processes.",
    category: "Certification",
    date: "February 20, 2026",
    readTime: "4 min read",
    content: `Washington State has specific requirements for becoming a Certified Nursing Assistant:

**Training Requirements:**
- Minimum 120 hours of state-approved training
- Includes classroom instruction, lab practice, and supervised clinical experience
- Must be completed at a state-approved training facility

**Certification Exam:**
- Written (or oral) knowledge test
- Skills evaluation with hands-on demonstration
- Must pass both components
- Aliko Academy is an official Washington State CNA testing site

**Background Check:**
- Washington State Patrol background check required
- FBI fingerprint check required
- Certain convictions may affect eligibility

**Renewal:**
- Annual renewal required
- Minimum 12 continuing education hours
- Minimum 200 hours worked as CNA during renewal period
- Submit renewal application before credential expiration

Contact Aliko Academy for assistance navigating these requirements.`,
  },
  {
    id: "benefits-of-healthcare-career",
    title: "Why a Healthcare Career Is One of the Best Choices You Can Make",
    excerpt:
      "Job security, competitive pay, flexible schedules, and the chance to make a real difference — discover why healthcare careers continue to be among the most rewarding in the job market.",
    category: "Career Guidance",
    date: "February 15, 2026",
    readTime: "5 min read",
    content: `Healthcare careers offer unique advantages that few other industries can match:

**Job Security**
Healthcare is one of the fastest-growing industries. The demand for CNAs, medical assistants, and other healthcare workers continues to rise as the population ages.

**Competitive Pay & Benefits**
Healthcare positions offer competitive wages, health insurance, retirement plans, and often shift differentials for evening and weekend work.

**Flexible Schedules**
Healthcare facilities operate 24/7, offering day, evening, night, and weekend shifts. Find a schedule that fits your life.

**Make a Real Difference**
Few careers offer the personal satisfaction of directly caring for people in need. Every day as a healthcare worker, you make a meaningful impact.

**Career Growth**
Healthcare offers clear pathways for advancement — from CNA to LPN to RN to NP, with many specializations along the way.

**Quick Entry**
Unlike many careers requiring 4+ years of education, CNA certification can be completed in as little as 4-8 weeks, getting you into the workforce quickly.`,
  },
  {
    id: "what-to-expect-during-clinical-rotations",
    title: "What to Expect During Your CNA Clinical Rotations",
    excerpt:
      "Clinical rotations are where classroom learning meets real-world patient care. Here's what to expect, how to prepare, and tips for making the most of your clinical experience.",
    category: "Training Advice",
    date: "February 10, 2026",
    readTime: "6 min read",
    content: `Clinical rotations are the most exciting — and sometimes nerve-wracking — part of CNA training. Here's how to prepare:

**Before Your First Day:**
- Review all skills you've learned in lab
- Prepare your uniform and required equipment
- Get plenty of rest the night before
- Review the facility's policies if available

**What You'll Do:**
- Assist patients with activities of daily living (bathing, dressing, feeding)
- Take and record vital signs
- Practice proper body mechanics during transfers
- Document patient observations
- Work alongside experienced CNAs and nurses

**Tips for Success:**
- Always introduce yourself to patients and explain what you're doing
- Ask questions when unsure — never guess
- Be respectful of patients' privacy and dignity
- Stay organized and manage your time well
- Take notes after each shift to reinforce learning

**Remember:** Clinical rotations at Aliko Academy take place at our partner healthcare facilities throughout the Seattle area, giving you real-world experience in professional healthcare settings.`,
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-card to-accent/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

        <div className="container-academy relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-accent rounded-full" />
            <span className="text-sm font-medium text-accent">
              Insights & Advice
            </span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-primary">Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Expert advice, career tips, and training insights to help you
            succeed in your healthcare career journey.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-academy">
          {/* Featured Post */}
          <div className="mb-12">
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 lg:p-8">
                <Badge className="bg-white/20 text-white border-white/30 mb-4">
                  Featured Article
                </Badge>
                <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                  {blogPosts[0].title}
                </h2>
                <p className="text-primary-foreground/80 mb-4 max-w-2xl">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Card
                key={post.id}
                className="group flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-3">
                  <Badge
                    variant="outline"
                    className="w-fit mb-2 text-xs border-primary/30 text-primary"
                  >
                    {post.category}
                  </Badge>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 relative text-center bg-gradient-to-br from-primary/10 via-card to-accent/10 rounded-2xl p-8 lg:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="relative">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Healthcare Career?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't just read about it — take the first step. Explore our
                programs and apply today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="shadow-lg">
                  <Link to="/programs">
                    View Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
