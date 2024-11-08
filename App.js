import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <h1>Your Name</h1>
        <p>Web Developer | Designer | Programmer</p>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-heading">About Me</h2>
        <p>
          I'm a passionate web developer with experience in designing and developing responsive websites.
          I love creating beautiful, functional designs and enjoy bringing ideas to life through code.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-heading">Projects</h2>

        <div className="project">
          <h3>Project 1</h3>
          <p>A brief description of this project goes here. It's a project that showcases your skills in web development.</p>
          <a href="#">View Project</a>
        </div>

        <div className="project">
          <h3>Project 2</h3>
          <p>A brief description of this project goes here. It's a project that showcases your skills in web development.</p>
          <a href="#">View Project</a>
        </div>

        <div className="project">
          <h3>Project 3</h3>
          <p>A brief description of this project goes here. It's a project that showcases your skills in web development.</p>
          <a href="#">View Project</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-heading">Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        &copy; 2024 Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
