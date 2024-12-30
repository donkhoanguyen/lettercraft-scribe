import { useState } from 'react';
import Letter from '../components/Letter';

const Index = () => {
  const [letterContent1] = useState({
    text: "Chào Ngọc Mai,\n\nLời đầu tiên chắc chắn là chúc mừng sinh nhật em nha! Anh nhớ em điên mẹ lên mất.\n\nMặc dù anh biết là có 1 tỉ cái ảnh, cái video của em xinh hơn, nhưng anh xin phép mở đầu với một trong những video anh thấy em cười tươi nhất. Em giỏi em đẹp em cố gắng, chúng ta đều đã khen nhiều lắm rồi. Hãy xem em cười tươi roi rói đây nhé!",
    mediaUrl: "/IMG_8202.mp4", // Replace with your .mp4 video once converted
    mediaType: "video" as const,
    mediaAlt: "Mai Xinh"
  });

  const [letterContent2] = useState({
    text: "Nhân dịp sinh nhật em thì anh muốn chúc em hạnh phúc hơn, vui vẻ hơn, và với sự tài giỏi và consistent của em thì mọi thành công em mong muốn sẽ sớm đến. Anh hân hạnh được có mặt trong hành trình này cùng em, và khi em về anh sẽ có steak và pasta và tiramisu ngon nhất trên đời cho em.\n\nBest,\n\nYêu Ngọc Mai",
    mediaUrl: "/IMG_9932.JPG", // Replace with your .mp4 video once converted
    mediaType: "image" as const,
    mediaAlt: "Mai Xinh"
  });


  return (
    <div className="min-h-screen py-12 px-4">
      <Letter content={letterContent1} />
      <Letter content={letterContent2} />
    </div>
  );
};

export default Index;
