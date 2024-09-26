import React, { useState, useEffect } from "react";
import "./Aboutme.css";

const Aboutme: React.FC = () => {
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();

    if (hours < 13) {
      setGreeting("Good morning");
    } else if (hours < 20) {
      setGreeting("Good afternon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  return (
    <section id="aboutme" className="reveal" >
      <img src="https://i.imgur.com/ooNO1ny.png" alt="Sobre mi" width="20%" className="reveal"/>
      <div>
        <h1>About me</h1>
        <p>
          {greeting}, my name is Yossef Errazik, and I'm currently studying a
          a Middle Degree in Microcomputer Systems and Networking. I don't have a specific role
          what I like or what I do, if I had to choose something, it would be web
          if I had to choose something it would be web development, but if it's related to technology, I'm sure I would
          related to technology, be sure that I will like it or I will find it interesting.
          I will find it interesting.
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
