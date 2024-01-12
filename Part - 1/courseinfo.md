Here I'll break down how i solved the courseinfo problem..,

## 1. Disable Linter Rule

eslint-disable no-unused-vars - this temporarily disables the linter rule that warns of unused variables. In this particular code it is utilized to prevent warnings about the imported React library if its not utilized in the component.

## 2. Importing React

import React from "react";

This imports the React Library, which is essential for creating React Components using JSX syntax.

## 3. App Component:

const App = () => {..} this defines a functional component that is App, which acts as the main component that renders the overall structure of the application.

## 4. Data in the App components:

a] const course = "" - this stores the name of the course as a string variable
b] const parts = [] - this defines an array of objects, each representing a part of the course with its title and number of exercises.
c] const totalExercises = parts.reduce(...) - This calculates the total number of exercises across all parts using the reduce method.

## 5. JSX in App component

return (...) this returns the JSX code that defines the UI structure of the component. It includes; >> a div element as the main container >> Three child components: Header, Content and total each rendering a specific part of the UI. >> Props are passed to these components to provide them with data.

## 6. Child Components.

Header: Displays the course name in an h1 heading
Content: Renders a list of course parts with their titles and exercises using the map function to the map function to iterate over the parts array.
Total - displays the total number of exercises in the footer.

## 7. Export statement: export default App

]] This makes the App component the default export of the file, allowing it to be imported and used in other parts of the application.
