import { useMemo, useState } from 'react';
import { Calendar, Flame, MessageSquare } from 'lucide-react';

const demoArticles = [
  {
    id: '1',
    title: 'Starfield: First Major Expansion Launches Next Month',
    excerpt:
      'Bethesda details new planets, factions, and a New Game+ revamp. Early access starts a week before the global release.',
    tag: 'RPG',
    date: '2025-10-12',
    comments: 42,
  },
  {
    id: '2',
    title: 'Elden Ring DLC Shadow of the Erdtree Receives Free PvP Update',
    excerpt:
      'FromSoftware pushes a balance patch and new arenas, teasing a second wave of content later this year.',
    tag: 'Action',
    date: '2025-09-28',
    comments: 76,
  },
  {
    id: '3',
    title: 'Indie Spotlight: Cozy Colony Builder Tops Steam Charts',
    excerpt:
      'A surprise hit blends chill vibes with deep strategy. The two-person dev team shares their roadmap.',
    tag: 'Indie',
    date: '2025-11-02',
    comments: 18,
  },
];

function ArticleCard({ article }) {
  return (
    <article className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
        <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-0.5">
          <Flame className="h-3.5 w-3.5" /> {article.tag}
        </span>
        <span className="inline-flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" /> {new Date(article.date).toLocaleDateString()}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-indigo-600">
        {article.title}
      </h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{article.excerpt}</p>
      <div className="mt-4 text-xs text-neutral-500 dark:text-neutral-400 inline-flex items-center gap-1">
        <MessageSquare className="h-3.5 w-3.5" /> {article.comments} comments
      </div>
    </article>
  );
}

export default function NewsFeed({ search }) {
  const [filter, setFilter] = useState('All');
  const articles = useMemo(() => {
    const s = (search || '').toLowerCase();
    return demoArticles.filter(
      (a) => (filter === 'All' || a.tag === filter) && (a.title.toLowerCase().includes(s) || a.excerpt.toLowerCase().includes(s))
    );
  }, [search, filter]);

  const filters = ['All', 'RPG', 'Action', 'Indie'];

  return (
    <section id="news" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Trending News</h2>
        <div className="inline-flex rounded-lg border border-neutral-200 dark:border-neutral-800 p-1 bg-white dark:bg-neutral-900">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-sm rounded-md ${
                filter === f
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                  : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </section>
  );
}
