import LibraryImg from '../assets/Library.jpg';
import TicketImg from '../assets/Ticket.jpg';
import m2Img from '../assets/m2.png';
import { useState } from 'react';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="projects">
      <h1>Projects</h1>

      <div className="project-grid">
        {/* Project 1 */}
        <div className="project-card" onClick={() => setSelectedImage(LibraryImg)}>
          <img src={LibraryImg} alt="Library Project" className="cursor-pointer" />
          <h2>Library Management</h2>
          <p>A digital catalog for managing books efficiently using HTML, CSS, and React.</p>
        </div>

        {/* Project 2 */}
        <div className="project-card" onClick={() => setSelectedImage(TicketImg)}>
          <img src={TicketImg} alt="Ticket Booking" className="cursor-pointer" />
          <h2>Movie Ticket Booking</h2>
          <p>A full-stack Python-based system for booking movie tickets.</p>
        </div>

        {/* Project 3 */}
        <div className="project-card" onClick={() => setSelectedImage(m2Img)}>
          <img src={m2Img} alt="Country Hen Management" className="cursor-pointer" />
          <h2>Country Hen Management</h2>
          <p>An online poultry store built with the MERN stack.</p>
        </div>
      </div>

      {/* Modal for Pop-up Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img src={selectedImage} alt="Enlarged Project" className="rounded-lg shadow-lg max-w-lg" />
          </div>
        </div>
      )}
    </section>
  );
}
