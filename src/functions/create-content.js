import shell from "shelljs";
import { getMaleName } from "../utilities/get-male-name";
import { getFemaleName } from "../utilities/get-female-name";
import { getLastName } from "../utilities/get-last-name";
import { createUniqueEmail } from "../utilities/create-unique-email";
import { jsonToYaml } from "../utilities/json-to-yaml";
import { longText, shortText } from "../utilities/generate-text";
import { createImageString } from "../utilities/create-image-string";
import { randomDate } from "../utilities/random-date";
import { writeFile } from "../utilities/write-file";
import { generatePost } from "../utilities/generate-post";
import { randomIntFromInterval } from "../utilities/random-int-from-interval";
import { alternate } from "../utilities/alternate";
import { getRemoteFile } from "../utilities/get-remote-file";

export function createContent({
  numberOfAuthors,
  minArticlesPerAuthor,
  maxArticlesPerAuthor,
  basePath,
  authorImageName,
  authorImageExtention,
  authorMarkdownFilename,
  startDate,
  endDate,
  dateFormat,
  postImageName,
  postImageExtention,
  noImages,
}) {
  const authors = [];

  // create authors
  for (let i = 0; i < numberOfAuthors; i++) {
    const firstName = alternate(getMaleName, getFemaleName, i);
    const lastName = getLastName();
    const email = createUniqueEmail();

    // create content directory
    const dir = `${basePath}/authors/${firstName}-${lastName}`;
    shell.mkdir("-p", dir);

    // author frontmatter json
    const author = {
      firstName: firstName,
      lastName: lastName,
      name: `${firstName} ${lastName}`,
      email: email,
      joinedAt: randomDate(startDate, endDate, dateFormat),
      image: noImages
        ? ""
        : createImageString(authorImageName, authorImageExtention),
      summary: shortText,
    };
    authors.push(author);

    // create frontmatter from json
    const yaml = jsonToYaml(author);
    const frontmatter = `---\n${yaml}---\n\n`;

    // assemble markdown content
    const markdown = `${frontmatter}${longText}`;

    // write author markdown file
    writeFile(dir, markdown, authorMarkdownFilename, "mdx");

    // fetch author avatar
    noImages
      ? null
      : getRemoteFile(
          `https://api.multiavatar.com/${firstName} ${lastName}.png`,
          `${dir}/${authorImageName}.${authorImageExtention}`,
          function () {
            console.log(
              `Downloaded ${authorImageName}.${authorImageExtention} for ${lastName}`
            );
          }
        );

    // calculate number of articles for this author
    const rndInt = randomIntFromInterval(
      minArticlesPerAuthor,
      maxArticlesPerAuthor
    );

    // generate posts for this author
    for (let i = 0; i < rndInt; i++) {
      generatePost(
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
      );
    }
  }
}
