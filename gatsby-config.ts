import type { GatsbyConfig } from "gatsby";
import blogConfig from "./blog.config";
import { slugify } from "./src/utils/slugify";
import parse from "html-dom-parser";
import type { Element } from "domhandler";

require("dotenv").config({
  path: `.env`,
});

function extendDiscussionType(discussion: any) {
  // type of discussion == "Discussion", see GitHub API reference below.
  // https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions#discussion
  // Not all fields are included but most of them.

  const slug = slugify(discussion.title, discussion.createdAt);
  const path = (blogConfig.postsBasePath ?? ``) + `/` + slug;
  const url = blogConfig.domain + path;

  function getThumbnailUrlIfAny(string: string): string | undefined {
    const source = string.trim();
    const isMarkImg = source.startsWith(`![`);
    const isHtmlImg = source.startsWith(`<img`);

    if (!isMarkImg && !isHtmlImg) {
      return undefined;
    }

    function htmlImgFromMarkImg(source: string): string {
      const regex = /!\[(.*?)]\((https?:\/\/\S+\.\w+)\)/g;

      // Dangerous but we trust the HTML source since only users with repo write access can publish posts.
      return source.replace(regex, `<img alt="$1" src="$2" />`);
    }

    const imgString = isMarkImg ? htmlImgFromMarkImg(source) : source;
    const imgNode = parse(imgString)[0] as Element;
    const src = imgNode.attribs.src;

    if (!src.startsWith(`http`)) {
      return undefined;
    }

    return src;
  }

  const postLines = discussion.body.split(`\n`);

  const thumbnailImageUrl = getThumbnailUrlIfAny(postLines[0]);
  const hasThumbnailImageUrl = typeof thumbnailImageUrl === `string`;

  return {
    ...discussion,
    discussionUrl: discussion.url,
    body: hasThumbnailImageUrl
      ? postLines.slice(1).join(`\n`)
      : discussion.body,
    thumbnailImageUrl: hasThumbnailImageUrl ? thumbnailImageUrl : null,
    hasThumbnailImageUrl,
    url,
    path,
    slug,
  };
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Alex Rintt`,
    siteUrl: blogConfig.domain,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `@alexrintt/gatsby-source-github-discussions`,
      options: {
        // Remember you can always create a second instance of
        // this plugin and assign a different `instance` option
        // to fetch from discussion from multiple repositories.
        owner: blogConfig.owner,
        repo: blogConfig.repo,

        // This plugin uses the GitHub GraphQL API to query data
        // and this API requires authentication.
        githubToken: process.env.GITHUB_TOKEN,

        // You can use this key to filter any resource.
        // So you can use multiple instances of this plugin and keep the relationships.
        instance: `Post`,

        // Likely to be a Announcement type discussion category since only
        // users with repo write access can create discussions with this category
        // This allow a moderation when newcomers post something.
        categorySlugs: blogConfig.discussionCategories,
        customSchemaTypes: {
          GitHubDiscussion: [
            // See Gatsby custom schema types:
            // https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/.
            //
            // In this case we're taking the first line as thumbnail if it's a image URL (See [extendDiscussionType] function).
            // But we need to tell Gatsby that this is field [thumbnailImageUrl]
            // is a image and should be optimized as one.
            `thumbnailImageUrl: File @link(from: "fields.thumbnailImageUrl")`,
          ],
        },
        extendDiscussionType,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-anywhere`,
            options: {
              staticDir: blogConfig.postsBasePath + `/static`,
              loading: `lazy`,
              backgroundColor: `#00000000`,
              linkImagesToOriginal: true,
              wrapperStyle: ``,
              sharpMethod: `fluid`,
              maxWidth: 1080,
              quality: 100,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
      __key: `pages`,
    },
  ],
};

export default config;
