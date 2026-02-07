import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Schedule from "./pages/Schedule";
import Tuition from "./pages/Tuition";
import Admissions from "./pages/Admissions";
import Partners from "./pages/Partners";
import CareerServices from "./pages/CareerServices";
import Accreditation from "./pages/Accreditation";
import Policies from "./pages/Policies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StudentLogin from "./pages/StudentLogin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:programId" element={<ProgramDetail />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/tuition" element={<Tuition />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/career-services" element={<CareerServices />} />
          <Route path="/accreditation" element={<Accreditation />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-login" element={<StudentLogin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
