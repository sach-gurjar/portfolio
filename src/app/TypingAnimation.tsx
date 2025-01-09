
"use client";
import { useState, useEffect } from "react";

export default function TypingAnimation() {
  const [text, setText] = useState(""); // The text being typed
const phrases = ["Software Developer.", "Full stack devloper.", "programmer."];

useEffect(() => {
  let i = 0; // Index of the current phrase
  let j = 0; // Character position in the phrase
  let isDeleting = false; // Flag to track deleting state
  const speed = 100;

  const interval = setInterval(() => {
    if (!isDeleting && j <= phrases[i].length) {
      setText(phrases[i].slice(0, j));
      j++;
    } else if (isDeleting && j >= 0) {
      setText(phrases[i].slice(0, j));
      j--;
    }

    if (j === phrases[i].length) {
      isDeleting = true;
      setTimeout(() => {}, 3000); // Pause before deleting
    } else if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % phrases.length; // Loop to the next phrase
    }
  }, speed);

  return () => clearInterval(interval);
}, []);


  return (
    <div style={{ fontFamily: "Courier New, monospace", fontSize: "45px" ,fontWeight:"bold",color:"GrayText" }}>
      {text}
      <span style={{ borderLeft: "2px solid black", animation: "blink 0.5s step-end infinite" }}></span>
      <style jsx>{`
        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </div>
  );
}
