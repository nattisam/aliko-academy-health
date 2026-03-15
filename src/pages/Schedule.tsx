import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarWidget } from "@/components/ui/calendar";
import {
  Calendar, Clock, ArrowRight, CheckCircle, Users, Sparkles,
  Sun, Moon, CalendarDays, MapPin, Monitor, Filter,
} from "lucide-react";
import { schedules, upcomingCohorts, type ScheduleType, type ScheduleDay } from "@/data/scheduleData";
import morningImg from "@/assets/schedule-morning.jpg";
import eveningImg from "@/assets/schedule-evening.jpg";
import weekendImg from "@/assets/schedule-weekend.jpg";

const scheduleImages: Record<ScheduleType, string> = {
  morning: morningImg,
  evening: eveningImg,
  weekend: weekendImg,
};

const scheduleIcons: Record<string, React.ReactNode> = {
  sun: <Sun className="h-5 w-5 text-yellow-500" />,
  moon: <Moon className="h-5 w-5 text-blue-400" />,
  calendar: <CalendarDays className="h-5 w-5 text-teal" />,
};

const phaseColors: Record<string, { bg: string; text: string; border: string; label: string }> = {
  theory: { bg: "bg-primary/5", text: "text-primary", border: "border-primary/20", label: "Theory" },
  skills: { bg: "bg-accent/5", text: "text-accent", border: "border-accent/20", label: "Skills Practice" },
  clinical: { bg: "bg-teal/5", text: "text-teal", border: "border-teal/20", label: "Clinical" },
};

const modeIcon = (mode: string) => {
  if (mode === "Online") return <Monitor className="h-3 w-3" />;
  return <MapPin className="h-3 w-3" />;
};

const Schedule = () => {
  const [activeSchedule, setActiveSchedule] = useState<ScheduleType>("morning");
  const [activeWeek, setActiveWeek] = useState<number | "all">("all");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [phaseFilter, setPhaseFilter] = useState<string | "all">("all");

  const schedule = schedules.find((s) => s.id === activeSchedule)!;

  // Filter cohorts by schedule type and selected date
  const filteredCohorts = useMemo(() => {
    let cohorts = upcomingCohorts.filter((c) => c.scheduleType === activeSchedule);
    if (selectedDate) {
      const dateStr = selectedDate.toISOString().split("T")[0];
      cohorts = cohorts.filter((c) => c.date === dateStr);
    }
    return cohorts;
  }, [activeSchedule, selectedDate]);

  // All cohort dates for calendar highlighting
  const cohortDates = useMemo(() => {
    return upcomingCohorts
      .filter((c) => c.scheduleType === activeSchedule)
      .map((c) => new Date(c.date + "T00:00:00"));
  }, [activeSchedule]);

  // Filter weeks
  const displayedWeeks = useMemo(() => {
    let weeks = schedule.weeks;
    if (activeWeek !== "all") {
      weeks = weeks.filter((w) => w.week === activeWeek);
    }
    if (phaseFilter !== "all") {
      weeks = weeks.filter((w) => w.phase === phaseFilter);
    }
    return weeks;
  }, [schedule, activeWeek, phaseFilter]);

  const totalDisplayedHours = displayedWeeks.reduce((acc, w) => acc + w.totalHours, 0);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-card to-accent/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="container-academy relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-accent rounded-full" />
            <span className="text-sm font-medium text-accent">Plan Your Journey</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-primary">CNA Class Schedule</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Choose your preferred schedule, explore the week-by-week curriculum, and pick your start date.
          </p>

          {/* Quick stats */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">3 Schedules</p>
                <p className="text-xs text-muted-foreground">Morning · Evening · Weekend</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">108 Hours</p>
                <p className="text-xs text-muted-foreground">Total Program</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-teal" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{upcomingCohorts.filter(c => c.scheduleType === activeSchedule).length} Dates</p>
                <p className="text-xs text-muted-foreground">Upcoming Cohorts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-academy space-y-10">

          {/* Schedule Type Selector - Photo Cards */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Choose Your Schedule</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {schedules.map((s) => {
                const isActive = s.id === activeSchedule;
                return (
                  <button
                    key={s.id}
                    onClick={() => { setActiveSchedule(s.id); setActiveWeek("all"); setPhaseFilter("all"); setSelectedDate(undefined); }}
                    className={`group relative rounded-2xl overflow-hidden text-left transition-all duration-300 ${
                      isActive ? "ring-2 ring-primary ring-offset-2 shadow-xl scale-[1.02]" : "hover:shadow-lg hover:-translate-y-1"
                    }`}
                  >
                    <div className="aspect-[4/3] relative">
                      <img src={scheduleImages[s.id]} alt={s.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      {isActive && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-primary text-primary-foreground">Selected</Badge>
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          {scheduleIcons[s.icon]}
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <p className="font-bold text-lg">{s.label}</p>
                        <p className="text-sm text-white/80">{s.daysOfWeek}</p>
                        <p className="text-sm font-semibold text-blue-200 mt-1">{s.timeRange}</p>
                        <p className="text-xs text-white/60 mt-1">{s.programLength} · {s.totalHours} hours</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filters + Calendar Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Filters */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filter Schedule</span>
              </div>

              {/* Week filter */}
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">By Week</p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant={activeWeek === "all" ? "default" : "outline"}
                    onClick={() => setActiveWeek("all")}
                  >
                    All Weeks
                  </Button>
                  {schedule.weeks.map((w) => (
                    <Button
                      key={w.week}
                      size="sm"
                      variant={activeWeek === w.week ? "default" : "outline"}
                      onClick={() => setActiveWeek(w.week)}
                    >
                      Week {w.week}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Phase filter */}
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">By Phase</p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant={phaseFilter === "all" ? "default" : "outline"}
                    onClick={() => setPhaseFilter("all")}
                  >
                    All Phases
                  </Button>
                  {Object.entries(phaseColors).map(([key, val]) => (
                    <Button
                      key={key}
                      size="sm"
                      variant={phaseFilter === key ? "default" : "outline"}
                      onClick={() => setPhaseFilter(key)}
                      className={phaseFilter === key ? "" : `${val.text} border ${val.border}`}
                    >
                      {val.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Summary bar */}
              <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 text-sm">
                <span>Showing <strong>{displayedWeeks.length}</strong> week{displayedWeeks.length !== 1 ? "s" : ""}</span>
                <span className="text-muted-foreground">·</span>
                <span><strong>{totalDisplayedHours}</strong> hours</span>
                <span className="text-muted-foreground">·</span>
                <span className="capitalize">{schedule.label}</span>
              </div>
            </div>

            {/* Calendar */}
            <Card className="h-fit">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Pick a Start Date
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <CalendarWidget
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="p-3 pointer-events-auto"
                  modifiers={{ cohortDate: cohortDates }}
                  modifiersStyles={{
                    cohortDate: {
                      backgroundColor: "hsl(var(--primary))",
                      color: "white",
                      borderRadius: "50%",
                      fontWeight: "bold",
                    },
                  }}
                  disabled={(date) => date < new Date()}
                />
                {selectedDate && (
                  <div className="px-3 pb-3">
                    {filteredCohorts.length > 0 ? (
                      <div className="space-y-2">
                        {filteredCohorts.map((c) => (
                          <div key={c.id} className="flex items-center justify-between p-2 rounded-lg bg-primary/5 border border-primary/20">
                            <div>
                              <p className="text-sm font-medium">{new Date(c.date + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
                              {c.seatsAvailable && <p className="text-xs text-muted-foreground">{c.seatsAvailable} seats available</p>}
                            </div>
                            <Button asChild size="sm">
                              <Link to="/apply">Enroll</Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-2">No cohort on this date. See highlighted dates.</p>
                    )}
                  </div>
                )}
                {!selectedDate && (
                  <p className="text-xs text-muted-foreground text-center pb-3">
                    Highlighted dates have available cohorts
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Cohort Dates */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-teal" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Upcoming Start Dates</h2>
                <p className="text-sm text-muted-foreground capitalize">{schedule.label} · {schedule.timeRange}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {upcomingCohorts.filter(c => c.scheduleType === activeSchedule).map((c) => {
                const d = new Date(c.date + "T00:00:00");
                return (
                  <Card key={c.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-bold text-foreground">
                            {d.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </span>
                        </div>
                        <Badge variant={c.status === "open" ? "default" : c.status === "waitlist" ? "secondary" : "destructive"}>
                          {c.status === "open" ? "Open" : c.status === "waitlist" ? "Waitlist" : "Closed"}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p>{schedule.daysOfWeek}</p>
                        <p>{schedule.timeRange}</p>
                        {c.seatsAvailable && <p className="text-teal font-medium mt-1">{c.seatsAvailable} seats left</p>}
                      </div>
                      <Button asChild size="sm" className="w-full mt-auto">
                        <Link to="/apply">
                          Apply Now <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Weekly Breakdown */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <CalendarDays className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Week-by-Week Breakdown</h2>
                <p className="text-sm text-muted-foreground">{schedule.programLength} · {schedule.totalHours} total hours</p>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
              {Object.entries(phaseColors).map(([key, val]) => (
                <span key={key} className="flex items-center gap-1.5">
                  <span className={`w-3 h-3 rounded ${val.bg} border ${val.border}`} />
                  <span className={val.text}>{val.label}</span>
                </span>
              ))}
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Monitor className="h-3 w-3" /> Online
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-3 w-3" /> In Person
              </span>
            </div>

            <div className="space-y-6">
              {displayedWeeks.map((week) => {
                const pc = phaseColors[week.phase];
                return (
                  <div key={week.week}>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className={`${pc.bg} ${pc.text} border ${pc.border} hover:${pc.bg}`}>
                        Week {week.week}
                      </Badge>
                      <span className="font-semibold text-foreground">{week.title}</span>
                      <span className="text-sm text-muted-foreground">({week.totalHours} hrs)</span>
                    </div>
                    <div className={`grid gap-2 ${
                      week.days.length <= 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
                    }`}>
                      {week.days.map((day, idx) => {
                        const dp = phaseColors[day.phase];
                        return (
                          <Card key={idx} className={`${dp.bg} border ${dp.border} hover:shadow-md transition-all`}>
                            <CardContent className="p-3">
                              <div className="flex items-center justify-between mb-2">
                                <span className={`text-xs font-bold ${dp.text}`}>{day.day}</span>
                                <span className="text-[10px] text-muted-foreground bg-background/80 rounded-full px-2 py-0.5">{day.hours}h</span>
                              </div>
                              <p className={`text-xs font-medium ${dp.text}`}>{day.content}</p>
                              {day.skills && (
                                <p className="text-xs text-accent font-medium mt-1">{day.skills}</p>
                              )}
                              <div className="flex items-center gap-1 mt-2 text-[10px] text-muted-foreground">
                                {modeIcon(day.mode)}
                                <span>{day.mode}</span>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Info Card */}
          <Card className="bg-gradient-to-br from-muted/50 to-muted/30 border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                About Our CNA Program
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="mb-4">
                Our CNA program is 108 total hours across theory, skills lab, and clinical rotation.
                All schedules follow the same comprehensive curriculum — choose the timing that works for you.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Same curriculum across all schedule options",
                  "Online and in-person hybrid delivery",
                  "Hands-on clinical rotation at partner facilities",
                  "Prepares you for Washington State CNA Certification Exam",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                <Link to="/contact" className="text-primary hover:underline font-medium">
                  Contact our admissions team
                </Link>{" "}
                if you have questions about upcoming start dates or need assistance with enrollment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;
