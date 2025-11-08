import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8OqZ5m7e1ZmpkJ6V/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Learn. Build. Lead.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-prose">
            OAJ Institute empowers learners with industry-ready programs in technology, business, and design. Guided by expert mentors, you’ll master practical skills and build a standout portfolio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#programs" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800">
              Explore Programs
            </a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-medium text-gray-900 border border-gray-300 hover:bg-gray-50">
              Speak to Admissions
            </a>
          </div>
        </div>
        <div className="relative h-[420px] lg:h-[560px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-transparent to-purple-500/30 pointer-events-none" />
          <Spline scene="https://prod.spline.design/1wJ3yQm6sLQpJb7Q/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
