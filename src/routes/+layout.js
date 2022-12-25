export const trailingSlash = 'always';

/** @type {import('./$types').LayoutLoad} */
export async function load({ url }) {
  try {
    return {
      url
    };
  } catch (e) {
    return {
      status: 404,
      error: 'Post not found',
    };
  }
}

