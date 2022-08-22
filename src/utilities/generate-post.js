import shell from "shelljs";
import { v4 as uuidv4 } from "uuid";
import { randomIntFromInterval } from "./random-int-from-interval";
import { randomDate } from "../utilities/random-date";
import { loremIpsum } from "lorem-ipsum";
import { titleCase } from "../utilities/title-case";
import { longText, shortText } from "./generate-text";
import { tags } from "../utilities/tags";
import { topic } from "../utilities/topic";
import { jsonToYaml } from "../utilities/json-to-yaml";
import { writeFile } from "../utilities/write-file";
import { createPostImage } from "./create-post-image";

// VARIABLES
const imageFileName = "post-image.png";

export function generatePost(
  email,
  basePath,
  authors,
  startDate,
  endDate,
  dateFormat,
  numberOfAuthors,
  postImageName,
  postImageExtention,
  noImages
) {
  const postTitle = titleCase(loremIpsum());
  const date = randomDate(startDate, endDate, dateFormat);
  const postDir = `${basePath}/posts/${date}`;
  shell.mkdir("-p", postDir);
  // pick n elements randomly from array

  // console.log("email: ", email);

  let emails = [];
  if (numberOfAuthors === 1) {
    emails.push(email);
  } else {
    let n = randomIntFromInterval(0, numberOfAuthors);
    let randomAuthors = authors.sort(() => 0.5 - Math.random()).slice(0, n);
    const authorEmails = randomAuthors.map((author) => author.email);
    const authorEmailsFiltered = authorEmails.filter((e) => email !== e);
    emails = [email, ...authorEmailsFiltered];
    // console.log("emails: ", emails);
  }

  // let n = randomIntFromInterval(0, numberOfAuthors);
  // let randomAuthors = authors.sort(() => 0.5 - Math.random()).slice(0, n);
  // const randomEmails = randomAuthors.map((author) => author.email);
  // randomEmails.push(email);

  // TODO: construct frontmatter data as json
  const postJSON = {
    // id: uuidv4(),
    title: postTitle,
    date: date,
    topic: topic(),
    tags: tags(3, 6),
    summary: shortText,
    author: emails,
    image: noImages ? "" : `./${imageFileName}`,
    image_alt: "Alt text.",
    image_credit_text: "Image Creator's Name",
    image_credit_link: "Link to Image Creator",
    image_description: "Image Description Text",
  };

  const postYaml = jsonToYaml(postJSON);
  const postFrontmatter = `---\n${postYaml}---\n\n`;
  const postMarkdown = `${postFrontmatter}${longText}`;

  // write post file
  writeFile(postDir, postMarkdown, "index", "mdx");

  // create an image per post
  noImages
    ? null
    : createPostImage(
        4000, // image w
        3000, // image h
        postTitle, // text
        `${postDir}/${postImageName}.${postImageExtention}`, // path
        "#ffffff", // textColor
        "#fd1d1d" // backgroundColor
      );
}
