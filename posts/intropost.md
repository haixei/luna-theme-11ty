---
title: Introduction to the markdown.
description: This is a post that showcases most of the markdown possibilities.
date: 2024-01-31
seriesName: casual
tags:
 - tutorial
---
This eleventy theme uses markdown-it with a few basic plugins for better tables and highlighting.

## Basics

This is a simple paragraph with a ==highlighted== word! You can also do this 29^th^ and this H~2~0. And make it **bold** or _italic_. You can even [link](#) stuff. Below you have headings, that will mess up the table of contents, but that's okay in this post :)

---
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
---
Tables are easy to make and can be quite complex.

```table
Rank    City           Country         Population (millions)   Attractions
-       -              -------         -:                      ---------------------
1       Paris          France          2.2                     Eiffel Tower, Louvre Museum
2       Tokyo          Japan           14.0                    Tokyo Tower, Shibuya Crossing
3       Rome           Italy           2.9                     Colosseum, Vatican City
4       Sydney         Australia       5.4                     Sydney Opera House, Bondi Beach
5       New York City  United States   8.4                     Statue of Liberty, Times Square
```
```table
**Bold Text**   *Italic Text*
`Code Snippet`  [Link Text](#)
```
---
We can't move on without a good xkcd comic though..

![img](https://imgs.xkcd.com/comics/selection_bias.png)
*You can find more on his [site!](https://xkcd.com/)*

---
## Fancy stuff
Code highlighting works using PrismJS. Change the prism.css to switch the theme.
```js
let sum = 0; 
const numbers = [1, 2, 3, 4, 5]; 
  
numbers.forEach( (num) => { 
  sum = sum + num; 
}); 
```
---
Sorry, but I couldn't leave you without an ability to write pretty math equations.

- $x + y$
- $x - y$
- $x \times y$ 
- $x \div y$
- $\dfrac{x}{y}$
- $\sqrt{x}$
---
Citations are pretty useful too. Especially if you write about research.[^markdown-capabilities]
It can be hard to track all of the things you have to do if your text is complicated, so there you have a list:

- [x] Make a first post
- [ ] Think of more than one post

Now it's time to get to work.

[^markdown-capabilities]: [Zotero is a useful tool for that btw.](https://www.zotero.org/)