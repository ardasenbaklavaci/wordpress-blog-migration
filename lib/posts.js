import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      return getPostBySlug(slug);
    })
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return allPostsData;
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      frontmatter: data,
      content,
      html: content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function getPostHtml(slug) {
  const post = getPostBySlug(slug);
  if (!post) return null;

  try {
    const processed = await remark()
      .use(remarkGfm)
      .use(remarkHtml)
      .process(post.content);

    return {
      ...post,
      html: processed.toString(),
    };
  } catch (error) {
    console.error(`Error processing markdown for ${slug}:`, error);
    return post;
  }
}
