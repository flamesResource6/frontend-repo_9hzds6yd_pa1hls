export default function AdBanner({ title = "Your Ad Here", cta = "Learn More", onClick }) {
  return (
    <aside className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-amber-700 dark:text-amber-300">Sponsored</p>
          <h3 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Promote your product, server, or tournament. Upload your image and link.</p>
        </div>
        <button onClick={onClick} className="shrink-0 inline-flex items-center rounded-md bg-amber-600 hover:bg-amber-700 text-white text-sm px-3 py-2">{cta}</button>
      </div>
    </aside>
  );
}
