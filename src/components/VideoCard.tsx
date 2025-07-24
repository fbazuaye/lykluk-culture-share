import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from "lucide-react";

interface VideoCardProps {
  id: string;
  title: string;
  creator: string;
  avatar: string;
  thumbnail: string;
  views: string;
  likes: string;
  duration: string;
  isLiked?: boolean;
}

const VideoCard = ({ 
  title, 
  creator, 
  avatar, 
  thumbnail, 
  views, 
  likes, 
  duration, 
  isLiked = false 
}: VideoCardProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [saved, setSaved] = useState(false);

  return (
    <Card className="group relative overflow-hidden rounded-xl shadow-video hover:shadow-cultural transition-all duration-300 bg-gradient-card">
      {/* Video Thumbnail */}
      <div className="relative aspect-[9/16] bg-muted overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-secondary/90 text-secondary-foreground px-2 py-1 rounded text-xs font-medium">
          {duration}
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="hero" size="icon" className="rounded-full h-16 w-16">
            <div className="w-0 h-0 border-l-[12px] border-l-current border-y-[8px] border-y-transparent ml-1" />
          </Button>
        </div>

        {/* Lykluk Watermark */}
        <div className="absolute top-2 left-2 bg-gradient-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
          Lykluk
        </div>
      </div>

      {/* Video Info */}
      <div className="p-4">
        {/* Creator Info */}
        <div className="flex items-center space-x-3 mb-3">
          <img 
            src={avatar} 
            alt={creator}
            className="w-10 h-10 rounded-full ring-2 ring-primary/20"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-foreground">{creator}</h3>
            <p className="text-xs text-muted-foreground">{views} views</p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Title */}
        <h2 className="font-medium text-sm text-foreground mb-3 line-clamp-2 leading-relaxed">
          {title}
        </h2>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setLiked(!liked)}
              className={`text-xs ${liked ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Heart className={`h-4 w-4 mr-1 ${liked ? 'fill-current' : ''}`} />
              {likes}
            </Button>
            
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
              <MessageCircle className="h-4 w-4 mr-1" />
              IMPACT
            </Button>
            
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>

          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setSaved(!saved)}
            className={`h-8 w-8 ${saved ? 'text-primary' : 'text-muted-foreground'}`}
          >
            <Bookmark className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;