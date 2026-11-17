import Link from 'next/link';
import { getPosts } from '@/lib/posts';

export const metadata = {
  title: 'All Blog Posts',
  description: 'Read all our PC gaming and hardware discussion posts',
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <h1 className="text-4xl font-bold text-blue-400 mb-8">All Posts</h1>

      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-gray-800 rounded-lg p-6 hover:border-blue-400 border border-gray-700 transition"
          >
            <h2 className="text-2xl font-bold text-blue-400 mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.frontmatter.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-400 mb-3">
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            {post.frontmatter.categories && (
              <div className="flex gap-2 mb-3 flex-wrap">
                {post.frontmatter.categories.map((cat) => (
                  <span key={cat} className="bg-gray-700 px-2 py-1 rounded text-xs text-blue-400">
                    {cat}
                  </span>
                ))}
              </div>
            )}
            <p className="text-gray-300 mb-4">
              {post.frontmatter.excerpt || post.content.substring(0, 100) + '...'}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-400 hover:text-blue-300 transition font-semibold"
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No posts found yet. Check back soon!</p>
        </div>
      )}
    </>
  );
}
