import React from 'react';
import './App.css';
import Contact from './Contact';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Subash Sunuwar</h1>
        <p className="subtitle">Software Engineer | Web Developer</p>
      </header>
      
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>Passionate software engineer with experience in developing scalable web applications. Proficient in JavaScript, React, and Node.js. I love solving complex problems and building user-friendly applications.</p>
      </section>

      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
          <li>RESTful APIs</li>
          <li>Responsive Design</li>
        </ul>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Project One</h3>
            <p>A web application built with React and Node.js that allows users to track their fitness goals.</p>
          </div>
          <div className="project">
            <h3>Project Two</h3>
            <p>A mobile application developed using React Native for managing personal finances.</p>
          </div>
          <div className="project">
            <h3>Project Three</h3>
            <p>An e-commerce website created with MERN stack, featuring user authentication and payment integration.</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <h2>Testimonials</h2>
        <blockquote>
          <p>"John is an exceptional developer who consistently delivers high-quality work. His attention to detail is impressive!"</p>
          <footer>- Jane Smith, Project Manager at TechCorp</footer>
        </blockquote>
        <blockquote>
          <p>"Working with John was a pleasure. He brought innovative ideas to the table and helped us achieve our goals ahead of schedule."</p>
          <footer>- Mark Johnson, CEO of Startup Inc.</footer>
        </blockquote>
      </section>

      <section id="blog" className="blog">
        <h2>Blog</h2>
        <p>Check out my latest articles on software development, best practices, and technology trends.</p>
        <ul>
          <li><a href="https://www.google.com/maps">Understanding React Hooks</a></li>
          <li><a href="https://www.google.com/maps">Building RESTful APIs with Node.js</a></li>
          <li><a href="https://www.google.com/maps">Tips for Effective Code Reviews</a></li>
        </ul>
      </section>

      <section id="contact" className="contact">
        {/* <h2>Contact Me</h2>
        <p>Email: subashsunar00@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/subash-sunuwar-369031214/">linkedin.com/in/subashsunar</a></p> */}
        <Contact />
      </section>

      <footer className="footer">
        <p>&copy; 2024 Subash Sunuwar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;