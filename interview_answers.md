# Interview answers

1. The core features of Node.js and Express and why they are useful.

Node.js allows for communication with clients, using JSON format, we gave exchange data.
Express is build on top of Node.js. It's core feature is the use of middleware, which is used to intercept the request and response objects
before sending a response.

2. Understand and explain the use of Middleware.

There are 3 types of middleware: built-in, 3rd-party, and custom. 
Middleware can be used globally, on a set of routes, and locally to a specific route. Middleware intercepts 
the request and response objects before sending the response back to the client. This is useful for validating a request body, validating 
that a resource exists, manipulating the request body, or even error handling.

3. The basic principles of the REST architectural style.

The basic principles of a REST are:
- everything is a resource
- every resource has a unique uri
- resources can have more than 1 representation
- resources are managed via HTTP methods
- stateless protocol (HTTP)

4. Understand and explain the use of Express Routers.

Express router maps incoming requests from clients to the appropriate path. It allows for separation of concerns when routing different resources. 
Instead of using the exact path express router appends the a shorter path to the full path. Example, `/api/users/:id` becomes simply `/:id`


5. Describe tooling used to manually test the correctness of an API.

Error handling middleware can be used to test the correctness of an API.
We can test for required values in the request object.
