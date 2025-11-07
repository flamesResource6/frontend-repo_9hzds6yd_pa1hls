import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsFeed from './components/NewsFeed';
import SubmitNews from './components/SubmitNews';

function App() {
  const [theme, setTheme] = useState('light');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  // In a real app, submitted news would go to the backend. For now, we just toast.
  const handleSubmitNews = (payload) => {
    alert(`Submitted: ${payload.title} (Category: ${payload.tag})`);
  };

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      <Navbar onSearch={setSearch} onToggleTheme={toggleTheme} />
      <Hero />
      <NewsFeed search={search} />

      {/* Ad slot */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 p-6 text-sm text-neutral-500 dark:text-neutral-400 text-center">
          Your ad could be displayed here (paste your ad script/div).
        </div>
      </div>

      <SubmitNews onSubmit={handleSubmitNews} />
    </div>
  );
}

export default App;
