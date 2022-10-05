import path from "path";
import { slugify } from "./src/utils/slugify";
import blogConfig from "./blog.config";
import type { GatsbyNode } from "gatsby";

type CreatePagesAPI = GatsbyNode[`createPages`];
type OnCreatePageAPI = GatsbyNode[`onCreatePage`];

const createBlogPostPages: CreatePagesAPI = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const query = `
    query GetAllGitHubDiscussions {
      allGitHubDiscussion {
        nodes {
          id
          title
          githubId
          createdAt
          path
          category {
            githubId
            name
          }
          childMarkdownRemark {
            html
            id
          }
        }
      }
    }
  `;

  const { data } = await graphql<Queries.Query>(query);

  if (!data) {
    throw Error(
      `Was not possible to fetch data: ` + data + "\nQuery: " + query
    );
  }

  for (const discussion of data.allGitHubDiscussion.nodes) {
    createPage({
      path: discussion.path!,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      ownerNodeId: discussion.id,
      context: {
        githubId: discussion.githubId,
      },
    });
  }
};

export const createPages: CreatePagesAPI = async function (...args) {
  await createBlogPostPages(...args);
};
