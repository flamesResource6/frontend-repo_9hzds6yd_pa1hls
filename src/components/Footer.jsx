export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-600 dark:text-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} GamePulse. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Privacy</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Terms</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
