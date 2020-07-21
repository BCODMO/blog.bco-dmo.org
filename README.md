# BCO-DMO blog

https://blog.bco-dmo.org

## Getting Started

1. Create an author record in: [_data/authors.yml](/_data/authors.yml)

## Writing a blog post

1. Create a post in `_drafts` folder like `_drafts/my-first-post.md` with the followign template:

```
---
layout: post
type: BlogPosting
published: false
title: "title goes here"
subtitle: "an optional subtitle can go here"
date: YYYY-MM-DD
lastModified: YYYY-MM-DD HH:mm:ss
author: your key from _data/authors.yml
tags: 
---

Callout text goes here<!--more--> Say more here
```

2. When ready to publish,
    1. set the `published: true`
    2. rename the post to `_posts/YYYY-MM-DD-<desired-url-goes-here-using-dashes>.md`

### Linking to other blog posts

See https://jekyllrb.com/docs/liquid/tags/#linking-to-posts

### Excerpts

Excerpts are snippets from the post that can be used elsewhere as callout text. 

## Post metadata

At the top of each post, is a section of metadata in between `---` and `---`

### Metadata that does not change

* `layout: post` - tells the blog that this page is a blog post.
* `type: BlogPosting` - tells the webpage which [schema.org](https://schema.org) type to use for SEO.


### Metadata that you *can* change

* published
* title
* subtitle
* date
* lastModified
* author
* image
* tags 

#### `published`

| Property | Value |
|---|---|
| Required | yes |
| Data Type | `true` or `false` |

`true` means the blog post will appear on the website. `false` means the post will not appear.

#### `title`

| Property | Value |
|---|---|
| Required | yes |
| Data Type | string |

This is the title of your blog post.

#### `subtitle`

| Property | Value |
|---|---|
| Required | no |
| Data Type | string |

This is an optional subtitle for your blog post.

#### `date`

| Property | Value |
|---|---|
| Required | yes |
| Data Type | YYYY-MM-DD |

This is the date your blog post was published. It should be set at the same time you set `published`.

#### `lastModified`

| Property | Value |
|---|---|
| Required | no, but recommended if post is edited |
| Data Type | YYYY-MM-DD ss:mm:ss |

This is the date your blog post was edited, and it tells search engines that your post needs to be reharvested. It should be set if you edit a published post. A sample value is: `2020-01-01 13:15:00`

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

#### `image`

| Property | Value |
|---|---|
| Required | no, but recommended |
| Data Type | string |

Images are placed in `assets/img` and this value would be `/assets/img/path-to-your-image-file.jpg`.

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


## Resources

### Jekyll + Github Pages
* http://jmcglone.com/guides/github-pages/

### Markdown
* https://packetlife.net/media/library/16/Markdown.pdf 
* https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
