Portfolio assignments Webtech2 2016
===================================

This repositry is dedicated to the course webtech2 of within the program of Interactive multimedia design at Thomas More.

We had 6 assignments and a [Final project](https://github.com/Maiteh/QnA). 5 of them you can find in this repositry. 
The first assignment was a groups task an can be found [here](https://github.com/tscholberg/webtech2)

It could be that it's necessary to switch branches to see a certain assignment.

Everything is being developed on the developement branch, which consists of a few subbranches for each lab.


----------

### Lab1 - Learning to work with GIT
#### What we've learned.
In the first week we learned how to work with GIT. 
Once you get the hang of how it works it becomes a routine and is very usefull.
There are some things you need to take in consideration when working with git. 

 - Always keep your `master` branch clean. This branch can only contain code that is ready to be published online.
 - Always commit small pieces, every little part that works or doesn't crash, commit it to your feature branch so you won't lose it.
 - Ofcourse, don't forget to push atleast at the end of the day.
 - Give a logical name to your branch. Don't use your own name.

> **Good example**
> 
>  - `Master`
>   - `Develop`
>      - `Feature1`
>      - `Feature2`

![github branches](https://www.atlassian.com/pt/git/workflows/pageSections/00/contentFullWidth/0/tabs/02/pageSections/06/contentFullWidth/0/content_files/file0/document/git-workflow-release-cycle-2feature.png)

We've learned to work with command lines for git but over time I've started to work with *sourcetree* which makes working with even easier and faster.

#### Assignment
For ***LAB1*** we had to do 2 things.

 1. Work in paires of 3 and commit a recipe of choise to your branch.  Then push it in the master. This assignment can be found in the [repositry](https://github.com/tscholberg/webtech2) of [Thierry Scholberg](https://github.com/tscholberg).
 2. Add a link of your own portfolio repositry and the repositry of LAB1 to this [repositry](https://github.com/iamgoodbytes/2imd-webtech2-labs) with a pull request.

----------
### LAB2 - Flexbox
#### What we've learned.
In the second week we've learned to work with flexbox.
A new css technique that replaces `float`.
When using it in the beginning you need to keep the wits on where you declare your `flex` statement.

The `display: flex;` should always be used on the parent item.

>**Example**: When you have an `ul` with 3 `li` items with each an image in them, and you want them to float next to each other, you use `display: flex;` in your `ul`. This way the `li` items will float nex to each other. 

To learn how to work with flexbox we had a fun not required assignment, [Flexbox froggy](http://flexboxfroggy.com). 
This is a fun excersize to get familiar with flexbox.
These are screenshots of the finished excersize: 
![final excersize froggy](https://i.gyazo.com/d712d0debcb827111e6e0a797955c7d3.png)
![completed](https://i.gyazo.com/d026a892463f23c1d938a36421bf9a98.png)
#### Assignment
[Here](https://github.com/Maiteh/Webtech2-2016/tree/master/LAB2%20-%20Flexbox) you can find the 2 exercises of LAB2.
There were 2 exercises. Both the same yet a bit different. 
Just to test and learn how to work with flexbox.

----------
### LAB3 - Advanced Javascript
#### What we've learned
The 3th week we got some advanced lessons of Javascript. 
Simple javascript was never really my strong suite... Advanced javascript even less. 
My brain understands the logic's of Php, Java, AS and such very well but there is something about JS that just won't get in.

We learned how to make our own little framework and create prototypes.

#### Assignement
For LAB 3 we had to create a todo list where you can add items and check them as done. You can find this assignment [here.](https://github.com/Maiteh/Webtech2-2016/tree/master/LAB3%20-%20Advanced%20JS)

----------
### LAB4 - intro Node.js
This is where the fun part starts ... 
#### What we've learned.
This lesson started with a guest lesson of District01.
They introduced us to node.js , what it is , how it works and how to get started.
The next week this lesson was repeated during class.

> **Important packages to remember!**

> - Express.js  -> Base to start working with a node server
> - Mongoose -> Used to connect your node.js app with a mongoDB server. 

Node.js is specially handy with apps that require live data.

####Assignment
This weeks assignment was to complete the next part of the exercise we were making during the guest lesson. You can find the assignment 
[here.](https://github.com/Maiteh/Webtech2-2016/tree/master/LAB4%20-%20Intro%20Node%20js)

----------
### LAB5 - Socket.io
####What we've learned.
Socket.io is the package of node.js that is used to stream live data from client to server and from server to client. 
This package will be needed to be implemented in our final assignment.
#### The assignment
[This assignment](https://github.com/Maiteh/Webtech2-2016/tree/lab5/LAB5%20-%20Sockets%20) is currently stated in the lab5 branch of the repo.
We had to create sort of a mood button, when clicked on the mood, the circle representing that mood will grow, live without refreshing on your screen and on the screen of someone else using the app at that moment.

----------
###LAB6 - API
####What we've learned.
Using javascript we've learned how to use API's with the example of the forcast.io.
We've created a little simple weather app.
####Assignment
Using the example we made we needed to create a weather [app that shows the weather of a few days](https://github.com/Maiteh/Webtech2-2016/tree/master/LAB6%20-%20weerapp).
For this exercise I didn't only use the api of forecast, but also the api of Flickr to implement a picture on the background linked to your current location.

----------
### Aditional Assignment - MongoDB University 
#### ***Not required***
As an extra assignment I took the *MongoDB university course for node developers*.
This course ended on May the 10th. 
I will post my final assignment to this repositry a few days after the course ended.
But until then, here is a screenshot of my final scoure of this course.
![Final score mongodb university nodejs](https://i.gyazo.com/74445a7713f964636e002b3a1edcd138.png)

----------
###Final Project
IMD Q&A App
===================

This is a Live Q&A app made as a final project for the course Webtechnologie2 2016 of Thomas More.

With the usage of Express.js, Node.js, Socket.io and MongoDB.

At the moment everything is still on the "developement" branch since it's not ready to be published yet.

###  Installing
download the developement branch and install the modules with 
>npm install

Then you can run the app with
> node index.js

The app will be running on *localhost:3000*.

----------
###  What do we have so far
When surfing to localhost:3000 you'll get a login screen where you can choose a login name and password.
Then you'll enter the main room where you can start chatting.

----------

