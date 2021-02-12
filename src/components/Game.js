import {React, useState} from 'react';
import Card from './Card';
import teams from '../teams.json';

const Game = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [teamsArr, setTeamsArr] = useState([]);
    const [newTeams, setNewTeams] = useState(teams);
    const [gameOver, setGameOver] = useState(false);

    const incrementScore = () => {
        if (currentScore === 32) // win at 32
        {
            alert('You won!');
            setGameOver(true);
            handleHighScore();
        }
        else 
        {
            setCurrentScore(currentScore+1);
        }
        console.log(currentScore)
    }

    const addToTeamsArr = (id) => {
        setTeamsArr((prevArr) => [...prevArr, id])
        console.log(teamsArr);
    }

    const reset = () => {
        setCurrentScore(0);
        setGameOver(false);
        setTeamsArr([]);
        console.log(teams)
        setNewTeams(teams.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)));
    };

    const handleHighScore = () => {
        if (currentScore >= highScore) {
            setHighScore(currentScore)
        }
    };
    

    const handleGameLogic = (id) => {
        
        if (!teamsArr.includes(id) && !gameOver) 
        {
            addToTeamsArr(id);
            incrementScore();
            console.log(currentScore+1)
           if (currentScore <= 31) {
                setNewTeams(shuffleArray(newTeams));
           }
        } else {
            handleHighScore();
            reset();
        }
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    return(
        gameOver ?
        <div>
          <div className="scores">Current Score: {currentScore} High Score: {highScore}Max Score: 32</div>
            <button onClick={reset}>Click to replay!</button>
            <div className="team-logos">
            {newTeams.map(team => (
            <Card
                id={team.id}    
                key={team.id} 
                image={team.image}
                name={team.name}
                handleGameLogic={handleGameLogic}
          />
          ))}
          </div>
          </div>: 
          <div>
          <div className="scores"><text>Current Score: {currentScore}</text><text>High Score: {highScore}</text><text>Max Score: 32</text></div>
          <div className="team-logos">
          {teams.map(team => (
            <Card
              id={team.id}    
              key={team.id} 
              image={team.image}
              name={team.name}
              handleGameLogic={handleGameLogic}
            />
            ))}
          </div>
          </div>
          );
};

export default Game;