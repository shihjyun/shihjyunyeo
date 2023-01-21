import archieml from 'archieml';

/** @type {import('./$types').PageLoad} */

export async function load({ url }) {
  try {
    const post = await fetch(`${url.origin}${url.pathname}/content.txt`);

    return {
      url,
      post: archieml.load(await post.text()),
    };
  } catch (e) {
    return {
      status: 404,
      error: 'Post not found',
    };
  }
}
