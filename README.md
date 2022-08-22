# @smerth/generate-markdown 

> This package exports `createContent` and `deleteContent` functions which take an options object and generate/delete Author and Post markdown files based on those options.
> This may be usefull when you are developing a markdown based application.




## Use in an application

### 1. Install the package

Install from the command line:
```bash
$ npm install @smerth/generate-markdown@1.1.1
```
Install via package.json:
```json
"@smerth/generate-markdown": "1.1.1" 
```

### 2. Create a file to execute the `generate` function

@ utilities/generate.js

require the functions

```javascript
const { createContent, deleteContent } = require("@smerth/generate-markdown");

const options = {
  numberOfAuthors: 4,
  minArticlesPerAuthor: 3,
  maxArticlesPerAuthor: 6,
  basePath: "content/news-of-the-world",
  authorImageName: "headshot",
  authorImageExtention: "png",
  authorMarkdownFilename: "bio",
  startDate: new Date(2020, 0, 1),
  endDate: new Date(),
  dateFormat: "yyyy-MM-dd",
  postImageName: "post-image",
  postImageExtention: "png",
  // noImages: true,
};

deleteContent(options.basePath);
createContent(options);
```
### 3. Run the generate function
Add a script to your application's package.json file

```json
"demo": "npm run utilities/generate.js"
```






## Develop this package

### 1. Setup

- clone the repo
- install dependancies and run validate

```bash
npm run setup
```

### 2. Generate some dummy markdown files

`@ options/options.js` contains the settings for generating some dummy markdown files these options can be adjusted according to your needs.

- `npm run generate` - to generate files
- `npm run delete` - to delete the content folder

### 3. Develop

To develop you can run `npm run start` or `npm run test:watch` to run tests as you develop.  You can define a test, which will fail until you write the code to pass the test.

### 4. Commit and push code

To commit your code run `npm run commit`.  When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time.

### 5. Publish Package

This repo is set up with a GitHub action to publish packages.  

- When a PULL_REQUEST is merged with the `main` branch a `@latest` version of the package is built and published.
- When a PULL_REQUEST is merged with the `next` branch a `@next` version of the package is built and published.



## Author

👤 **Stephen Merth <stephen.merth@gmail.com> (https://smerth.github.io/)**

- Website: http://smerth.github.io
- Github: [@smerth](https://github.com/smerth)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Stephen Merth <stephen.merth@gmail.com> (https://smerth.github.io/)](https://github.com/smerth).

This project is [MIT](https://github.com/smerth/npm-module-template/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
