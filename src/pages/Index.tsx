import { useState } from 'react';
import Letter from '../components/Letter';

const Index = () => {
  const [letterContent] = useState({
    text: "Chào Ngọc Mai,\n\nAnh nhớ em siêu nhiều luôn.\n\nI hope this letter finds you well. This is an example of how you can create beautiful digital letters with text, images, GIFs, and videos!\n\nBest regards,\nYour Name",
    mediaUrl: "/placeholder.svg", // Replace with your .mp4 video once converted
    mediaType: "video" as const,
    mediaAlt: "Mai Xinh",
    overlayText: "Mai rat xinh"
  });

  return (
    <div className="min-h-screen py-12 px-4">
      <Letter content={letterContent} />
    </div>
  );
};

export default Index;