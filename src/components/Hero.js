import resumeImg from '../assets/resumephoto.jpg';
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row px-10 py-40 bg-secondary justify-center items-center gap-10">
      <div className="md:w-1/2 flex flex-col text-center md:text-left space-y-6">
        <h1 className="text-4xl font-bold">
          Hi,<br /> I am <span className="text-blue-300">Sasmitha K</span>
        </h1>
        <p className="text-lg">
          To give my best effort and work smartly in a profession where my talents are
          encouraged and nurtured. I intend to build a career as a web developer, where I can apply my technical and
          academic knowledge and experience in the best possible way.
        </p>
        <div className="flex justify-center md:justify-start space-x-5">
          {/* Corrected LinkedIn Profile Link */}
          <a href="https://www.linkedin.com/in/sasmitha-kannan-16a2b6272" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <AiOutlineLinkedin size={40} />
          </a>
          {/* Corrected GitHub Profile Link */}
          <a href="https://github.com/sasmithakannan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <AiOutlineGithub size={40} />
          </a>
        </div>
      </div>
      <img 
        className="w-32 md:w-40 rounded-full border-4 border-white shadow-lg" 
        src={resumeImg} 
        alt="Sasmitha K"
      />
    </section>
  );
}
