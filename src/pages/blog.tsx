import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import config from "../../blog.config";
import { slugify } from "../utils/slugify";

export default function BlogPage(props: PageProps<Queries.BlogPageQuery>) {
  const {
    data: {
      allGitHubDiscussion: { nodes: discussions },
    },
  } = props;

  return (
    <>
      <h1>My Blog HomePage</h1>
      {discussions.map((d: any) => (
        <p key={d.id}>
          <Link to={config.postsBasePath + "/" + slugify(d.title, d.createdAt)}>
            {d.title}
          </Link>
          <br />
          <Link to={d.discussionUrl}>{d.discussionUrl ?? "aksodkas"}</Link>
        </p>
      ))}
    </>
  );
}

export const query = graphql`
  query BlogPageQuery {
    allGitHubDiscussion {
      nodes {
        id
        title
        githubId
        createdAt
        discussionUrl
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
