---
title: Homepage
layout: base.njk
---

Hi! Welcome to my website. This is a place for me to host my portfolio and blog.

This website was built with <a href="https://11ty.dev">11ty</a> and is hosted on <a href="https://neocities.org/">Neocities</a>.

Everything here is hand-coded!

Check out my most recent blogpost here.

{%- from "src/_includes/macro.njk" import postInfo -%} 
{% set postList = collections.post | last %}
{{ postInfo(postList) }}