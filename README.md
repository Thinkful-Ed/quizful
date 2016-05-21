#Quizful:

This project is for students to contribute to. The app will run on Openshift, and give students a place to test themselves on HTML, CSS, JavaScript, and any other questions students want to create. 

##Contributing

###Repo instructions
The master branch is the production code. All pull requests should be made to the staging branch. 
Issues should contain as much information as possible, including browser vendor, version, console logs, and a description of what you were doing when the error happend. 

###Ways to contribute
Open Bugs on the repo under issues
Suggest functionality in the issues
Add questions and answers to the questions.txt file.

###Running the project in C9
Clone the projcet to you Cloud9 environment. 
`cd` into the project folder
run `npm install`
run `chmod a+x run_mongod`
open a seperate terminal instance, and run `./run_mongod`. You should now have Mongo running. 
In your intital terminal, run the app with `nodemon server.js` 
Nodemon will automatically restart your server when you save a file in the project. 

###To-do list
add front end
add tests to the existing endpoints
add CI tests
add score endpoints
add leaderboard endpoints
add login (oAuth => GitHUb?), tie points to user
add the ability to get multiple categories
add tags for curriculum, setup so user can choose course progress and get questions up to that point
