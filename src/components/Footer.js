export default function Footer() {
    return (
      <div className="py-4 bg-secondary text-center text-white">
        <p>&copy; {new Date().getFullYear()} Sasmitha Kannan. All Rights Reserved.</p>
        <div className="flex justify-center mt-2 space-x-4">
          {/* GitHub Link */}
          <a
            href="https://github.com/sasmithakannan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            GitHub
          </a>
  
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/sasmitha-kannan-16a2b6272/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
  }
  