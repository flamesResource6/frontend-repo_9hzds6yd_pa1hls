import { Calendar, MessageSquare, User } from 'lucide-react';

export default function PostCard({ post }) {
  return (
    <article className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 hover:shadow-lg transition-shadow">
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <Calendar className="h-3.5 w-3.5" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-indigo-600 transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between text-sm text-neutral-500">
          <div className="inline-flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>{post.comments} comments</span>
          </div>
        </div>
      </div>
    </article>
  );
}
