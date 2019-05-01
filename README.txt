# Download and Installation

* Install via yarn: yarn
* Fork, Clone, or Download on GitHub
* To run webpack: yarn run serve
* To run server: yarn run start

# Thought Process

* First thing I did was, make a Get and Post request on Insomnia to check what I get back on the response
* From there I set up my front end file and Webpack.
* I used Bulma(CSS Framework) for ease to create the webfront.
* My MVP for this exercise was to be able to display the rovers and create new
* Once the MVP is reached I implemented a simple form validation which checks if the name value on the form is empty


# Challenge

The main challenge of this exercise for me was to understand how to API works, specifically the POST request and get everything done in 4 hours. If I had more time I would focus on UI and make it look like an actual product.



Oxehealth Frontend Developer Challenge

Attached is a small nodejs expressjs server and two sketches that give an overview of a dashboard and a new rover popup.
The webserver outputs mars rover statuses, with a POST endpoint that lets you add new rovers.
Live rover statuses are output from the server using `socket.io`, new rovers can be added with `POST /add-rover/:name`

Write a web frontend which implements the sketched dashboard and pop-up.

We would recommend spending a maximum of 4 hours on the challenge. If you have a partial solution please send that through with notes to outline your remaining plan.
