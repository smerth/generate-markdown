## NPM Package Template - Usage

- [ ] Click on template to generate a new repository from this template repository.


Clone the new repo

```bash
git clone new-repo
```

Add a token to enable publishing a package to Github.  The token must be named`GH_TOKEN` and give permission to read and write packages

Run setup to install dependancies and run the validate script

```bash
npm run setup
```

Edit description and tags on the github repo page

Edit package json file

- make sure to set the version

Delete the contents of the changelog

Edit `.npmrc` to use your own github user name

Generate a readme file to replace the existing one

```bash
readme
```

Commit to run tests and commit to git

```bash
npm run commit
```

Push to github. This triggers the workflow to make a release and publish the first package.

```bash
npm run push
```

Don't forget to pull after publishing as the workflow updates the `changelog.md` and `package.json` files

Now your ready to look into src and replace the functions and tests with your own.

