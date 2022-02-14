import { randomIntFromInterval } from "./random-int-from-interval";

const tagsArr = [
  "Fashion",
  "LookBook",
  "Outfit",
  "Look-Of-The-Day",
  "Fashion Week",
  "Fashionable",
  "Stylish",
  "Diaries",
  "Blog",
  "FashionStyle",
  "FashionPost",
  "FashionGram",
  "InstaFashion",
  "InstaStyle",
  "StyleBlog",
  "StreetWear",
  "WhatIWore",
  "Trend",
  "Look",
  "Fashion Lover",
  "Fashionista",
  "Outfit Post",
  "FashionDaily",
  "FashionStylist",
];

export function tags(min, max) {
  let n = randomIntFromInterval(min, max);
  let randomTags = tagsArr.sort(() => 0.5 - Math.random()).slice(1, n);
  return randomTags;
}
