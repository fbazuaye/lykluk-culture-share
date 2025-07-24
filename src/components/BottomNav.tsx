import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, PlusCircle, MessageSquare, User } from "lucide-react";

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "discover", icon: Search, label: "Discover" },
    { id: "upload", icon: PlusCircle, label: "Upload" },
    { id: "messages", icon: MessageSquare, label: "Messages" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-t supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            const isUpload = item.id === "upload";
            
            return (
              <Button
                key={item.id}
                variant={isUpload ? "cultural" : "ghost"}
                size={isUpload ? "sm" : "icon"}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center justify-center h-12 ${
                  isUpload 
                    ? "rounded-full h-10 w-10" 
                    : isActive 
                    ? "text-primary" 
                    : "text-muted-foreground"
                } ${isUpload ? "" : "hover:text-primary"} transition-all duration-200`}
              >
                <Icon className={`${isUpload ? "h-5 w-5" : "h-5 w-5"}`} />
                {!isUpload && (
                  <span className="text-xs mt-1 font-medium">{item.label}</span>
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;