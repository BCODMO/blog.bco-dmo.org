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
title: "title goes here"
subtitle: "an optional subtitle cann go here"
date: YYYY-MM-DD
lastModified: YYYY-MM-DD HH:mm:ss
published: false
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

### Metadata that does not need to be changed

* layout: post
* type: BlogPosting

`layout` tells the blog that this page is a blog post.

## Resources
### Jekyll + Github Pages
* http://jmcglone.com/guides/github-pages/

### Markdown
* https://packetlife.net/media/library/16/Markdown.pdf 
* https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
