import React from 'react';

interface LetterContent {
  text: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video' | 'gif';
  mediaAlt?: string;
  overlayText?: string;
}

interface LetterProps {
  content: LetterContent;
}

const Letter: React.FC<LetterProps> = ({ content }) => {
  const renderMedia = () => {
    if (!content.mediaUrl) return null;

    if (content.mediaType === 'video') {
      return (
        <video 
          className="rounded-md w-full h-auto shadow-sm"
          controls
          autoPlay
          loop
          muted
        >
          <source src={content.mediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    // For both images and GIFs, we use the img tag
    return (
      <img 
        src={content.mediaUrl} 
        alt={content.mediaAlt || "Letter media"} 
        className="rounded-md w-full h-auto shadow-sm"
      />
    );
  };

  return (
    <div className="p-4 md:p-8 max-w-2xl mx-auto">
      <div 
        className="bg-letter-paper p-8 md:p-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:animate-paper-float"
      >
        <div className="prose prose-lg max-w-none">
          <div className="font-serif text-letter-text whitespace-pre-wrap mb-8">
            {content.text}
          </div>
          
          {content.mediaUrl && (
            <div className="mt-8 relative">
              {renderMedia()}
              {content.overlayText && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-2xl font-serif font-bold bg-black bg-opacity-40 p-4 rounded">
                    {content.overlayText}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Letter;