# Download and Installation

* Fork, Clone, on github
* Install packages: yarn
* To run webpack: yarn run serve
* To run server: yarn run start

# Technologies used

* React
* SASS/bulma
* Webpack
* Yarn

#Instructions

Attached is a small nodejs expressjs server and two sketches that give an overview of a dashboard and a new rover popup. The webserver outputs mars rover statuses, with a POST endpoint that lets you add new rovers.
Live rover statuses are output from the server using `socket.io`, new rovers can be added with `POST /add-rover/:name`

Write a web frontend which implements the sketched dashboard and pop-up.

# Approach

* First thing I did was, make a Get and Post request on Insomnia to visualise what the response
* From there I set up my front end files and Webpack.
* I used Bulma(CSS Framework) for ease to create the webfront.
* My MVP for this exercise was to be able to display and create new rovers
* Once I had reached MVP, I implemented a simple form validation, which checks if the name value on the form is empty


# Challenges

The main challenge of this exercise for me was to understand how to API works, specifically the POST request and get everything done in 4 hours. If I had more time, I would focus on UI and make it look like an actual product.
<<<<<<< HEAD:README.md
=======


#Instructions

Attached is a small nodejs expressjs server and two sketches that give an overview of a dashboard and a new rover popup.
The webserver outputs mars rover statuses, with a POST endpoint that lets you add new rovers.
Live rover statuses are output from the server using `socket.io`, new rovers can be added with `POST /add-rover/:name`

Write a web frontend which implements the sketched dashboard and pop-up.

>>>>>>> 42273597409496dc5e96713d1f9eb258181da70b:README.txt
