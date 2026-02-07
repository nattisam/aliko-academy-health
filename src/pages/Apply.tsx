import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FileText, Upload, CheckCircle, GraduationCap, Calendar, User, Mail, Phone, MapPin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { programs } from "@/data/programs";

const applicationSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").max(15),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  
  // Address
  streetAddress: z.string().min(5, "Please enter your street address"),
  city: z.string().min(2, "Please enter your city"),
  state: z.string().min(2, "Please select your state"),
  zipCode: z.string().min(5, "Please enter a valid ZIP code").max(10),
  
  // Program Selection
  programId: z.string().min(1, "Please select a program"),
  startMonth: z.string().min(1, "Please select a start month"),
  
  // Education Background
  highestEducation: z.string().min(1, "Please select your highest education level"),
  previousHealthcareExperience: z.string().optional(),
  
  // Emergency Contact
  emergencyContactName: z.string().min(2, "Emergency contact name is required"),
  emergencyContactPhone: z.string().min(10, "Please enter a valid phone number"),
  emergencyContactRelation: z.string().min(1, "Please specify the relationship"),
  
  // Additional
  howDidYouHear: z.string().optional(),
  additionalNotes: z.string().optional(),
  
  // Agreements
  termsAccepted: z.boolean().refine(val => val === true, "You must accept the terms and conditions"),
  backgroundCheckConsent: z.boolean().refine(val => val === true, "Background check consent is required"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

// Generate available start months (next 12 months starting from March 2026)
const generateStartMonths = () => {
  const months = [];
  const startDate = new Date(2026, 2, 1); // March 2026
  
  for (let i = 0; i < 12; i++) {
    const date = new Date(startDate);
    date.setMonth(startDate.getMonth() + i);
    const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    months.push({ value: monthYear, label: monthYear });
  }
  
  return months;
};

const startMonths = generateStartMonths();

const educationLevels = [
  { value: "high-school", label: "High School Diploma / GED" },
  { value: "some-college", label: "Some College" },
  { value: "associates", label: "Associate's Degree" },
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "masters", label: "Master's Degree or Higher" },
];

const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

const hearAboutOptions = [
  "Google Search",
  "Social Media",
  "Friend or Family Referral",
  "Healthcare Employer",
  "Community Event",
  "Job Fair",
  "Other",
];

const Apply = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File | null }>({
    governmentId: null,
    highSchoolDiploma: null,
    immunizationRecords: null,
    resume: null,
  });

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      programId: "",
      startMonth: "",
      highestEducation: "",
      previousHealthcareExperience: "",
      emergencyContactName: "",
      emergencyContactPhone: "",
      emergencyContactRelation: "",
      howDidYouHear: "",
      additionalNotes: "",
      termsAccepted: false,
      backgroundCheckConsent: false,
    },
  });

  const handleFileChange = (documentType: string, file: File | null) => {
    setUploadedFiles(prev => ({ ...prev, [documentType]: file }));
  };

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Application submitted:", data);
    console.log("Uploaded files:", uploadedFiles);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Application Submitted!",
      description: "We've received your application and will contact you within 2-3 business days.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-card to-accent/5 py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center">
              <CardContent className="pt-12 pb-8">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-accent" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-4">Application Submitted!</h1>
                <p className="text-muted-foreground mb-6">
                  Thank you for applying to Aliko Academy. We've received your application and our admissions team will review it carefully.
                </p>
                <div className="bg-muted/50 rounded-lg p-6 mb-6 text-left">
                  <h3 className="font-semibold mb-3">What happens next?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">1.</span>
                      Our admissions team will review your application within 2-3 business days.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">2.</span>
                      You'll receive an email with your application status and next steps.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">3.</span>
                      If approved, we'll schedule an orientation session for your selected start date.
                    </li>
                  </ul>
                </div>
                <Button asChild>
                  <a href="/">Return to Home</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-card to-accent/5">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
                <GraduationCap className="h-4 w-4" />
                <span>Start Your Healthcare Career</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply Now</h1>
              <p className="text-xl text-primary-foreground/90">
                Complete your application to begin your journey in healthcare education. 
                Our admissions team will guide you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-4xl mx-auto space-y-8">
                
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>Tell us about yourself</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem className="max-w-xs">
                          <FormLabel>Date of Birth *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Address */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Address</CardTitle>
                        <CardDescription>Your current mailing address</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <FormField
                      control={form.control}
                      name="streetAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Street Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main Street, Apt 4B" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City *</FormLabel>
                            <FormControl>
                              <Input placeholder="Seattle" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select state" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {usStates.map(state => (
                                  <SelectItem key={state} value={state}>{state}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ZIP Code *</FormLabel>
                            <FormControl>
                              <Input placeholder="98101" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Program Selection */}
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle>Program Selection</CardTitle>
                        <CardDescription>Choose your program and preferred start date</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="programId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Select Program *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Choose a program" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {programs.map(program => (
                                  <SelectItem key={program.id} value={program.id}>
                                    {program.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              Select the healthcare program you wish to enroll in
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="startMonth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Start Month *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select start month" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {startMonths.map(month => (
                                  <SelectItem key={month.value} value={month.value}>
                                    {month.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              Classes start monthly on a cohort basis
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="highestEducation"
                      render={({ field }) => (
                        <FormItem className="max-w-md">
                          <FormLabel>Highest Education Level *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select education level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {educationLevels.map(level => (
                                <SelectItem key={level.value} value={level.value}>
                                  {level.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="previousHealthcareExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Previous Healthcare Experience (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe any relevant healthcare experience, certifications, or volunteer work..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Document Upload */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Required Documents</CardTitle>
                        <CardDescription>Upload your supporting documentation (PDF, JPG, PNG - Max 5MB each)</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="governmentId">Government-Issued ID *</Label>
                        <div className="relative">
                          <Input
                            id="governmentId"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => handleFileChange('governmentId', e.target.files?.[0] || null)}
                            className="file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                          />
                        </div>
                        {uploadedFiles.governmentId && (
                          <p className="text-sm text-accent flex items-center gap-1">
                            <CheckCircle className="h-4 w-4" />
                            {uploadedFiles.governmentId.name}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground">Driver's license, state ID, or passport</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="highSchoolDiploma">High School Diploma or GED *</Label>
                        <Input
                          id="highSchoolDiploma"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange('highSchoolDiploma', e.target.files?.[0] || null)}
                          className="file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                        />
                        {uploadedFiles.highSchoolDiploma && (
                          <p className="text-sm text-accent flex items-center gap-1">
                            <CheckCircle className="h-4 w-4" />
                            {uploadedFiles.highSchoolDiploma.name}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground">Official transcript or diploma copy</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="immunizationRecords">Immunization Records (Optional)</Label>
                        <Input
                          id="immunizationRecords"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange('immunizationRecords', e.target.files?.[0] || null)}
                          className="file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                        />
                        {uploadedFiles.immunizationRecords && (
                          <p className="text-sm text-accent flex items-center gap-1">
                            <CheckCircle className="h-4 w-4" />
                            {uploadedFiles.immunizationRecords.name}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground">Required for clinical programs</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="resume">Resume (Optional)</Label>
                        <Input
                          id="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleFileChange('resume', e.target.files?.[0] || null)}
                          className="file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                        />
                        {uploadedFiles.resume && (
                          <p className="text-sm text-accent flex items-center gap-1">
                            <CheckCircle className="h-4 w-4" />
                            {uploadedFiles.resume.name}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground">PDF or Word document</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Emergency Contact</CardTitle>
                        <CardDescription>Someone we can contact in case of emergency</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="emergencyContactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="emergencyContactPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Phone *</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(555) 987-6543" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="emergencyContactRelation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Relationship *</FormLabel>
                            <FormControl>
                              <Input placeholder="Parent, Spouse, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Information */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Additional Information</CardTitle>
                        <CardDescription>Help us serve you better</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <FormField
                      control={form.control}
                      name="howDidYouHear"
                      render={({ field }) => (
                        <FormItem className="max-w-md">
                          <FormLabel>How did you hear about us?</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {hearAboutOptions.map(option => (
                                <SelectItem key={option} value={option}>{option}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="additionalNotes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Notes or Questions (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any additional information you'd like to share with our admissions team..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Terms and Consent */}
                <Card className="border-accent/30">
                  <CardHeader>
                    <CardTitle>Terms & Consent</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="termsAccepted"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="font-normal">
                              I agree to the <a href="/policies" className="text-primary underline">Terms of Service and Privacy Policy</a> *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="backgroundCheckConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="font-normal">
                              I consent to a background check as required for healthcare education programs *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="px-12 bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <Upload className="mr-2 h-5 w-5" />
                        Submit Application
                      </>
                    )}
                  </Button>
                </div>
                
                <p className="text-center text-sm text-muted-foreground">
                  By submitting this application, you certify that all information provided is accurate and complete.
                </p>
              </form>
            </Form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Apply;
