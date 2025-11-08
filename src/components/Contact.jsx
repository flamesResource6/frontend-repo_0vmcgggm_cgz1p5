import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    setStatus('Submitting...');
    setTimeout(() => setStatus('Thank you! Our admissions team will reach out shortly.'), 800);
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Speak to Admissions</h2>
            <p className="mt-3 text-gray-600 max-w-prose">Tell us about your goals. We’ll help you pick the right program and share scholarships and cohort dates.</p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Cohorts start monthly</li>
              <li>• Flexible payment options</li>
              <li>• Scholarships for early applicants</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last name</label>
                <input required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Program of interest</label>
                <select className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600">
                  <option>Full-Stack Web Development</option>
                  <option>Data Science & AI</option>
                  <option>UI/UX Product Design</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600" />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button type="submit" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700">Submit</button>
              <p className="text-sm text-gray-600">{status}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
