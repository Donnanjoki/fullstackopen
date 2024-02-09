Notes:

## cd to the file name example part1

## npm run dev - to run the application

Tool used Vite:

> . App.jsx defines a react component with the name App.
> . The command on the final line of file main.jsx renders its contents into the div-element, defined in the file index.html, having the id value 'root'.
> // ReactDOM.createRoot(document.getElementById('root')).render(<App />)

> . Note By default, the file index.html doesn't contain any HTML markup that is visible to us in the browser:
> . When using React all content that needs to be rendered is usually defined as react components.

Note:

> . First rule in frontend web development - keep the console open all the time.

> . It is possible to render Dynamic content inside a component.

> . Note the export is important hence do not remove it - if the export component is removed the whole app breaks down.

> . Although JSX looks like HTML its simply a ways to write javascript in react.

> . In the part1 example after compilation the application will look like so;

//
const App = () => {
const now = new Date()
const a = 10
const b = 20
return React.createElement(
'div',
null,
React.createElement(
'p', null,'Hello world, it is' now.toString()
),
React.createElement(
'p',null,a, ' plus ', b, ' is ', a + b
)
)
}

> . The compilation is done by Babel.

> .. JSX is much like HTML with the distinction that JSX you can easily embed dynamic content by writing appropriate JAVASCRIPT within curly braces

> . JSX is XML-like in that that every tag needs to be closed.

### Multiple Components

Note a component can be used multiple times in react.

## Convention: A core philosophy of React is composing applications from many specialized reusable components.

## Convention:the idea of root component called App at the top of the component tree of the application.

## Props: passing data to components

> . Its possible to pass data to components using props.

## ADD-ON Notes

1. The console should always be open
2. If browser reports errors, its not advisable to continue writing more code, rather assess what could be the issue.

# Note that the first letter of React must be capitalized.

# Note that the content of a React component, usually needs to contain one root element.

# Note - do not render objects - in react - the individual things rendered in braces must be primitive values such as numbers or strings.

# React also allows arrays to be rendered if the array contains values that are eligible for rendering such as numbers or strings

# Component State, Event Handlers

---

> . In Javascript defining functions within functions is a commonly-used technique.

> . Making repeated calls to the render method is not the recommended way to re-render components.

Stateful Component
##################

> . An event handler is a function.

# Passing state to child components

> . It's recommended to write React components that are small and reusable across the application and even across projects

# One best practice in React is to lift the state up in the component hierarchy. The documentation says:

# Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

Main principles of how an application works

1. When an application starts the code in App is executed
2. This code uses a useState hook to create the application state - setting the initial value of the variable counter.

3. The component contains the Display component - which displats the counter's value, 0 and three button components.
4. The buttons are all event handlers, which are used to change the state of the counter.

5. When one button is clicked, the event handler is executed
6. The event handler changes the state of the App component with the setCounter function. Calling a function that changes the state causes the component to re-render.

7. So, if a user clicks the plus button, the button's event handler changes the value of counter to 1, and the App component is re-rendered. This causes its sub-components Display and Button to also be re-rendered. Display receives the new value of the counter, 1, as props.
8. The button components receives event handlers which can be used to change the state of the counter

> . Do not ever try to guess what your code does. It is just better to use console.log and see with your own eyes what it does.

# A more complex state, debugging React apps

> . Note its forbidden in React to mutate state directly, since it can lead to unexpected side effects.
> Hence changing state has always been done by setting the state to a new object.

> . If properties from the previous state objects have not been changed, they simply need to be copied, which is done by copying those properties into a new object and setting that as the new state.

> . Even if mutating state appears to work in some cases, it can lead to problems that are very hard to debug.

# OLD REACT

> . Before the addition of hooks, there was no way to add state to functional components - is components required state they had to be defined as class components using javascript class syntax.

> . Even though functional components are the future of REACT, its still important to learn the class syntax.

## Debugging REACT APPLICATIONS

> . A large part of a typical developer's time is spent on debugging and reading existing code.
> . Hence trying to figure out how something works, and why something is broken.

> . If and when your code fails to compile and your browser lights up with errors - dont write any more code but rather find and fix the problem immediately.

> . old-school, print-based debugging is always a good idea -

# If the component is not working as intended then start printing its variables out to the console. In order for this to be effective, we must transform our function into the less compact form and receive the entire props object without destructuring it immediately.

# When using console.log also separate the things you want to log to the console with a comma rather than combining them with a plus operator (JAVA-like fashion).

# In this way the separated items will all be available in the browser console for further inspection.

# Another way to debug is using the command "debugger" anywhere in the code. The execution will pause once it arrives at a point where the debugger command gets executed:

# By going to the Console tab, it is easy to inspect the current state of variables: Once the cause of the bug is discovered you can remove the debugger command and refresh the page.

# You can also access the debugger without the debugger command by adding breakpoints in the sources tab. Inspecting the values of the component's variables can be done in the Scope-section:

# Developer tools tab can be used to inspect the different React elements in the application, along with their state and props:

## Event Handling Revisited

Note Event handlers always have to be a function or a reference to a function.
We must never mutate state directly in React.

## A function that returns a function

> . Another way to define an event handler is to use a function that returns a function.

# Do not define components within components

> . Never define components inside other components - as this provides no benefits and leads to many unpleasant problems.
> . Another issues is that REACT treats a component defined inside it as a new component in every render - hence making it impossible for REACT to optimize the component.
