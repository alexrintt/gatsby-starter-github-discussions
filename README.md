> **Warning** this starter has no styles or customized UI, only the configured data-source plugin.

## Package features

This starter contains the package [`alexrintt/gatsby-source-github-discussions`](https://github.com/alexrintt/gatsby-source-github-discussions) to fetch the data from the GitHub GraphQL API.

This plugin fetches the discussions from the given configured repositories (if enabled) and link with their respective authors and labels. Further details are available on [Gatsby - Creating a source plugin](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/creating-a-source-plugin/).

- Custom schema type for this use-case, this means you can filter discussion by authors and vice-versa and take full advantage of Gatsby GraphQL shema types.
- Authors have optimized _avatarImage_.
- Discussions have optimized _thumbnailImageUrl_.
- GitHub flavored is fully supported through `gatsby-tranform-remark` plugin.
- Support schema type customization through `customSchemaTypes` option.
- Any extended discussion field which ends with `imageUrl` will be automatically optimized and to enable it you can extend the field types.

## Built-in features

- Thumbnail image (when publishing a new discussion use an markdown image, e.g `![...]()` or `<img src="..." />` in the first line of the discussion body and it will be used as thumbnail).
- Single config file `blog.config.ts`.
- TypeScript by default.

![Group 4 (1)](https://user-images.githubusercontent.com/51419598/194061391-b75a77c0-7344-4f05-b0b6-5eb589287f6c.png)

<samp>

<h2 align="center">
  Open Source
</h2>
<p align="center">
  <sub>Copyright © 2022-present, Alex Rintt.</sub>
</p>
<p align="center">Gatsby Starter GitHub Discussions <a href="https://github.com/alexrintt/gatsby-starter-github-discussions/blob/master/LICENSE">is MIT licensed 💖</a></p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/51419598/194058464-f67c7fb5-9066-49b5-aa94-cf34830708ad.png" width="35" />
</p>

</samp>
