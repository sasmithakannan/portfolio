import AboutImg from '../assets/About.jpg';

export default function About() {
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-10 py-20' id='about' >
      <div className="md:w-1/2 flex justify-center">
        <img className="rounded-lg shadow-lg w-3/4" src={AboutImg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center">
          <h2 className="border-b-4 border-blue-400 pb-2 mb-5 w-[180px] text-2xl font-bold">About Me</h2>
          <p className="text-lg">
            I'm Sasmitha K, a passionate web developer with experience in building dynamic and responsive web applications.
            Currently pursuing a B.Tech in Computer Science and Business Systems at K.S. Rangasamy College of Technology,
            I’ve gained practical experience through internships at Statix.pro and ServXGlobal Software Solutions Pvt Ltd.
          </p>
          <p className="mt-4 text-lg">
            My skill set includes <b>React.js, Tailwind CSS, Node.js, Express.js, MongoDB, and Python</b>, along with a strong foundation in
            HTML, CSS, and JavaScript. I’ve worked on projects like a <i>Library Management System, Movie Ticket Booking App,</i> and
            <i>CarHub frontend</i> using Angular.
          </p>
          <p className="mt-4 text-lg">
            I’m always eager to learn, innovate, and contribute to impactful digital solutions. Feel free to check out my work on GitHub or
            connect with me on LinkedIn!
          </p>
        </div>
      </div>
    </section>
  );
}
