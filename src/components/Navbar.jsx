import { useState } from 'react';
import { Gamepad2, Search, Settings, User } from 'lucide-react';

export default function Navbar({ onSearch, onToggleTheme }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-100">
          <Gamepad2 className="h-6 w-6 text-indigo-600" />
          <span className="tracking-tight">GamePulse</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#news" className="hover:text-neutral-900 dark:hover:text-white">News</a>
          <a href="#reviews" className="hover:text-neutral-900 dark:hover:text-white">Reviews</a>
          <a href="#releases" className="hover:text-neutral-900 dark:hover:text-white">New Releases</a>
        </nav>

        <div className="flex items-center gap-3">
          <form onSubmit={handleSubmit} className="hidden sm:flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search games, news..."
                className="w-56 rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 pl-8 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </form>

          <button
            onClick={onToggleTheme}
            className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-700 px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            title="Customize theme"
          >
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Theme</span>
          </button>

          <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 text-sm">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
}
