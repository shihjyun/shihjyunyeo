/** @type {import('./$types').PageServerLoad} */

export async function load({ url }) {
  const posts = await fetch(`${url.origin}/post/post-meta.json`);

  return { posts: await posts.json() };
}
