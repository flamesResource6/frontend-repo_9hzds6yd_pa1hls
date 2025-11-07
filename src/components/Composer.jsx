import { useState } from 'react';
import { Send, ImagePlus } from 'lucide-react';

export default function Composer({ onPublish }) {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onPublish?.({
      title: title.trim(),
      excerpt: excerpt.trim() || 'New community post',
      date: new Date().toISOString(),
      author: 'You',
      comments: 0,
    });
    setTitle('');
    setExcerpt('');
  };

  return (
    <form onSubmit={submit} className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-5 space-y-3">
      <div>
        <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-300">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write a catchy headline..."
          className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-300">Summary</label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Give readers a teaser..."
          className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 h-24"
        />
      </div>
      <div className="flex items-center justify-between">
        <button type="button" className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">
          <ImagePlus className="h-4 w-4" /> Add cover image
        </button>
        <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2">
          <Send className="h-4 w-4" /> Publish
        </button>
      </div>
    </form>
  );
}
