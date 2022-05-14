import React from "react";

function App() {

  const [theNumber, setTheNumber] = React.useState(0);
  const animationReference = React.useRef();
  const previousTimeReference = React.useRef();

  const gameLoop = (time) => {
    if (previousTimeReference.current !== undefined) {
      let deltaTime = time - previousTimeReference.current;
      setTheNumber((previousNumber) => (previousNumber + deltaTime * 0.001) % 100);
    }
    previousTimeReference.current = time;
    animationReference.current = requestAnimationFrame(gameLoop);
  }

  React.useEffect(() => {
    animationReference.current = requestAnimationFrame(gameLoop);
    return () => {
      cancelAnimationFrame(animationReference.current);
    }
  }, []);

  return (
    <div className="gameContainer">
      <h1>A Counting Game</h1>
      <div className="theNumber">{Math.round(theNumber)}</div>
    </div>
  )
}

export default App;
