# augmented-browsing

Scripts that improve the usability of various websites.

* [Gitlab - adds a link to your personal projects](https://github.com/adrianjuhl/augmented-browsing/raw/master/gitlab.user.js)
* [Openshift - adds filtering to the pipelines page](https://github.com/adrianjuhl/augmented-browsing/raw/master/openshift.user.js)

## Installing a script in Tampermonkey
To install the script in the browser:
* Browse to the augmented-browsing repo and choose the master branch
* Click on the *.user.js file
* Click on the 'Open Raw' button (the above links point to the raw file)
* Click on the 'Install button' in the Tampermonkey page

## Development of scripts

### Updating a script
* Checkout master branch: git checkout master
* Implement new functionality in the *.user.js file
* Increment the @version attribute in both the *.user.js and the *.meta.js files (must match)
* Commit and push
* Go to the TamperMonkey settings page in the browser and update the script (click in the 'Last updated' column of the script row)

### Creating a new script
* Create a new branch off of master for the development of the new script
* Create a new *.user.js script file. The @updateURL and @downloadURL need to (initially refer to the new branch)
* Copy the UserScript header to a new *.meta.js file
* Install the script in Tampermonkey from the new branch (as above but browse the new development branch)
* Continue to develop the script on the new branch:
    * Update the implementation in the .user.js file
    * Increment the @version attribute in both the *.user.js and the *.meta.js files (must match)
    * Update Tampermonkey with the new implementation by clicking in the 'Last updated' column
    * Repeat the above development steps until development is complete
* When development is complete, the branch can be merged (after squashing if desired) to the master branch:
    * Replace the development branch name with 'master' in both the @updateURL and @downloadURL attributes in both the *.user.js and *.meta.js files
    * Commit and push
    * Squash the development branch if desired
    * Merge branch to master
    * Delete the script from Tampermonkey (as it was pointing to the new development branch)
    * Install the script in Tampermonkey from the master branch

# License

MIT

# Author

[Adrian Juhl](http://github.com/adrianjuhl)

# Source Code

[https://github.com/adrianjuhl/augmented-browsing](https://github.com/adrianjuhl/augmented-browsing)
