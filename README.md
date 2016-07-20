[![Build Status](https://travis-ci.org/aric87/quizful.svg)](https://travis-ci.org/Thinkful-Ed/quizful)
#Quizful:
Quizful is an app for students to test their knowledge of programming technologies, languages, and concepts.
This project is open source, for students to have a way of understanding the open source process, as well as the GitHub workflow, while contributing to an app that they can use to better learn programming.
The app will run on Openshift, and give students a place to test themselves on HTML, CSS, JavaScript, and any other topics students want to create questions for
It will also be a student driven project, and allow for students to get into the workflow of contributing to open source work.

###Getting Started
#### The Repo
The `master` branch of the main repo is the production code, and you should not make pull requests to it. All pull requests should be made to the `staging` branch on the main repo.
To start working on the code, or add questions, you should fork this repo to your own GitHub account. Make changes to your version of hte project, then make a pull request to the `staging` branch of the main repo.

#### Opening Issues
Issues are used for both bugs and features. When you open a bug, be sure to include as much information as possible, including any console errors, the browser you were using, and the actions you took to create the bug.
If you are submitting a feature, you should include as many details about your idea as you can.
You will notice that the existing issues have tags. Tags are a useful way to sort issues, and feel free to add tags that make sense (feature request or bug). The project admin will add tags as needed, so feel free to skip this step.

#### Making a Pull Request
When your code is ready to be merged into the main repo, you should commit it, push it to _your_ forked repo and make a pull request on GitHub. You can work on whatever branch of _your_ repo you like, and choose that branch in the pull request menu in the "compare" dropdown. The thinkful-ed/quizful staging branch should be the "base".
When you make a pull request, make sure that you have the most recent code _from_ the main repo merged into _your_ repo to avoid merge conflicts. (see [staying up to date](#staying-up-to-date).
Make sure that the tests pass! (Run `npm run test`). If you're unsure of why their failing, ask someone.
If you make a pull request, and GitHub tells you that it cannot be automatically merged, that means there is a conflict. You should handle any conflicts at that time. If you have questions, reach out to any of the folks listed in the contact info section.
Once your pull request is submitted, and you know there are no conflicts, you will get a review on that pull request. Either a thumbs up, saying everything is ok or notes on things that should be edited before the pull request is merged. At that time, you can make the edits, push the code to _your_ repo on the same branch the pull request is _from_ and the code will automatically be included in the pull request.
Once your code is approved, it will be merged.

##Contributing

###Ways to contribute
####Without setting up, and running the project:
- Open [new](https://github.com/Thinkful-Ed/quizful/issues/new) Bugs, or add comments to the existing [issues](https://github.com/thinkful-ed/quizful/issues)
- Suggest [new](https://github.com/Thinkful-Ed/quizful/issues/new) functionality in the issues
- Add questions and answers:

#####Adding Questions
If you have questions and answers to add, add them to config/seed.js file. Follow the structure of the questions that are there.
If you have a question, but not the answers or you're not confident you have the correct answer, add it to questions.txt and someone will fill in the missing data.
If you have the answer to one of the questions in questions.txt, remove it from that file, and add all the data to config/seed.js.

####Running the project, and contributing code:
See the [issues](https://github.com/thinkful-ed/quizful/issues) for feature requests, and code problems. Each issue is tagged, so you can find things that are within your interest range.

###Starting the project in C9
- Go to [Cloud9](https://c9.io) and create an account if you don't already have one
- Create a new workspace.  
    - The workspace name can be whatever you want.
    -  add the clone URL from _your_ repo to the `clone URL` field
    -  Change the workspace type to `Node`
- add a remote link to the project `git remote add upstream https://github.com/Thinkful-Ed/quizful.git`
- Change the version of Node to 5.5. `nvm install 5.5 && nvm alias default v5.5.0 `
- Run the setup step by typing `npm run easy_start` in the terminal
- Your project is now setup and running. You can start working on it.
- To stop the server, you can use `ctrl+c` as you will see noted in the console.
- When you come back to work on the project, use the `run` command below.

###Run the project
Once you start the project, you don't _need_ to start it again.
You can use the `npm run easy_run` command instead.

###Running the tests
To run the tests, go to the terminal and use `npm run test --silent`. If something fails, you'll see the output in the command line. If everything passes, you're good to go!

###Staying up to date
Make sure you are keeping your code up to date.
Each time you start, you should `git pull upstream staging` to get the latest code from the staging branch.
If you have any conflicts, the command line will tell you where they are. Be sure to fix those before continuing.
If there are a bunch of changes when you pull the code, then run `npm run easy_start` again to install any new dependencies and rebuild the database.

###Project Admins
If you have questions, you should get in touch with these people for help
[Aric Johnson](https://github.com/aric87) [email](mailto:aric@thinkful.com)


###Contributors
Once you made your first contribution (pull request, or opening an issue), add your name here!!
[Ryan Lynch](https://github.com/shiftyp)
[Simon Attfield](https://github.com/OoogleBoogle)

###Screenshots
![Login Page](screenshots/login-page.png?raw=true "Login Page")
