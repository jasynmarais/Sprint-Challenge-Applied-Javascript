# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Tead Lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your Team Lead.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

The Document Object Model, or the “DOM”, is an interface to web pages. It is essentially an API to the page, allowing programs to read and manipulate the page’s content, structure, and styles.

2. What is an event?

DOM Events are sent to notify code of interesting things that have taken place. Each event is represented by an object which is based on the Event interface, and may have additional custom fields and/or functions used to get additional information about what happened. Events can represent everything from basic user interactions to automated notifications of things happening in the rendering model.

3. What is an event listener?

An Event Listener is a function that the browser executes when an event occurs. The event listeners are just like event handlers, except that you can assign as many event listeners as you like to a particular event on particular element.

4. Why would we convert a NodeList into an Array?

Converting a NodeList into an array allows us to gain access to the array prototype and all its methods.

5. What is a component?

A component is a function that creates a reusable portion of the document that can be isolated from your source code to be re-used on other projects.

### Git Set up

* [X] Fork the project into your GitHub user account
* [X] Clone the forked project into a directory on your machine
* [X] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [X] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [X] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

* [X] Following the instructions in the `Header/index.js` file, create the Header component. 

* [X] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

* [X] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

* [ ] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.

Jasyn Marais - WEBEU4 - 1 November 2019