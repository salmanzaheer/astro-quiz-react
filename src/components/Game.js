import React, { useState } from "react";
import { Typography, Button, Grid, Alert } from "@mui/material";

const questions = [
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    answer: 0,
  },
  {
    question: "What is the hottest planet in our solar system?",
    choices: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: 1,
  },
  {
    question: "What is the name of our galaxy?",
    choices: ["Andromeda", "Milky Way", "Whirlpool", "Triangulum"],
    answer: 1,
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    choices: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: 0,
  },
  {
    question: "Which planet is known for its rings?",
    choices: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: 1,
  },
  {
    question: "What is the closest star to Earth?",
    choices: ["Alpha Centauri", "Betelgeuse", "Sirius", "Proxima Centauri"],
    answer: 3,
  },
  {
    question: "What is the largest type of star in the universe?",
    choices: ["Red Giant", "White Dwarf", "Neutron Star", "Hypergiant"],
    answer: 3,
  },
  {
    question: "What is a supernova?",
    choices: [
      "A colliding galaxy",
      "A black hole",
      "An exploding star",
      "A new star",
    ],
    answer: 2,
  },
  {
    question: "What is the name of the first man to walk on the moon?",
    choices: [
      "Buzz Aldrin",
      "Neil Armstrong",
      "Michael Collins",
      "Yuri Gagarin",
    ],
    answer: 1,
  },
  {
    question: "What is the asteroid belt?",
    choices: [
      "A constellation",
      "A galaxy",
      "A group of asteroids between Mars and Jupiter",
      "A star cluster",
    ],
    answer: 2,
  },
  {
    question: "What is the name of NASA's most famous space telescope?",
    choices: ["Spitzer", "Chandra", "Hubble", "Kepler"],
    answer: 2,
  },
  {
    question: "What is the speed of light?",
    choices: [
      "186,000 miles per second",
      "186,000 miles per hour",
      "186,000 kilometers per second",
      "186,000 kilometers per hour",
    ],
    answer: 0,
  },
  {
    question: "What is the distance between Earth and the Sun?",
    choices: [
      "93 million miles",
      "93 thousand miles",
      "93 billion miles",
      "93 trillion miles",
    ],
    answer: 0,
  },
  {
    question:
      "What is the name of the second largest planet in our solar system?",
    choices: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: 1,
  },
  {
    question: "What is the smallest planet in our solar system?",
    choices: ["Mercury", "Venus", "Earth", "Mars"],
    answer: 0,
  },
  {
    question: "What is the coldest planet in our solar system?",
    choices: ["Mercury", "Venus", "Uranus", "Neptune"],
    answer: 3,
  },
  {
    question:
      "What is the name of the dwarf planet located in the asteroid belt?",
    choices: ["Pluto", "Eris", "Haumea", "Ceres"],
    answer: 3,
  },
  {
    question: "What is the name of the largest moon in our solar system?",
    choices: ["Titan", "Ganymede", "Callisto", "Io"],
    answer: 1,
  },
  {
    question: "What is a black hole?",
    choices: [
      "A type of star",
      "A space-time region with strong gravitational effects",
      "A type of galaxy",
      "A type of planet",
    ],
    answer: 1,
  },
  {
    question:
      "What are the visible surfaces of Uranus and Neptune made out of?",
    choices: [
      "Clouds of Hydrogen and Helium",
      "Clouds of Methane Ice",
      "Clouds of Ammonia and Ammonium Hydrosulfate",
      "Clouds of Liquid Water",
    ],
    answer: 1,
  },
];

const Game = () => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const handleAnswer = (index) => {
    if (index === currentQuestion.answer) {
      setScore(score + 10);
    } else {
      setLives(lives - 1);
    }

    // TODO: Display alert message in a better way
    const nextQuestionIndex = questions.indexOf(currentQuestion) + 1;
    if (nextQuestionIndex === questions.length) {
      // End of game
      // alert(`Game over! Your final score is ${score}`);
      <Alert severity="success">Game over! Your final score is ${score}</Alert>;
    } else if (lives === 1) {
      // Last life
      setCurrentQuestion(questions[nextQuestionIndex]);
      // alert(`Wrong answer! You have 1 life left.`);
      <Alert severity="error">Wrong answer! You have 1 life left.</Alert>;
    } else if (lives === 0) {
      // Game over
      // alert(`Game over! Your final score is ${score}`);
      <Alert severity="success">Game over! Your final score is ${score}</Alert>;
    } else {
      // Next question
      setCurrentQuestion(questions[nextQuestionIndex]);
    }
  };

  const restartGame = () => {
    setScore(0);
    setLives(3);
    setCurrentQuestion(questions[0]);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">{currentQuestion.question}</Typography>
      </Grid>
      {currentQuestion.choices.map((choice, index) => (
        <Grid item xs={6} key={index}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => handleAnswer(index)}
          >
            {choice}
          </Button>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Typography variant="h6">Score: {score}</Typography>
        <Typography variant="h6">Lives: {lives}</Typography>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={restartGame}
        >
          Restart
        </Button>
      </Grid>
    </Grid>
  );
};

export default Game;
