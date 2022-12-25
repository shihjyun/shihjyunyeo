import archieml from 'archieml';

/** @type {import('./$types').PageServerLoad} */

export async function load({ url }) {
  const works = await fetch(`${url.origin}/works/works-meta.txt`);

  return { works:  archieml.load(await works.text()) };
}