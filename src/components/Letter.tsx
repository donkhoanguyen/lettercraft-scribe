import React from 'react';

interface LetterContent {
  text: string;
  imageUrl?: string;
  imageAlt?: string;
  overlayText?: string;
}

interface LetterProps {
  content: LetterContent;
}

const Letter: React.FC<LetterProps> = ({ content }) => {
  return (
    <div className="p-4 md:p-8 max-w-2xl mx-auto">
      <div 
        className="bg-letter-paper p-8 md:p-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:animate-paper-float"
      >
        <div className="prose prose-lg max-w-none">
          <div className="font-serif text-letter-text whitespace-pre-wrap mb-8">
            {content.text}
          </div>
          
          {content.imageUrl && (
            <div className="mt-8 relative">
              <img 
                src={content.imageUrl} 
                alt={content.imageAlt || "Letter image"} 
                className="rounded-md w-full h-auto shadow-sm"
              />
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