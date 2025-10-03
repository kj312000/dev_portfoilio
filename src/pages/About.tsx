import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="pt-24 px-6 max-w-3xl mx-auto text-center">
        {/* About Me Section */}
        <h1 className="text-3xl font-bold mb-4 text-teal-300">About Me</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m <span className="font-semibold text-white">Kaustubh Jadhav</span>, 
          a 25-year-old full-stack developer from Pune.  
          <br />
          Full Stack Developer with 4+ years of experience delivering scalable, 
          secure web applications using <span className="text-teal-400">MERN</span> and 
          <span className="text-teal-400"> MEAN</span> stacks. 
          <br />
          Experienced with cloud (<span className="text-sky-400">Azure</span>), 
          container orchestration (<span className="text-sky-400">Kubernetes</span>), 
          microservices (<span className="text-sky-400">NestJS</span>), and CI/CD automation.  
          <br />
          Strong collaborator with a track record of improving delivery velocity 
          and product quality.
        </p>

        {/* Contact Section */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <h2 className="text-2xl font-bold mb-4 text-teal-300">Contact</h2>
          <p className="text-gray-300">
            📧 Email:{" "}
            <a
              href="mailto:kaustubh.jadhav36@gmail.com"
              className="text-teal-400 hover:underline"
            >
              kaustubh.jadhav36@gmail.com
            </a>
          </p>
          <p className="text-gray-300">
            📱 Phone:{" "}
            <a
              href="tel:+919146767368"
              className="text-teal-400 hover:underline"
            >
              +91 9146767368
            </a>
          </p>
          <p className="text-gray-300">
            🌐 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/kaustubh-jadhav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              linkedin.com/in/kaustubh-jadhav
            </a>
          </p>
          <p className="text-gray-300">
            💻 GitHub:{" "}
            <a
              href="https://github.com/kj312000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              github.com/kj312000
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
