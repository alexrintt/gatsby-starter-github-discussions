const config = {
  owner: `alexrintt`,
  repo: `rintt`,

  /**
   * Global blog base path if any (e.g: '/myblog'). Set to [null] to use '/'.
   */
  basePath: null,

  /**
   * WARNING: DO NOT EDIT IT AFTER YOU BLOG GOES TO PRODUCTION
   * OTHERWISE YOUR OLD POSTS URLS WILL NO LONGER BE AVAILABLE
   *
   * EDIT IT WHEN DEPLOYING YOUR BLOG FOR THE FIRST TIME OR
   * WHEN YOU DON'T CARE ABOUT LOSING YOUR OLD URLS
   *
   * Slug is the human readable ID of each post, but GitHub API has the limitation that
   * we can't offer a trusted slug system that will prevent you to create duplicated posts (same title).
   *
   * So to avoid it and keep readable, we can add extra-metadata to
   * the generated slug like {DATE} and {TIME} to make it even more unique (and thus prevent duplication).
   *
   * Available metadatas:
   * - {TITLE} Required, the title of the post (The title is transformed by `slugify` npm package).
   * - {DATE} in YYYY-MM-DD format.
   * - {TIME} in HH-MM format.
   *
   * Notes for those who are using [DATE] or [TIME] metadata:
   * - Due different time-zones some posts can create a slug in a 'future' or 'past' time.
   * - e.g: If you are somewhere GMT-3, since GitHub create issues using UTC time, your posts will be 3 hours in the future (since UTC is GMT-0).
   * - The displayed date in the browser will not be affected (it's translated to local time depending on client location).
   */
  slugPattern: `{TITLE}-{DATE}`,

  /**
   * Your posts will be shown at [/blog/myblog-post-title-123-abc].
   * Set to null if you want to omit the basepath.
   */
  postsPath: `/blog`,

  /**
   * Base URL for all blog content.
   */
  domain: `https://alexrintt.github.io`,
};

const basePath = config.basePath ?? ``;
const postsBasePath = basePath + (config.postsPath ?? ``);

export default {
  ...config,
  basePath,
  postsBasePath,
};
