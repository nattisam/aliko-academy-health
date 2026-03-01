import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StateProvider } from "@/contexts/StateContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
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
import Partnerships from "./pages/Partnerships";
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
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import AdminPrograms from "./pages/admin/AdminPrograms";
import AdminCohorts from "./pages/admin/AdminCohorts";
import AdminStudents from "./pages/admin/AdminStudents";
import AdminApplications from "./pages/admin/AdminApplications";
import AdminEnterpriseLeads from "./pages/admin/AdminEnterpriseLeads";
import AdminExamPrep from "./pages/admin/AdminExamPrep";
import AdminContent from "./pages/admin/AdminContent";
import AdminInstitutional from "./pages/admin/AdminInstitutional";
import AdminPartnerships from "./pages/admin/AdminPartnerships";
import AdminPartners from "./pages/admin/AdminPartners";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <StateProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              {/* Public routes */}
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
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/career-services" element={<CareerServices />} />
              <Route path="/accreditation" element={<Accreditation />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/student-login" element={<StudentLogin />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/institutional-training" element={<InstitutionalTraining />} />
              <Route path="/institutional-training/:categorySlug" element={<InstitutionalCategoryDetail />} />

              {/* Admin routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/admin/programs" element={<ProtectedRoute><AdminPrograms /></ProtectedRoute>} />
              <Route path="/admin/cohorts" element={<ProtectedRoute><AdminCohorts /></ProtectedRoute>} />
              <Route path="/admin/students" element={<ProtectedRoute><AdminStudents /></ProtectedRoute>} />
              <Route path="/admin/applications" element={<ProtectedRoute><AdminApplications /></ProtectedRoute>} />
              <Route path="/admin/enterprise-leads" element={<ProtectedRoute><AdminEnterpriseLeads /></ProtectedRoute>} />
              <Route path="/admin/exam-prep" element={<ProtectedRoute><AdminExamPrep /></ProtectedRoute>} />
              <Route path="/admin/content" element={<ProtectedRoute><AdminContent /></ProtectedRoute>} />
              <Route path="/admin/institutional" element={<ProtectedRoute><AdminInstitutional /></ProtectedRoute>} />
              <Route path="/admin/partnerships" element={<ProtectedRoute><AdminPartnerships /></ProtectedRoute>} />
              <Route path="/admin/partners" element={<ProtectedRoute><AdminPartners /></ProtectedRoute>} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </StateProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
