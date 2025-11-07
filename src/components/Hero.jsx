import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-pink-100 dark:from-indigo-900/40 dark:via-neutral-900 dark:to-fuchsia-900/20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-800 bg-white/60 dark:bg-indigo-950/30 px-3 py-1 text-xs text-indigo-700 dark:text-indigo-300 mb-4">
              <Rocket className="h-3.5 w-3.5" />
              Fresh drops · Daily updates
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
              Track the newest game releases and community news
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-xl">
              A clean, customizable blog theme for gaming news. Share your own
              posts, promote your sponsors, and keep readers in the loop on
              what's launching next.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 p-6 shadow-lg backdrop-blur">
            <div className="grid grid-cols-3 gap-4 text-center">
              <Stat label="Tracked Titles" value="4,200+" />
              <Stat label="Creators" value="1,100+" />
              <Stat label="Avg. Rating" value={<span className="inline-flex items-center gap-1">4.8 <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /></span>} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 border border-neutral-200 dark:border-neutral-800 p-4">
      <div className="text-sm text-neutral-500 dark:text-neutral-400">{label}</div>
      <div className="mt-1 text-2xl font-bold text-neutral-900 dark:text-white">{value}</div>
    </div>
  );
}
