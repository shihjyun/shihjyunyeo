const fs = require('fs');
const readline = require('readline');

let newPostConfig = {
  type: undefined,
  slug: undefined,
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// get post's type
const getPostType = () => {
  return new Promise((resolve, reject) => {
    rl.question(`👉 What kind of post you want add? [normal/special] `, (type) => {
      if (type === 'normal' || type === 'special') {
        newPostConfig.type = type;
        resolve();
      } else {
        console.error('❌ \tUnknown type of post.');
        process.exit(1);
      }
    });
  });
};

// get post's slug
const getPostSlug = () => {
  return new Promise((resolve, reject) => {
    rl.question(`👉 Please enter post's slug: `, (slug) => {
      // check for a valid slug name
      re = /^[A-Za-z0-9]+/;
      if (re.test(slug)) {
        newPostConfig.slug = slug;
        resolve();
      } else {
        console.error('❌ \tInvalid slug name.');
        process.exit(1);
      }
    });
  });
};

const createPostDir = () => {
  return new Promise((resolve, reject) => {
    console.log("⚡️ Creating posts' directory ...");
    // setup post dir
    const templateDir = `./template/${newPostConfig.type}-post`;
    const newPostDir = `./static/post/${newPostConfig.slug}`;
    // create post dir in static dir
    fs.mkdirSync(newPostDir);
    // copy template files to post dir
    fs.copyFileSync(`${templateDir}/content.txt`, `${newPostDir}/content.txt`);
    fs.copyFileSync(`${templateDir}/example.png`, `${newPostDir}/example.png`);

    // special post need to create more stuff
    if (newPostConfig.type === 'special') {
      // create custom component directory
      const componentsDir = `./src/lib/post/${newPostConfig.slug}`;
      fs.mkdirSync(componentsDir);
      fs.copyFileSync(`${templateDir}/ExampleComponent.svelte`, `${componentsDir}/ExampleComponent.svelte`);
      // create special post's route page
      const routePageDir = `./src/routes/post/${newPostConfig.slug}`;
      fs.mkdirSync(routePageDir);
      const templateIndexFile = fs.readFileSync(`${templateDir}/index.svelte`).toString();
      fs.writeFileSync(`${routePageDir}/index.svelte`, templateIndexFile.replace('[slug]', newPostConfig.slug));
    }
    console.log('✅ \tAdd new post successfully!');
    resolve();
  });
};

const main = async () => {
  await getPostType();
  await getPostSlug();
  rl.close();
  await createPostDir();
};

main();
