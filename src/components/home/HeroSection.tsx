import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, GraduationCap, Clock, HeartHandshake } from "lucide-react";
import { useState, useRef } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import heroPoster from "@/assets/hero-poster.jpg";

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container-academy relative z-10 py-16 lg:py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-accent">
              Enrolling Now for Spring 2025
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Start Your Healthcare Career with{" "}
            <span className="text-accent">Confidence</span>
          </h1>
          
          <p className="mt-6 text-lg lg:text-xl text-white/80 max-w-xl">
            Industry-aligned healthcare training with clear cohort start dates. 
            Join thousands of graduates building rewarding careers in healthcare.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base shadow-lg hover:shadow-xl transition-shadow">
              <Link to="/programs">
                View Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="text-base bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
            >
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <GraduationCap className="h-5 w-5 text-accent" />
                <span className="text-2xl lg:text-3xl font-bold text-white">9+</span>
              </div>
              <span className="text-sm text-white/70">Healthcare Programs</span>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-2xl lg:text-3xl font-bold text-white">Flexible</span>
              </div>
              <span className="text-sm text-white/70">Schedules</span>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <HeartHandshake className="h-5 w-5 text-accent" />
                <span className="text-2xl lg:text-3xl font-bold text-white">100%</span>
              </div>
              <span className="text-sm text-white/70">Career Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Control Button */}
      <button
        onClick={togglePlay}
        className="absolute bottom-8 right-8 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <Play className="h-5 w-5" />
        )}
      </button>
    </section>
  );
}
