import "./Intro.css";
import React from "react";
import Typewriter from "typewriter-effect";

export default function Text() {
  return (
    <div>
      <p id="introtext">
        <b>
          I am Anshul Chamoli and, I am a
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Web Developer")
                .pauseFor(3000)
                .deleteAll()
                .typeString("Python Programmer")
                .pauseFor(3000)
                .deleteAll()
                .typeString("IITian")
                .pauseFor(3000)
                .deleteAll()
                .typeString("KVian")
                .pauseFor(3000)
                .deleteAll()
                .typeString("Data Analyst")
                .pauseFor(3000)
                .deleteAll()
                .typeString("Indian")
                .start();
            }}
          />
        </b>
      </p>
    </div>
  );
}
