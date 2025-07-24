import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoFeed from "@/components/VideoFeed";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VideoFeed />
      </main>
      <BottomNav />
      <div className="pb-20" /> {/* Spacer for bottom nav */}
    </div>
  );
};

export default Index;
