/*
Source: https://fullstackopen.com/en/part0/fundamentals_of_web_apps

PART 0: INTRO TO WEB DEVELOPMENT

### First rule of web development ###

>.Always keep the Developer Console Open on your web browser.


### Hypertext Transfer Protocol(HTTP) GET ###

>. The server and the web browser communicate with each other using the HTTP protocol.
The network tab shows how the browser and server communicate. 

>. HTTP is a stateless protocol, meaning the server does not keep any data(state) between two requests.

>.So when a page is open, the following chain of events occurs.
      1]] First, the browser sends a HTTP GET request to the server to fetch the HTML code of the page.
      2]] If there is an image in the page, the img tag in the html prompts the browser to fetch the image
      3]] The browser then renders the HTML page and the image on the screen
      4]] Note, the HTML page begins to render before the image has been fetched from the server


### Traditional Web Applications ###

>. In traditional web applications, the browser is dubbed "dumb". It only fetchesHTML data from the server and all the application
logic is on the server. A server can be created using JavaSpring, Python Flask or Ruby on Rails.


### Event handlers and Callback functions ###

>. Event handler functions are called callback functions. The application does not invoke the function itself, but the runtime environment,
the browser, invokes the function at the appropriate time when the event has occurred.


### Document Object Model or DOM ###

>. The functioning of the browser is based on the idea of depicting HTML elements as a tree.
>. Document Object Model (DOM) is an Application Programming Interface (API) which enables programmatic modification of the element trees corresponding
to web pages.

### Loading a page containing Javascript ### 

      1]] The browser fetches the HTML code defining the content and the structure of the page from the server using an HTTP GET request.
      2]] Links in the HTML code cause the browser to also fetch the CSS style sheet main.css
      3]] and the Javascript code file main.js
      4]] The browser executes the JS code. The code makes an HTTP GET request to the address, which then returns the notes as JSON data.
      5]] When the data has been fetched, the browser executes an event handler, which render s the notes to the page using DOM-API



### AJAX ###

>. AJAX(Asynchronous Javascript and XML) was introduced as a revolutionary approach that enabled the fetching of content to web pages using Javascript included within the HTML,
without the need to rerender the page.

### Single-page App ###

>. Single-page applications do not fetch all their pages separately from the server, instead they compromise only of one HTML page fetched from the server, the content of which are manipulated with 
javascript that executes in the browser.


### Javascript Libraries ### 

>.Instead of using JavaScript and the DOM-API only, different libraries containing tools that are easier to work with compared to the DOM-API are often used to manipulate pages.
 One of these libraries is the ever-so-popular jQuery.
>. One of the reasons for the success of jQuery was its so-called cross-browser compatibility.
 The library worked regardless of the browser or the company that made it, so there was no need for browser-specific solutions. 
 Nowadays using jQuery is not as justified given the advancement of JavaScript, and the most popular browsers generally support basic functionalities well.

>. The rise of single-page app brought about "modern" ways of web development such as AngularJS - which became the defacto standard of modern web development.

>. Currently the most popular tool for implementing the browser-side of web applications is Facebook's React library.

### Fullstack Web Development ###

>. We can therefore think of the architecture of a web application as a stack of layers; there's the frontend layer and the backend layer also the database layer.
>.  The browser is the frontend, and JavaScript that runs on the browser is frontend code. The server on the other hand is the backend.
>. Also, full-stack developers must also have enough configuration and administration skills to operate their applications, for example, in the cloud.


### Javascript Fatigue ###

>. Note: Javascript does not always work like you expect it to (in comparison to other languages), and the asynchronous way,
its runtime environment works causes all sorts of challenges.

>. Communicating on the web requires knowledge of the HTTP protocol. One must handle databases and server administration and configuration.
>. With constant changes cropping up, the influx of tools and libraries within JS, coined as JS Fatigues makes some tired of the constant change.

>. JS fatigue is often linked with analysis paralysis (also called choice paralysis). JS analysis paralysis can occur because of the huge range of options 
when selecting a framework, tooling, testing suites, and more for a new application

>. How to manage JS Fatigue

source: https://auth0.com/blog/how-to-manage-javascript-fatigue/
     1]] Pick your battles: its good to be aware of the sea of technologies, but not to drown in it.
         >. When something pops us , first asses whether it answers the following:
              a]] What is its primary purpose?
              b]] Is it popular enough to have a stable, browsing community and easily accessible support? <who is behind it? who is using it?>
              c]] Does it solve a problem I frequently run into with my current tools?

      2]] Make something Interesting/Useful
      3]] Be aware of common concepts
           >. Knowing about common dependencies makes different frameworks feel more similar.    
      4]] Learn Iteratively
      >. Don't be afraid to use tools if they help: Getting off the ground quickly allows you to focus on learning the core features and avoid getting discouraged by difficult setup.


*/
