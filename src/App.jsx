import { useEffect, useState } from "react";

const TYPING_WORD = "Code, Text, Type";
const TYPING_INTERVAL = 200; /** Interval for each letter, in milliseconds */
const TYPING_DELAY = 1000; /** Start the typing animation after xxx milliseconds */

const CURSOR_BLINK_INTERVAL = 600;

function App() {
  const [hovering, setHovering] = useState(null);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (typingIndex < TYPING_WORD.length) {
          setTypingIndex(typingIndex + 1);
        }
      },
      typingIndex < 1 ? TYPING_DELAY : TYPING_INTERVAL
    );

    return () => clearTimeout(timeout);
  }, [typingIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTyping((state) => !state);
    }, CURSOR_BLINK_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen p-8 flex-col justify-between bg-yellow-50 text-black">
      <div className="flex gap-4 p-2 justify-center font-serif text-[18pt]">
        <span>Time</span>
        <img src="arrow-1.svg" className="w-11" alt="" />
        <span className="font-serif">Traveler</span>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[600px] opacity-30">
        <img
          src="fig-1.png"
          className={`transition-transform duration-500 ${
            hovering ? "-translate-y-56 scale-50" : "-translate-y-0 scale-100"
          }`}
          alt=""
        />
      </div>

      <div className="font-serif tracking-wide text-[54pt] absolute z-1 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div
          className={`h-[54pt] relative transition-transform duration-500 ${
            hovering ? "scale-75" : "scale-100"
          }`}
        >
          {TYPING_WORD.slice(0, typingIndex)}
          <span className="absolute">{typing && "|"}</span>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-mono text-center">
        <div
          className={`mt-96 text-xl leading-loose transition-all duration-500 ${
            hovering === 1
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          A website reminiscent of the earliest websites. <br></br>*HTML only*
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-mono text-center">
        <div
          className={`mt-96 text-xl leading-loose transition-all duration-500 ${
            hovering === 2
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          A website reminiscent of the GeoCities era.
          <br></br>*HTML & CSS*
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-mono text-center">
        <div
          className={`mt-96 text-xl leading-loose transition-all duration-500 ${
            hovering === 3
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          A website reminiscent of modern websites.
        </div>
      </div>


      <div className="flex gap-4 p-2 justify-center font-serif text-[18pt]">
        <a
          onMouseEnter={() => setHovering(1)}
          onMouseLeave={() => setHovering(null)}
          className="cursor-pointer hover:underline underline-offset-4 decoration-dotted"
          href="https://zairanliu.github.io/code-text-type/"
        >
          Version 1
        </a>
        <img src="arrow-1.svg" className="w-11" alt="" />
        <span
          onMouseEnter={() => setHovering(2)}
          onMouseLeave={() => setHovering(null)}
          className="cursor-pointer hover:underline underline-offset-4 decoration-dotted"
        >
          <a href="https://zairanliu.github.io/code-text-type-2/">Version 2</a>
        </span>
        <img src="arrow-1.svg" className="w-11" alt="" />
        <span
          onMouseEnter={() => setHovering(3)}
          onMouseLeave={() => setHovering(null)}
          className="cursor-pointer hover:underline underline-offset-4 decoration-dotted"
        >
          <a href="https://zairanliu.github.io/code-text-type-v3/">Version 3</a>
        </span>
      </div>
    </div>
  );
}

export default App;
