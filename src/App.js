import React from "react";
import "./styles.css";
console.clear();

export default function App() {
  function handlePet() {
    console.log("Thanks for petting me!");
  }

  return (
    <div>
      <Pet sound="Meow" icon="🐈" label="cat" onPet={handlePet} age={10} />
      <Pet sound="Wuff" icon="🐶" label="dog" onPet={handlePet} age={3} />
      <Pet
        sound="Piep"
        icon="🐭"
        label="mouse"
        onPet={handlePet}
        mouse={1}
        isHungry
      />
    </div>
  );
}

function Pet({ sound, icon, label, onPet, age, isHungry }) {
  return (
    <button onClick={onPet}>
      {isHungry ? "Feed me" : sound} Age: {age}
      <span role="img" aria-label={label}>
        {" "}
        {icon}
      </span>
    </button>
  );
}
