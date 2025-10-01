type Project = {
  title: string;
  desc: string;
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:scale-105 transition">
      <h2 className="text-xl font-bold text-purple-300">{project.title}</h2>
      <p className="mt-2 text-sm text-gray-300">{project.desc}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-block text-purple-400 hover:underline"
      >
        View Project →
      </a>
    </div>
  );
}
