import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LiveSignalBar from "@/components/LiveSignalBar";
import TrustSignalStrip from "@/components/TrustSignalStrip";
import EngineFlow from "@/components/EngineFlow";
import TrustFramework from "@/components/TrustFramework";
import PipelinePreview from "@/components/PipelinePreview";
import UserPaths from "@/components/UserPaths";
import EngageSection from "@/components/EngageSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <LiveSignalBar />
    <TrustSignalStrip />
    <EngineFlow />
    <TrustFramework />
    <PipelinePreview />
    <UserPaths />
    <EngageSection />
    <Footer />
  </div>
);

export default Index;
