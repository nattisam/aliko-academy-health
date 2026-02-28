import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StateProvider } from "@/contexts/StateContext";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import ExamPrepPrograms from "./pages/ExamPrepPrograms";
import ExamPrepDetail from "./pages/ExamPrepDetail";
import Schedule from "./pages/Schedule";
import Tuition from "./pages/Tuition";
import Admissions from "./pages/Admissions";
import Apply from "./pages/Apply";
import Partners from "./pages/Partners";
import CareerServices from "./pages/CareerServices";
import Accreditation from "./pages/Accreditation";
import Policies from "./pages/Policies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StudentLogin from "./pages/StudentLogin";
import NotFound from "./pages/NotFound";
import Enterprise from "./pages/Enterprise";
import InstitutionalTraining from "./pages/InstitutionalTraining";
import InstitutionalCategoryDetail from "./pages/InstitutionalCategoryDetail";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <StateProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:programId" element={<ProgramDetail />} />
            <Route path="/exam-prep" element={<ExamPrepPrograms />} />
            <Route path="/exam-prep/:programId" element={<ExamPrepDetail />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/tuition" element={<Tuition />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/career-services" element={<CareerServices />} />
            <Route path="/accreditation" element={<Accreditation />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/institutional-training" element={<InstitutionalTraining />} />
            <Route path="/institutional-training/:categorySlug" element={<InstitutionalCategoryDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </StateProvider>
  </QueryClientProvider>
);

export default App;
