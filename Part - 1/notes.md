Notes:

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
