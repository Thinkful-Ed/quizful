[![Build Status](https://travis-ci.org/aric87/tuneful.png)](https://travis-ci.org/thinkful-ed/quizful)
#Quizful:

This project is for students to have a way of testing themselves on the various topics they are learning. 
The app will run on Openshift, and give students a place to test themselves on HTML, CSS, JavaScript, and any other topics students want to create questions for 
It will also be a student driven project, and allow for students to get into the workflow of contributing to open source work.

###Repo instructions
The `master` branch is the production code. All pull requests should be made to the `staging` branch. 
Issues should contain as much information as possible, including browser vendor, version, console logs, and a description of what you were doing when the error happend. 

##Contributing

###Ways to contribute
####Without setting up, and running the project:
- Open [new](https://github.com/Thinkful-Ed/quizful/issues/new) Bugs, or add comments to the existing [issues](https://github.com/thinkful-ed/quizful/issues)
- Suggest [new](https://github.com/Thinkful-Ed/quizful/issues/new) functionality in the issues
- Add questions and answers:

######Adding Questions
If you have questions and answers to add, add them to config/seed.js file. Follow the structure of the questions that are there. 
If you have a question, but not the answers or you're not confident you have the correct answer, add it to questions.txt and someone will fill in the missing data. 
If you have the answer to one of the questions in questions.txt, remove it from that file, and add all the data to config/seed.js.

####Running the project, and contributing code:
See the [issues](https://github.com/thinkful-ed/quizful/issues) for feature requests, and code problems. Each issue is tagged, so you can find things that are within your interest range.
###Simple Instructions to run the project (for working on the front end)
- Go to [Cloud9](https://c9.io) and create an account if you don't already have one
- Create a new workspace.  
    - The workspace name can be whatever you want. 
    -  add the clone URL from the repo to the `clone URL` field
    -  Change the workspace type to `Node`
- `cd` into the project folder (the folder is named whatever you name the project)
- Run the setup step // TODO
- Your project is now running.
- Nodemon will automatically restart your server when you save a file in the project. 
- When you leave the project, and come back, type `COMMAND TO RUN PROJECT` to open the DB connection and start the server again


###Advanced instructions for running the project outside C9
- run `npm install`
- Open a connection to your Mongo instance (You may need to create a Mongo_data folder)
- In your intital terminal, run the app with `nodemon server.js` 


###To-do list: See issues for full to-do list
- add front end
- add tests to the existing endpoints
- add CI tests
- add score endpoints
- add leaderboard endpoints
- add login (oAuth => GitHUb?), tie points to user
- add the ability to get multiple categories
- add tags for curriculum, setup so user can choose course progress and get questions up to that point
