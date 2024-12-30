import { useState } from 'react';
import Letter from '../components/Letter';

const Index = () => {
  const [letterContent1] = useState({
    text: "Chào Ngọc Mai,\n\nAnh nhớ em siêu nhiều luôn.\n\nTrong những ngày em đi thì anh có xem lại những video trước đây anh có với em. Anh thấy em trẻ trung xinh đẹp và thật đáng yêu, và mỗi lần nhìn thấy em xinh đẹp như vậy anh lại thấy ngạo nghễ hơn một chút\n\nBest regards,\nYour Name",
    mediaUrl: "/IMG_8202.mp4", // Replace with your .mp4 video once converted
    mediaType: "video" as const,
    mediaAlt: "Mai Xinh",
    overlayText: "Mai rat xinh"
  });

  const [letterContent2] = useState({
    text: "Chào Ngọc Mai,\n\nAnh nhớ em siêu nhiều luôn.\n\nTrong những ngày em đi thì anh có xem lại những video trước đây anh có với em. Anh thấy em trẻ trung xinh đẹp và thật đáng yêu, và mỗi lần nhìn thấy em xinh đẹp như vậy anh lại thấy ngạo nghễ hơn một chút\n\nBest regards,\nYour Name",
    mediaUrl: "/IMG_8202.mp4", // Replace with your .mp4 video once converted
    mediaType: "video" as const,
    mediaAlt: "Mai Xinh",
    overlayText: "Mai rat xinh"
  });
  
// Combine both letterContents into an array
  const letterContents = [letterContent1, letterContent2];

  return (
    <div className="min-h-screen py-12 px-4">
      <Letter content={letterContents} />
    </div>
  );
};

export default Index;
