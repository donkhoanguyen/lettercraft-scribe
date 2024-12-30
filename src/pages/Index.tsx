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
    text: "Anh đã định viết dông viết dài nhưng chữ nghĩa của anh từ khi yêu em đã quá co cụm lại rồi =)))) nhưng anh vẫn yêu em như thế. Anh nghĩ từ ngày yêu em anh tĩnh lặng hơn vì anh tìm thấy vẻ đẹp trong sự chăm chú, chăm chú quan sát em toả sáng. Dáng em đẹp, mặt em xinh, và từng cử chỉ hành vi của em đối với anh luôn vừa sang vừa đáng ngưỡng mộ vừa để lại nhiều suy nghĩ.",
    mediaUrl: "/IMG_9483.gif", // Replace with your .mp4 video once converted
    mediaType: "gif" as const,
    mediaAlt: "Mai Xinh"
  });

  const [letterContent3] = useState({
    text: "Được ở gần và học hỏi từ em hàng ngày là một hân hạnh lớn của anh, và nhân dịp sinh nhật xa xôi xin phép gửi em một cái thơm má như này đã nhá.",
    mediaUrl: "/IMG_9195.gif", // Replace with your .mp4 video once converted
    mediaType: "gif" as const,
    mediaAlt: "Mai Xinh"
  });

  const [letterContent4] = useState({
    text: "Và cuối cùng anh muốn chúc em hạnh phúc hơn, vui vẻ hơn, và với sự tài giỏi và consistent của em thì mọi thành công em mong muốn sẽ sớm đến. Anh hân hạnh được có mặt trong hành trình này cùng em, và khi em về anh sẽ có steak và pasta và tiramisu ngon nhất trên đời cho em.\n\nBest,\n\nYêu Ngọc Mai",
    mediaUrl: "/IMG_9932.JPG", // Replace with your .mp4 video once converted
    mediaType: "image" as const,
    mediaAlt: "Mai Xinh"
  });

  const [letterContent5] = useState({
    text: "Dm Bonus =)))))))",
    mediaUrl: "/IMG_9185.mp4", // Replace with your .mp4 video once converted
    mediaType: "video" as const,
    mediaAlt: "Mai Xinh"
  });


  return (
    <div className="min-h-screen py-12 px-4">
      <Letter content={letterContent1} />
      <Letter content={letterContent2} />
      <Letter content={letterContent3} />
      <Letter content={letterContent4} />
      <Letter content={letterContent5} />
    </div>
  );
};

export default Index;
