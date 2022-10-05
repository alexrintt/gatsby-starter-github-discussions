import * as React from "react";
import { graphql, PageProps } from "gatsby";

export default function BlogPostPage(
  props: PageProps<Queries.BlogPostPageQuery>
) {
  const {
    data: { gitHubDiscussion: post },
  } = props;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: post.childMarkdownRemark.html }}
    ></div>
  );
}

export const query = graphql`
  query BlogPostQuery($githubId: String!) {
    gitHubDiscussion(githubId: { eq: $githubId }) {
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
`;
