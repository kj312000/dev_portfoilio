import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="pt-24 px-6 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 text-teal-300">About Me</h1>
        <p className="text-gray-300 text-lg">
          I’m Kaustubh Jadhav, a 25-year-old full-stack developer from Pune.  
          Full Stack Developer with 4+ years of experience delivering scalable, secure web applications using MERN and MEAN stacks. 
          Experienced with cloud (Azure), container orchestration (Kubernetes), microservices (NestJS), and CI/CD automation.
          Strong collaborator with a track record of improving delivery velocity and product quality.
        </p>
      </div>
    </Layout>
  );
}
