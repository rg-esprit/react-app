import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const items = ["Tunis", "Sfax", "Sousse", "Ariana", "Hammamet"];
  const countries = ["Tunisia", "France", "Germany", "Italy", "Spain"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [Opened, setOpened] = useState(0);
  const handleButtonClicked = (command: string) => {
    if (command === "open") {
      setOpened(1);
    } else if (command === "close") {
      setOpened(0);
    }
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={countries}
        heading={"Countries"}
        onSelectItem={handleSelectItem}
      />
      {Opened === 1 && (
        <Alert onButtonClicked={handleButtonClicked}>Hello Raslen!</Alert>
      )}
      <Button onButtonClicked={handleButtonClicked}>Click me</Button>
    </div>
  );
}

export default App;
