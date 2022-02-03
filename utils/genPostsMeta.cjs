#!/usr/bin/env node
const fs = require('fs');
const archieml = require('archieml');

const genPostsMetaList = () => {
  let postMeta = [];
  const postRoot = './static/post/';
  fs.readdirSync(postRoot).map((dir) => {
    // skip posts' meta data
    if (dir !== 'post-meta.json') {
      const postContentFile = `${postRoot}${dir}/content.txt`;
      const content = archieml.load(fs.readFileSync(postContentFile, { encoding: 'utf8', flag: 'r' }));
      // check if content object is empty
      if (Object.keys(content).length === 0) {
        const err = new Error(`❌ \tPlease check if there any content in ${postRoot}${dir}/content.txt`);
        console.error(err.message);
      } else {
        const meta = {
          // remove html tag
          title: content.title.replace(/<[^>]*>?/gm, ''),
          date: content.date,
          category: content.category,
          // ogImage: content.ogImage
        };
        postMeta.push(meta);
      }
    }
  });
  fs.writeFileSync(`./static/post/post-meta.json`, JSON.stringify(postMeta));
  console.log("✅ \tPosts' metadata has been generated successfully!");
};

genPostsMetaList();
