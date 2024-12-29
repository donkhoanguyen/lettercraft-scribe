import { useState } from 'react';
import Letter from '../components/Letter';

const Index = () => {
  const [letterContent] = useState({
    text: "Dear Friend,\n\nI hope this letter finds you well. This is an example of how you can create beautiful digital letters with both text and images.\n\nTo add your own content, simply modify the text and imageUrl properties in the letterContent object.\n\nBest regards,\nYour Name",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    imageAlt: "A person holding a blue light bulb"
  });

  return (
    <div className="min-h-screen py-12 px-4">
      <Letter content={letterContent} />
    </div>
  );
};

export default Index;