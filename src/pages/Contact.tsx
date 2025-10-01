import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="pt-24 px-6 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 text-teal-300">Contact Me</h1>
        <p className="text-gray-300 mb-4">Let’s collaborate! Reach out at:</p>
        <a
          href="mailto:kaustubh@example.com"
          className="text-purple-400 underline text-lg"
        >
          kaustubhjadhav36@gmail.com
        </a>
      </div>
    </Layout>
  );
}
