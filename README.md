# React App for Koji

Preview of this project: https://www.zupimages.net/up/21/21/4ac6.png<br /><br />
This project is a technical test created for Koji (Front-End)<br />
This app get data from https://jsonplaceholder.typicode.com/posts/ and list all articles in page with possibility of view an specific article.<br />
Using react-router-dom in Single-Page.
<br /><br />My Portfolio: https://www.greeg.fr/
## How to launch app

In the first time, go to folder of project and:
<br /><br />
cd ./koji-technical-test-master<br />
npm start

## Responses of questions

<br /><b>Which library will you use to manage the state of the application?</b><br /><br />

I mainly think to redux, is interesting to manage all states of an application. It has a simple architecture and globally breaks down all the actions into specific files. So, the communication between my app and the state becomes more accessible and fluid.

<br /><b>What pages are needed?</b><br /><br />

I think eight pages are needed at least, x2 pages for authentication (Signup/Login), x1 page for the board (first page after connection (= Panel)), this page allows an admin to preview and manage all templates, and, an user to view his documents and available templates ready to completion. Again, x3 pages for admins allowing them to Add new template / Edit existing template / View template (CRUD), x2 pages for user allowing to complete and view his documents.

<br /><b>How will you arrange your navigation?</b><br /><br />

I mainly think to React-router-dom to manage all screens of my single-page application, in the first time, the user/admin is redirected on his board (after logging), a user has the possibility to check all/specifics templates from his board and complete them. On this page, we can manage all documents (and generate them) or templates (if user is admin).

<br /><b>What are the minimum API requests you will need?</b><br /><br />

I think will needed 11 requests in total.
<br /><br />
Authentication: (2) One POST request for signup, one other request (method POST) for login.<br />
Board: (2) One GET request to get all templates existing, one other to get all documents generated for an specific user.<br />
Template: 4 requests for templates management (CRUD)<br />
Documents: 3 requests for documents managements (Create, Read and Delete)

<br /><b>How will you manage the execution of api requests and their asynchronous return?</b><br /><br />

I will to create all requests of my application with Axios, it’s more efficient. All my requests will have HTTP Verbs for respect the level 2 maturity degree of my REST API (Richardson’s model). Finally, for manage my asynchronous requests and increase UX quality, I will to integrate an load-spinner during the loading time of my requests.

<br /><b>How will you manage authentication?</b><br /><br />

For manage authentication in my app, I will to sign JWT Token (back-end) after logging of my client and return it to my front-end in which I will stock it in localStorage or Redux (+1 for Redux for project using a JS library). I will to send my JWT Token every time I send a request to my API. For my admin rank, I will to stock a Boolean or RankID admin level in a front-end state variable (after client authentication) without forgetting to protect all end-points of my API.

<br /><b>Bonus: You need to implement an optional "dark" version in the application. How will you proceed ?</b><br /><br />

To implement an system of dark/light version in my web app, I will to create specifics classNames and create a new alpha-numeric variable in my state management for enable/disable dark version.
For example, if my dark version is enabled, my theme variable will have “dark” value and my className: “theme-${contrast}”. It avoids use an conditional ternary operator for many items.
