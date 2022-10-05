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

![image](https://user-images.githubusercontent.com/51419598/194051081-5f30f1ca-b580-4249-b374-45469e9c0fa9.png)
![image](https://user-images.githubusercontent.com/51419598/194051270-5a7fead1-13aa-4cc5-b490-6f370f6aedf9.png)
![image](https://user-images.githubusercontent.com/51419598/194051245-78367076-3178-491d-a208-cb4a3ac2ea60.png)
![image](https://user-images.githubusercontent.com/51419598/194051206-ec8bfac4-bcc0-4c8b-9f0a-4267d72b98d7.png)
![image](https://user-images.githubusercontent.com/51419598/194051344-0a5770fa-1269-4467-9024-37039aac2f75.png)

## Built-in features

- Thumbnail image (when publishing a new discussion use an markdown image, e.g `![...]()` or `<img src="..." />` in the first line of the discussion body and it will be used as thumbnail).
- Single config file `blog.config.ts`.
- TypeScript by default.

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
