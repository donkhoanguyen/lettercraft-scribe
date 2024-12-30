import { useState } from 'react';
import Letter from '../components/Letter';

const Index = () => {
  const [letterContent1] = useState({
    text: "Chào Ngọc Mai,\n\nLời đầu tiên thì chắc chắn là chúc mừng sinh nhật em nha!\n\nMặc dù anh biết là có 1 tỉ cái ảnh, cái video của em xinh hơn, nhưng anh xin phép mở đầu với một trong những video anh thấy em cười tươi nhất. Em giỏi em đẹp em cố gắng, chúng ta đều đã khen nhiều lắm rồi. Hãy xem em cười tươi roi rói đây nhé!",
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


  return (
    <div className="min-h-screen py-12 px-4">
      <Letter content={letterContent1} />
    </div>
  );
};

export default Index;
