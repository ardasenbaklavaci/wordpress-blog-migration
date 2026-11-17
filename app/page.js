import Link from 'next/link';
import { getPosts } from '@/lib/posts';

export default function Home() {
  const posts = getPosts().slice(0, 10);

  return (
    <>
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-blue-400 mb-4">
          Gaming & Hardware Discussions
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Exploring PC gaming, hardware benchmarks, and tech discussions
        </p>
      </section>

      <section className="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-gray-800 rounded-lg p-6 hover:border-blue-400 border border-gray-700 transition"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-blue-400 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-400">
                  {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-4">
              {post.frontmatter.excerpt || post.content.substring(0, 150) + '...'}
            </p>

            {post.frontmatter.categories && (
              <div className="flex gap-2 mb-4 flex-wrap">
                {post.frontmatter.categories.map((cat) => (
                  <span
                    key={cat}
                    className="bg-gray-700 px-3 py-1 rounded text-sm text-blue-400"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}

            <Link
              href={`/blog/${post.slug}`}
              className="inline-block text-blue-400 hover:text-blue-300 transition font-semibold"
            >
              Read More →
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-12 py-8 bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">About This Blog</h2>
        <p className="text-gray-300 mb-4">
          Welcome to our PC Gaming & Hardware Discussion blog. We cover everything from the latest
          game reviews and hardware benchmarks to in-depth discussions about gaming trends and PC
          building.
        </p>
        <p className="text-gray-300">
          This blog was migrated from WordPress to Next.js for improved performance and a modern
          tech stack.
        </p>
      </section>
    </>
  );
}
