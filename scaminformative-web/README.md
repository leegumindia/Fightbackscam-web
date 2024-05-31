### Add details & Instructions on the part you develop below this line.

### Also don't forget to use git fetch regularly and whenever you push updates as well.

## Getting Started with Development

1. clone the repo
2. Run `npm install` to install all dependencies
3. Run `npm start` and check the webpage is compiling and working fine
4. Cut a feature branch, Run `git checkout -b featureBranchName` [Also remember to use `camelCase`]
5. Make all your changes in the new branch, test it out and `push`
6. Create a pull request to master & merge

## After you have made a Commit, then you made a few changes and they're not supposed to a different commit

1. Run `git commit --amend `
2. Vim editor will open up, if you don't want to change the existing commit message then just press `Esc + :` then type `wq` and press `enter`

## To merge the changes of remote branch into your local working copy to avoid conflics later

1. Commit your changes
2. Run `git pull --rebase` and DONE.
3. In case of any conflicts, resolve them and then `git rebase --continue`

## Updating Hosted website via github pages

1. Install gh-pages with this command "npm install gh-pages --save-dev"
2. Run "npm run deploy"
3. CAUTION: Go to [https://github.com/leegumindia/Fightbackscam-web/settings/pages](https://github.com/leegumindia/Fightbackscam-web/settings/pages) and update custom domain name to "fightbackscams.com" and click save. After you click save the CNAME file will be auto generating containing fightbackscams.com and the website will be live.

## First Time Hosting using github pages

The official documentation states to add homepage parameter in package.json, but don't add when using custom domain.
"homepage": "https://leegumindia.github.io/Fightbackscam-web/",

So if we add this then hosting on this(https://leegumindia.github.io/Fightbackscam-web/) url will work fine but connecting it to custom domain(fightbackscams.com) will show a blank page.
If we don't add this then vice-versa behaviour.

---

## Default React Readme Below

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
