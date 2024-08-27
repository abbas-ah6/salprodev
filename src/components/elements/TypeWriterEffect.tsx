import { useState, useEffect } from "react";

interface TypewriterEffect {
  heading: string;
  words: string[];
}

const TypewriterEffect: React.FC<TypewriterEffect> = ({ heading, words }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setCurrentWord(
        isDeleting
          ? fullText.substring(0, currentWord.length - 1)
          : fullText.substring(0, currentWord.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && currentWord === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, words]);

  return (
    <div className="w-full h-full min-h-[38px] lg:min-h-[66px] flex flex-col justify-center items-center m-0 mt-[24px] lg:text-h1 text-h1M capitalize font-light leading-small text-brand-purple">
      <h1 className="min-h-[38px] lg:min-h-[66px]">
        {heading + " " + currentWord}
      </h1>
    </div>
  );
};

export default TypewriterEffect;
