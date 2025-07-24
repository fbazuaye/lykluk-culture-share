import { Button } from "@/components/ui/button";
import { Search, Bell, User } from "lucide-react";
import lyklukLogo from "@/assets/lykluk-logo.jpg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={lyklukLogo} alt="Lykluk" className="h-8 w-8 rounded-lg" />
          <span className="text-2xl font-bold bg-gradient-cultural bg-clip-text text-transparent">
            Lykluk
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search cultural content..."
              className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="cultural" size="sm">
            Upload
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;