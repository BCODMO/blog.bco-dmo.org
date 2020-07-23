# BCO-DMO blog

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fblog.bco-dmo.org)](https://blog.bco-dmo.org)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/BCODMO/blog.bco-dmo.org)](https://github.com/BCODMO/blog.bco-dmo.org/releases)
[![GitHub Release Date](https://img.shields.io/github/release-date/BCODMO/blog.bco-dmo.org)](https://github.com/BCODMO/blog.bco-dmo.org/releases)
[![GitHub issues](https://img.shields.io/github/issues/BCODMO/blog.bco-dmo.org)](https://github.com/BCODMO/blog.bco-dmo.org/issues)

https://blog.bco-dmo.org

[![Twitter Follow](https://img.shields.io/twitter/follow/BCODMO?style=social)](https://twitter.com/BCODMO/followers)

<a name="getting-started"></a>
## Getting Started

1. Create an author record in: [_data/authors.yml](/_data/authors.yml)

<a name="writing-posts"></a>
## Writing a blog post

1. Create a post in `_drafts` folder like `_drafts/my-first-post.md` with the following template:

```
---
layout: post
type: BlogPosting
published: false
title: "title goes here"
subtitle: "an optional subtitle can go here"
description: "A callout text to be used in SEO. Think about the text you'd want in a Twitter share."
date: YYYY-MM-DD
lastModified: YYYY-MM-DD HH:mm:ss
author: [your key from _data/authors.yml]
category: news
tags: 
  - keyword1
  - keyword2
image:
  path: CoreTrustSeal-logo-transparent.png
  caption: "Short description goes here"
  url: https://www.coretrustseal.org/
  dimension: is-128x128
  border: true
---

Blog content starts. Callout text goes here<!--more--> Say more here
```

<a name="linking-posts"></a>
### Linking to other blog posts

See https://jekyllrb.com/docs/liquid/tags/#linking-to-posts

<a name="excerpts"></a>
### Excerpts

Excerpts are snippets from the post that can be used elsewhere as callout text.  From the template above, notice the `<!--more-->`. All blog content up to this comment tag will be captured as the blog's official exceprt, or callout text. This text appears in all blog cards from the homepage, section listings and tag listing pages. These excerpts are also included in the RSS feed of the blog. 

<a name="publishing-post"></a>
## Publishing a Post

1. Decide which [category](#post-metadata-category) is the best fit. One of: [`news`, `data-tools`, `insights`, `engineering`]
2. Set the `published: true`
3. Rename the post to `_posts/YYYY-MM-DD-<desired-url-goes-here-using-dashes>.md` (NOTE: `_drafts` was replaced by `_posts`
4. Save post
5. Create a new [Release](https://github.com/BCODMO/blog.bco-dmo.org/releases/new)
    1. `v(x).0` where `(x)` is incremented from the previous blog version number. For example, if the current version of the blog is `v1.0`, set release version to `v2.0`
    2. Set the `Release Title` to the title of your post.
    3. Click `Publish Release`
    
<a name="q_why-releases"></a>
__Q: Why do we need to publish releases?__

`Releases help us preserve the state of the blog so that if for any reason, we can recapture content at certain important points in the history of the blog. THis helps us mitigate unforeseen circumstances where content is accidentally deleted or moved.`
 
6. Ensure the blog was [successfully built](https://github.com/BCODMO/blog.bco-dmo.org/deployments/activity_log?environment=github-pages)

<img width="559" alt="Successful Deployment of the Blog" src="https://user-images.githubusercontent.com/2117576/88196632-6b993580-cc0f-11ea-8518-74446d5805d5.png">

<a name="post-metadata"></a>
## Post metadata

At the top of each post, is a section of metadata in between `---` and `---`

<a name="post-metadata-unchanging"></a>
### Metadata that does not change

* `layout: post` - tells the blog that this page is a blog post.
* `type: BlogPosting` - tells the webpage which [schema.org](https://schema.org) type to use for SEO.

<a name="post-metadata-changeable"></a>
### Metadata that you *can* change

* published
* title
* subtitle
* date
* lastModified
* author
* category
* tags
* image

<a name="post-metadata-published"></a>
#### `published`

| Property | Value |
|---|---|
| Required | yes |
| Data Type | `true` or `false` |

`true` means the blog post will appear on the website. `false` means the post will not appear.

<a name="post-metadata-title"></a>
#### `title`

| Property | Value |
|---|---|
| Required | yes |
| Data Type | string |

This is the title of your blog post.

<a name="post-metadata-subtitle"></a>
#### `subtitle`

| Property | Value |
|---|---|
| Required | no |
| Data Type | string |

This is an optional subtitle for your blog post.

<a name="post-metadata-description"></a>
#### `description`

| Property | Value |
|---|---|
| Required | no, highly recommended |
| Data Type | string |

An, optional, but highly valuable field used for search engien optimization. It's used as the callout text in Twitter and LinkedIn shares. For that reason, [keep the character count to around or under 200 characters](https://www.charactercountonline.com/).

<a name="post-metadata-date"></a>
#### `date`

| Property | Value |
|---|---|
| Required | yes |
| Data Type | YYYY-MM-DD |

This is the date your blog post was published. It should be set at the same time you set `published`.

<a name="post-metadata-last-modified"></a>
#### `lastModified`

| Property | Value |
|---|---|
| Required | no, but recommended if post is edited |
| Data Type | YYYY-MM-DD ss:mm:ss |

This is the date your blog post was edited, and it tells search engines that your post needs to be reharvested. It should be set if you edit a published post. A sample value is: `2020-01-01 13:15:00`

<a name="post-metadata-author"></a>
#### `author`

| Property | Value |
|---|---|
| Required | yes |
| Data Type | string |

This is the key from the `_data/authors.yml` file. For example, `mike` is the key if the author file has:

```
mike:
    name: Michael Jackson
    ...
```

<a name="post-metadata-category"></a>
#### `category`

| Property | Value |
|---|---|
| Required | yes |
| Data Type | string |
| Accepted Values | `news`, `data-tools`, `insights`, `engineering` |

Category determines which section the post appears in the blog. 

<a name="post-metadata-image"></a>
#### `image`

| Property | Value |
|---|---|
| Required | no, but recommended |
| Data Type | object |
| Fields | `path`, `caption`, `url`, `dimension`, `border` |

Images are placed in [`assets/img/posts`](https://github.com/BCODMO/blog.bco-dmo.org/tree/master/assets/img/posts) and they appear in the blog post in the upper-right corner with text wrapping around the image.

| Fields | Required | Data Type | Description |
|---|---|---|---|
| `path` | yes | string | Either the name of the file you uploaded to `assets/img/posts` or an absolute URL to an external image |
| `caption` | yes | string | A short descriptionn of the image |
| `url` | no | URL | If you want the image to link off to another site or webpage |
| `dimension` | no | string | A CSS class name that resizes the image. Valid values are here: [Bulma Images](https://bulma.io/documentation/elements/image/) |
| `border` | no | `true` or `false` | If you want a border around the image |

<a name="post-metadata-tags"></a>
#### `tags`

| Property | Value |
|---|---|
| Required | no, but recommended |
| Data Type | Array of strings |

Tags are used to group posts by keyword. To list tags, format this value:

```
tags:
  - keyword1
  - keyword2
  - keyword3
```
Each keyword will create a new page. `keyword1` can be seen at: `https://blog.bco-dmo.org/tag.html#keyword1`

<a name="resources"></a>
## Resources

<a name="uploading-images"></a>
### Need to upload Images?

Images for documentation can be uploaded here: [How-To & Documentation Images](https://github.com/BCODMO/blog.bco-dmo.org/issues/7)

<a name="jekyll-liquid"></a>
### Jekyll + Liquid Templates + Github Pages
* http://jmcglone.com/guides/github-pages/

<a name="markdown"></a>
### Markdown
* https://packetlife.net/media/library/16/Markdown.pdf 
* https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
