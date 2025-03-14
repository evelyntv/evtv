---
title: Blogs
layout: base.njk
tags: rootLink
---

{%- from "src/_includes/macro.njk" import postInfo -%} {% for post in
collections.post | reverse %} {{ postInfo(post) }} {% endfor %}