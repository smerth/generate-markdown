# NPM Package Template - Workflow



write new code

run build

run tests

repeat

yarn commit

git tag

yarn push

git push tags

~~npm publish~~

This will draft a new release in the repository, but it won't run the workflow yet. Go to your GitHub repository page and navigate to the releases section. You'll see the tag you just pushed at the top of the list.

Click on the tag, then click the "Edit tag" button. Enter some details about the release, then click the green "Publish release" button. Once the release is published, the package publishing workflow should begin. To verify this, go to the "Actions" tab of your repository. You should see the "Node.js Package" workflow running.

