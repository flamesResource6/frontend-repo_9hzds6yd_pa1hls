import { useState } from 'react';
import { Send } from 'lucide-react';

export default function SubmitNews({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('RPG');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onSubmit?.({ title: title.trim(), tag, content: content.trim() });
    setTitle('');
    setTag('RPG');
    setContent('');
  };

  return (
    <section id="submit" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Publish your news</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Catchy headline"
          className="w-full rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="flex gap-3">
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm"
          >
            <option>RPG</option>
            <option>Action</option>
            <option>Indie</option>
          </select>
          <div className="text-xs text-neutral-500 self-center">Select a category</div>
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your story..."
          rows={6}
          className="w-full rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm"
        >
          <Send className="h-4 w-4" /> Submit
        </button>
      </form>
    </section>
  );
}
