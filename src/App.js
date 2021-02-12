import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header><img id="logo" src="https://upload.wikimedia.org/wikipedia/en/a/a2/National_Football_League_logo.svg" alt="nfl-logo"></img><text>NFL Team Memory Card Game</text></header>
      <div className="subheader">
        <div className="instructions">Get points by clicking on different logo each time... max score is 32!</div>
        <Game></Game>
      </div>
    </div>
  );
};

export default App;
