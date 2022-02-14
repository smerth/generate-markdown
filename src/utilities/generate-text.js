import { LoremIpsum } from "lorem-ipsum";
import json2md from "json2md";

// create a new instance with options
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const longText = json2md([
  { h1: lorem.generateSentences(1) },
  { p: lorem.generateParagraphs(1) },
  { h2: lorem.generateSentences(1) },
  { p: lorem.generateParagraphs(2) },
  { blockquote: lorem.generateSentences(1) },
  { p: lorem.generateParagraphs(2) },
  { h2: lorem.generateSentences(1) },
  { p: lorem.generateParagraphs(1) },
  {
    img: [
      {
        title: "Some image",
        source:
          "https://d2r55xnwy6nx47.cloudfront.net/uploads/2022/02/SCALING_NETS_2880x1620_Lede.svg",
      },
    ],
  },
  { p: lorem.generateParagraphs(1) },
]);

export const shortText = `${lorem.generateParagraphs(1)}`;
