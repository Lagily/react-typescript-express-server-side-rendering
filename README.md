React App with Server Side Rendering support. The server is an Express server and the frontend is a react TypeScript project.

Run npm start to start the frontend only.
Run npm run stat:ssr to start the backend, which serves the bundled frontend from the build directory. (First run npm run build for this to work)


Serverside Rendering:

- Point is to do the first render on the server, this makes the first contentful paint faster
- We need to use ReactDOM.hydrate on the client, instead of ReactDOM.render, because it hydrates an already server side rendered DOM element
- But ReactDOM.hydrate can also be used on the clientside, without serverside rendering, this means that we can simply start the client without having a server (e.g in development)
- 