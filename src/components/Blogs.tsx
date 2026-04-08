import { Calendar, Clock, Eye } from "lucide-react";
import { blogsData } from "./blogsdata";

const MAX_VISIBLE_TAGS = 3;

const Blogs = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">recent posts</h2>
        <a
          href="/blog"
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1"
        >
          view more →
        </a>
      </div>

      <div className="flex flex-col gap-px rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        {blogsData.map((post, i) => (
          <a
            key={i}
            href={post.url}
            className="flex gap-6 justify-between p-5 bg-white/60 dark:bg-gray-900/40 hover:bg-gray-100/80 dark:hover:bg-gray-800/60 transition-colors group"
          >
            {/* Left: title, description, tags */}
            <div className="flex flex-col gap-2 min-w-0">
              <h3 className="font-bold text-base group-hover:text-gray-900 dark:group-hover:text-white transition-colors line-clamp-1">
                {post.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {post.tags.slice(0, MAX_VISIBLE_TAGS).map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-0.5 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > MAX_VISIBLE_TAGS && (
                  <span className="text-xs px-2 py-0.5 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    +{post.tags.length - MAX_VISIBLE_TAGS}
                  </span>
                )}
              </div>
            </div>

            {/* Right: date, read time, views */}
            <div className="flex flex-col items-end gap-1.5 shrink-0 text-xs text-gray-500 dark:text-gray-400 pt-0.5">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Eye size={12} />
                {post.views.toLocaleString()} views
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
