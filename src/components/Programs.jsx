const programs = [
  {
    title: 'Full-Stack Web Development',
    duration: '24 Weeks · Hybrid',
    desc: 'Master modern web development with React, Node.js, databases, and cloud deployment. Build production-ready apps and a job-winning portfolio.',
    highlights: ['React + Node', 'MongoDB', 'DevOps basics'],
  },
  {
    title: 'Data Science & AI',
    duration: '20 Weeks · In-Person',
    desc: 'From Python foundations to machine learning and deep learning. Work on real datasets and present capstone projects to industry mentors.',
    highlights: ['Pandas & NumPy', 'ML & DL', 'MLOps intro'],
  },
  {
    title: 'UI/UX Product Design',
    duration: '16 Weeks · Online',
    desc: 'Research, wireframe, and ship beautiful, usable products. Learn Figma, user testing, and design systems to craft portfolio-ready case studies.',
    highlights: ['Figma', 'Design Systems', 'User Research'],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Programs</h2>
          <p className="mt-3 text-gray-600">Immersive, mentor-led programs designed to launch or accelerate your career.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-indigo-600 font-medium">{p.duration}</p>
              <p className="mt-3 text-gray-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.highlights.map((h) => (
                  <span key={h} className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-200">
                    {h}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a href="#contact" className="text-sm font-medium text-indigo-700 hover:text-indigo-800">Learn more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
