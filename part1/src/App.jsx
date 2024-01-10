const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Frank";
  const age = 10;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Okari" age={28 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};
export default App;
