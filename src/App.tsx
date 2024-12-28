import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Tunis", "Sfax", "Sousse", "Ariana", "Hammamet"];
  const countries = ["Tunisia", "France", "Germany", "Italy", "Spain"];
  const handleSelectItem = (item: string) => {
    console.log(item);
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
    </div>
  );
}

export default App;
