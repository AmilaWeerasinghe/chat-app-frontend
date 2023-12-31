# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### We use Socket.io

Unlike waiting for a request comes and ask for a response, in REST apis we use Socket.io for real time data transfer.
Why we can't use REST apis?
If we use REST then to know that some change has happened in the server, client (front-end) will have to send a HTTP request and based on the response from the server it can decide on the event happening or not. (This is a polling mechanism) .To make the efficeint we need to do polling everytime within very short time like 5 seconds , which is very costly. Instead of the we can use socket.io to let know client whenever a change has occured in the server in real time.

WHy can't we use socket io instead of REST everywhere?
Since this real time features are enabled, when there are multiple connections created from clients to the server, it will overload the server eventually. Hence if we need to perform some operations like CRUD operations when there is only an event has occured we can use REST instead of sockets.

### Use pattern of lifting state up
involves passing down state as props to the child component(home component) and then allowing the child component to modify that state through callback functions passed as props from the parent (App component).

### lifting state up requires the change of child props interface type because i am using typescript now

### How to track what is input by user? I am using onChange event in react
Onchange event triggers for any keyboard input press, therefore we can validate any input realtime as well.
We can use onchange in react input(Text input) and select(Dropdowns) elements

### After getting valid userName and room we need to send out the socket emmitter.
// Emit a custom event to the server
socket.emit('customEvent', { message: 'Hello from the client!' });
The data you send as the second argument can be of any valid JavaScript data type, including arrays, objects, strings, numbers, booleans, etc.

### To navigate i am using react-dom navigator
navigate('/chat', { replace: true });
replace true to clear the history.

### Chat page
All code in one page will make it complex
Use components divided to make it simplified.

A: Contains the room name, a list of users in that room, and a "Leave" button that removes the user from the room.

B: The sent messages. Upon initial render, the last 100 messages sent in that room will be fetched from the database and shown to the user.

C: An input and button to type and send a message.


