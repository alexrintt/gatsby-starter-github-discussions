import * as React from "react";
import { graphql, PageProps } from "gatsby";

export default function TypegenPage(
  props: PageProps<Queries.TypegenPageQuery>
) {
  const { data } = props;

  return (
    <main style={{}}>
      <p>Site title: {data.site?.siteMetadata?.title}</p>
      <hr />
      <p>Query Result:</p>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </main>
  );
}

export const query = graphql`
  query TypegenPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
