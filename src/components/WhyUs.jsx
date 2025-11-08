export default function WhyUs() {
  const points = [
    {
      title: 'Industry Mentors',
      text: 'Learn from practitioners building real products. Get weekly feedback and career guidance.',
    },
    {
      title: 'Portfolio-First',
      text: 'Every module ends with a project. Graduate with a compelling portfolio that speaks for you.',
    },
    {
      title: 'Career Support',
      text: 'Interview prep, referrals, and placement support to help you land meaningful roles.',
    },
  ];

  return (
    <section id="why-us" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why choose us</h2>
          <p className="mt-3 text-gray-600">A modern learning experience focused on outcomes, community, and real-world skills.</p>
        </div>

        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-gray-200 p-6 bg-white">
              <dt className="text-lg font-semibold text-gray-900">{p.title}</dt>
              <dd className="mt-2 text-gray-600">{p.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
