import VideoCard from "./VideoCard";
import sampleVideo1 from "@/assets/sample-video-1.jpg";
import sampleVideo2 from "@/assets/sample-video-2.jpg";
import sampleVideo3 from "@/assets/sample-video-3.jpg";
import avatar1 from "@/assets/avatar-1.jpg";

const VideoFeed = () => {
  // Sample data for demonstration
  const videos = [
    {
      id: "1",
      title: "Traditional Dance from Kerala - Kathakali Performance",
      creator: "Cultural Heritage India",
      avatar: avatar1,
      thumbnail: sampleVideo1,
      views: "125K",
      likes: "8.2K",
      duration: "2:45",
      isLiked: false
    },
    {
      id: "2",
      title: "Festival of Colors - Holi Celebration in Rajasthan",
      creator: "Festival Stories",
      avatar: avatar1,
      thumbnail: sampleVideo2,
      views: "89K",
      likes: "5.7K",
      duration: "1:30",
      isLiked: true
    },
    {
      id: "3",
      title: "Ancient Pottery Making Techniques - Master Craftsman",
      creator: "Artisan Tales",
      avatar: avatar1,
      thumbnail: sampleVideo3,
      views: "234K",
      likes: "12.1K",
      duration: "2:15",
      isLiked: false
    },
    {
      id: "4",
      title: "Traditional Cooking - Grandmother's Secret Recipe",
      creator: "Heritage Kitchen",
      avatar: avatar1,
      thumbnail: sampleVideo1,
      views: "156K",
      likes: "9.8K",
      duration: "3:00",
      isLiked: true
    },
    {
      id: "5",
      title: "Music of the Mountains - Traditional Folk Songs",
      creator: "Mountain Melodies",
      avatar: avatar1,
      thumbnail: sampleVideo2,
      views: "78K",
      likes: "4.3K",
      duration: "2:20",
      isLiked: false
    },
    {
      id: "6",
      title: "Weaving Stories - Traditional Textile Art",
      creator: "Textile Traditions",
      avatar: avatar1,
      thumbnail: sampleVideo3,
      views: "67K",
      likes: "3.9K",
      duration: "1:45",
      isLiked: false
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-cultural bg-clip-text text-transparent mb-4">
            Trending Cultural Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover authentic cultural content from creators around the world
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['All', 'Dance', 'Music', 'Food', 'Art', 'Festivals', 'Traditions'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                category === 'All' 
                  ? 'bg-gradient-primary text-primary-foreground shadow-cultural' 
                  : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              creator={video.creator}
              avatar={video.avatar}
              thumbnail={video.thumbnail}
              views={video.views}
              likes={video.likes}
              duration={video.duration}
              isLiked={video.isLiked}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-cultural text-primary-foreground px-8 py-3 rounded-lg font-medium shadow-cultural hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            Load More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoFeed;