import { useState } from 'react';
import Letter from '../components/Letter';

const Index = () => {
  const [letterContent] = useState({
    text: "Chào Ngọc Mai,\n\nAnh nhớ em siêu nhiều luôn.\n\nI hope this letter finds you well. This is an example of how you can create beautiful digital letters with both text and images. You can even add text overlays on top of images!\n\nBest regards,\nYour Name",
    imageUrl: "/placeholder.svg", // Using the placeholder image from public folder
    imageAlt: "A placeholder image",
    overlayText: "Innovation Lights The Way"
  });

  return (
    <div className="min-h-screen py-12 px-4">
      <Letter content={letterContent} />
    </div>
  );
};

export default Index;
