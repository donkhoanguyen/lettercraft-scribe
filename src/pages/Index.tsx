import { useState } from 'react';
import Letter from '../components/Letter';

const Index = () => {
  const [letterContent] = useState({
    text: "Chào Ngọc Mai,\n\nAnh nhớ em siêu nhiều luôn.\n\nI hope this letter finds you well. This is an example of how you can create beautiful digital letters with text, images, GIFs, and videos!\n\nBest regards,\nYour Name",
    mediaUrl: "/placeholder.svg", // You can use "/your-video.mp4" for videos or "/your-animation.gif" for GIFs
    mediaType: "image" as const, // Use "video" for videos or "gif" for GIFs
    mediaAlt: "A placeholder image",
    overlayText: "Innovation Lights The Way"
  });

  return (
    <div className="min-h-screen py-12 px-4">
      <Letter content={letterContent} />
    </div>
  );
};

export default Index;