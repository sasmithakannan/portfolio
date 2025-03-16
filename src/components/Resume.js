import HiImg from '../assets/Hi.jpg';

export default function Resume() {
  return (
    <section id='resume' className="flex flex-col md:flex-row bg-secondary px-10 py-20 items-center">
      
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img 
          className="rounded-lg shadow-xl w-3/4 max-w-md transform hover:scale-105 transition duration-300" 
          src={HiImg} 
          alt="Resume Preview" 
        />
      </div>

      {/* Right Side - Text & Download Button */}
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="border-b-2 border-blue-400 pb-1 mb-4 text-4xl font-bold text-white">Resume</h2>
          <p className="text-lg text-gray-300 mb-6">
            View my resume and download it for reference.
          </p>
          <a 
            className="bg-blue-500 text-white px-6 py-3 font-bold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-xl transition duration-300 flex justify-center items-center gap-2"
            href="/sasmi-resume.pdf" 
            download="Sasmitha_K_Resume.pdf"
          >
            📥 Download Resume
          </a>
        </div>
      </div>

    </section>
  );
}
