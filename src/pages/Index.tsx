import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProgramsSnapshot } from "@/components/home/ProgramsSnapshot";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TrustStrip } from "@/components/home/TrustStrip";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProgramsSnapshot />
      <HowItWorks />
      <TrustStrip />
    </Layout>
  );
};

export default Index;
