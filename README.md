# Welcome to @smerth/npm-module-template 👋

> A starting point for developing javascript modules

### 🏠 [Homepage](https://github.com/smerth/npm-module-template#readme)

## Setup

- [ ] Click on template to generate a new repository from this template repository.

- [ ] Clone the new repo

```bash
git clone new-repo
```

- [ ] Add a token to enable publishing a package to Github. The token must be named `GH_TOKEN` and grant permission to read and write packages

- [ ] Run setup to install dependancies and run the validate script

```bash
npm run setup
```

- [ ] Edit description and tags on the github repository page. This data is used to gernerate the README.md file

- [ ] Edit package json file. This data is used to gernerate the README.md file and of course to publish the package.

  - make sure to set the version back to `v1.0.0` or whatever is appropriate as a starting point

- [ ] Delete the contents of the changelog.  This will be auto appended by the Github workflow.

- [ ] Edit `.npmrc` to use your own github user name

- [ ] Generate a readme file to replace the existing one

```bash
readme
```

- [ ] Commit your changes

```bash
npm run commit
```

- [ ] Push to github. This triggers the workflow to tag a release and publish the first package.

```bash
npm run push
```


> Don't forget to pull after publishing as the workflow updates the `changelog.md` and `package.json` files


Now your ready to look into src and replace the functions and tests with your own.

## Develop

```sh
npm run start
```

## Run tests

```sh
npm run test
```

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
