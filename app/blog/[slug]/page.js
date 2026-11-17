import Link from 'next/link';
import { getPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt || post.content.substring(0, 150),
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-400 mb-4">
            {post.frontmatter.title}
          </h1>
          <div className="flex justify-between items-center text-gray-400 mb-6">
            <span>
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            {post.frontmatter.author && <span>By {post.frontmatter.author}</span>}
          </div>

          {post.frontmatter.categories && post.frontmatter.categories.length > 0 && (
            <div className="flex gap-2 mb-6 flex-wrap">
              {post.frontmatter.categories.map((cat) => (
                <span
                  key={cat}
                  className="bg-gray-900 px-3 py-1 rounded text-sm text-blue-400 border border-blue-400"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>

        {post.frontmatter.image && (
          <img
            src={post.frontmatter.image}
            alt={post.frontmatter.title}
            className="w-full h-auto rounded-lg mb-8 max-h-96 object-cover"
          />
        )}

        <div className="blog-post text-gray-300">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition">
            ← Back to all posts
          </Link>
        </div>
      </article>
    </>
  );
}
