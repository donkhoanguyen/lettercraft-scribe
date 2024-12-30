import { useState } from 'react';
import Letter from '../components/Letter';

const Index = () => {
  const [letterContent] = useState({
    content: [
      {
        type: 'text',
        value: "Chào Ngọc Mai,\n\nAnh nhớ em siêu nhiều luôn.\n\nTrong những ngày em đi thì anh có xem lại những video trước đây anh có với em. Anh thấy em trẻ trung xinh đẹp và thật đáng yêu, và mỗi lần nhìn thấy em xinh đẹp như vậy anh lại thấy ngạo nghễ hơn một chút",
      },
      {
        type: 'media',
        mediaUrl: "/IMG_8202.mp4",
        mediaType: "video" as const,
        mediaAlt: "Mai Xinh",
        overlayText: "Mai rất xinh"
      },
      {
        type: 'text',
        value: "Best regards,\nYour Name"
      },
    ]
  });

  return (
    <div className="min-h-screen py-12 px-4">
      <Letter content={letterContent} />
    </div>
  );
};

export default Index;
