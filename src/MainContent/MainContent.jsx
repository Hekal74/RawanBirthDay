import { useState } from "react";
import { motion } from "framer-motion";
import cake from '../../public/assets/cake.jpg';
import gold from '../../public/assets/gold.jpeg';
import smile from '../../public/assets/smile.jpeg';
import reading from '../../public/assets/reading.jpg';

const memories = [
  { id: 1, img:gold , text: "أحلى يوم كان معاكِ هنا! 💕" },
  { id: 2, img: smile, text: "ابتسامتك أحلي حاجة في حياتي 😍" },
  { id: 3, img: reading, text: "لحظة لا تُنسى! ❤️" },
];

export default function BirthdaySurprise() {
  const [showPopup, setShowPopup] = useState(true);
  const [currentMemory, setCurrentMemory] = useState(0);
  const [showMemories, setShowMemories] = useState(false);

  const handleNextMemory = () => {
    if (currentMemory < memories.length - 1) {
      setCurrentMemory(currentMemory + 1);
    } else {
      setShowMemories(false);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-pink-200 flex flex-col items-center justify-center text-center p-4">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            className="bg-white p-6 rounded-2xl shadow-lg max-w-sm text-pink-600 " dir="rtl">
            <h2 className="text-xl font-bold">رونتي حببتي ❤️</h2>
            <p className="mt-2">آسف عشان نسيت، بس مستحيل أنسى إنك أجمل حاجة في حياتي! عندي لكِ مفاجأة  <span>🎁</span></p>
            <button 
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setShowPopup(false)}>
              اضغطي هنا للمفاجأة
            </button>
          </motion.div>
        </div>
      )}

      {!showPopup && !showMemories && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="mt-10">
          <img src={cake} alt="Birthday Cake" className="w-72 mx-auto rounded-lg shadow-lg" />
          <h2 className="mt-4 text-2xl font-bold text-pink-700">كل سنة وإنتِ أحلى حاجة في حياتي 🎂❤️</h2>
          <button 
            className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg"
            onClick={() => setShowMemories(true)}>
            دوسي هنا
          </button>
        </motion.div>
      )}

      {!showPopup && showMemories && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="mt-10 space-y-4">
          <motion.div 
            key={memories[currentMemory].id} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-4 rounded-lg shadow-md">
            <img src={memories[currentMemory].img} alt="Memory" className="w-full rounded-lg" />
            <p className="mt-2 text-pink-700">{memories[currentMemory].text}</p>
          </motion.div>
          <button 
            className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg"
            onClick={handleNextMemory}>
            {currentMemory < memories.length - 1 ? "كمّلي ❤️" : "انتهت المفاجأة 🎉"}
          </button>
        </motion.div>
      )}
    </div>
  );
}
