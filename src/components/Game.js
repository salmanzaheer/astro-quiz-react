import React, { useEffect, useState } from "react";
import { Typography, Button, Grid, Alert } from "@mui/material";

const questions = [
  {
    question: "What is the speed of light in a vacuum?",
    choices: ["299,792 km/s", "150,000 km/s", "1,080,000 km/s", "186,000 km/s"],
    answer: 0,
    image: "https://images-assets.nasa.gov/image/PIA08211/PIA08211~small.jpg",
  },
  {
    question: "What is the observable universe's estimated diameter?",
    choices: [
      "93 billion light-years",
      "13.8 billion light-years",
      "1 trillion light-years",
      "500 billion light-years",
    ],
    answer: 0,
    image: "https://images-assets.nasa.gov/image/PIA13782/PIA13782~small.jpg",
  },
  {
    question: "What is the most common type of star found in the Milky Way?",
    choices: ["Red Giant", "White Dwarf", "Red Dwarf", "Blue Giant"],
    answer: 2,
    image: "https://images-assets.nasa.gov/image/PIA18912/PIA18912~medium.jpg",
  },
  {
    question: "What is the largest type of star in the universe?",
    choices: ["Red Giant", "White Dwarf", "Red Dwarf", "Hypergiant"],
    answer: 3,
    image: "https://images-assets.nasa.gov/image/PIA08006/PIA08006~medium.jpg",
  },
  {
    question: "What is a pulsar?",
    choices: [
      "A rotating neutron star",
      "A black hole",
      "A white dwarf",
      "A red giant",
    ],
    answer: 0,
    image: "https://images-assets.nasa.gov/image/9905980/9905980~medium.jpg",
  },
  {
    question: "What is the age of the universe in light years?",
    choices: ["13.8 billion", "93 billion", "1 trillion", "500 billion"],
    answer: 0,
    image: "https://images-assets.nasa.gov/image/PIA18914/PIA18914~medium.jpg",
  },
  {
    question: "What is the name of the first artificial Earth satellite?",
    choices: ["Apollo 11", "Sputnik 1", "Voyager 1", "Hubble Space Telescope"],
    answer: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Sputnik_asm.jpg",
  },
  {
    question: "What causes a supernova?",
    choices: [
      "Collision of two stars",
      "Death of a star",
      "Birth of a star",
      "Black hole",
    ],
    answer: 1,
    image:
      "https://www.publicdomainpictures.net/pictures/190000/velka/view-of-a-supernova.jpg",
  },
  {
    question: "What is the closest galaxy to the Milky Way?",
    choices: [
      "Andromeda Galaxy",
      "Triangulum Galaxy",
      "Canis Major Dwarf Galaxy",
      "Sagittarius Dwarf Spheroidal Galaxy",
    ],
    answer: 2,
    image:
      "https://www.publicdomainpictures.net/pictures/190000/velka/milky-way.jpg",
  },
  {
    question: "What is the most abundant gas in the universe?",
    choices: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
    answer: 1,
    image:
      "https://c.pxhere.com/photos/cb/f0/space_universe_all_night_sky_sky_fog_star_gases-1262175.jpg!s",
  },
  {
    question: "What is the distance between the Earth and the Sun?",
    choices: [
      "149.6 million km",
      "92.96 million km",
      "1 light year",
      "384,400 km",
    ],
    answer: 0,
    image: "https://ak9.picdn.net/shutterstock/videos/3812429/thumb/3.jpg",
  },
  {
    question: "What is the largest moon in the Solar System?",
    choices: ["Europa", "Titan", "Ganymede", "Callisto"],
    answer: 2,
    image:
      "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd36-2-pia09352.jpg?w=2000&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ca2df613c22f05764a0be3c3372fb8cd",
  },
  {
    question: "What is the hottest planet in the Solar System?",
    choices: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: 1,
    image:
      "https://www.publicdomainpictures.net/pictures/40000/velka/unknown-planet.jpg",
  },
  {
    question: "What is the smallest planet in the Solar System?",
    choices: ["Mercury", "Venus", "Mars", "Pluto"],
    answer: 0,
    image:
      "https://www.publicdomainpictures.net/pictures/190000/velka/planet-mercury.jpg",
  },
  {
    question: "What is the brightest star in the night sky?",
    choices: ["Polaris", "Betelgeuse", "Sirius", "Vega"],
    answer: 2,
    image:
      "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd36-1-gsfc_20171208_archive_e000084.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=80&usm=15&vib=3&w=1300&s=d03c919b0441607ec453d3afcefe2651",
  },
  {
    question: "What is the densest planet in the Solar System?",
    choices: ["Earth", "Jupiter", "Saturn", "Mercury"],
    answer: 0,
    image:
      "https://www.publicdomainpictures.net/pictures/210000/velka/planet-1485555457tIJ.jpg",
  },
  {
    question: "What is the largest planet in the Solar System?",
    choices: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    answer: 0,
    image:
      "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd36-1-gsfc_20171208_archive_e000103.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=80&usm=15&vib=3&w=1300&s=8716fccef49bf86abfdf299df612fd85",
  },
  {
    question:
      "What is the name of the galaxy that is expected to collide with the Milky Way in future?",
    choices: ["Andromeda", "Triangulum", "Whirlpool", "Centaurus A"],
    answer: 0,
    image:
      "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd36-1-pia15416.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=80&usm=15&vib=3&w=1300&s=ee89528f553d3a01eb9431f534b45c65",
  },
  {
    question:
      "What is the name of the theory that explains the creation of the Universe?",
    choices: [
      "Evolution Theory",
      "Big Bang Theory",
      "General Relativity",
      "Quantum Theory",
    ],
    answer: 1,
    image:
      "https://cdn.pixabay.com/photo/2014/08/20/18/45/big-bang-422749_960_720.jpg",
  },
];

// shuffle the questions
function shuffleQuestions(questions) {
  let shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

const Game = () => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // shuffle the questions on first render
  useEffect(() => {
    setShuffledQuestions(shuffleQuestions(questions));
  }, []);

  const handleAnswer = async (index) => {
    setSelectedOption(index);

    if (index === currentQuestion.answer) {
      setScore(score + 10);
    } else {
      // wait 1 second before updating lives to show the wrong answer
      await timeout(1000);
      setLives(lives - 1);
    }

    // TODO: Display alert message in a better way
    const nextQuestionIndex = questions.indexOf(currentQuestion) + 1;
    if (nextQuestionIndex === questions.length) {
      // End of game
      alert(`Game over! Your final score is ${score}`);
      setSelectedOption(null);
    } else if (lives === 1) {
      // Last life
      setCurrentQuestion(questions[nextQuestionIndex]);
      alert(`Wrong answer! You have 1 life left.`);
      setSelectedOption(null);
    } else if (lives === 0) {
      // Game over
      setIsGameOver(true);
      alert(`Game over! Your final score is ${score}`);
    } else {
      // Next question
      setCurrentQuestion(questions[nextQuestionIndex]);
      setSelectedOption(null);
    }

    if (isGameOver) {
      restartGame();
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
        <img src={currentQuestion.image} alt={currentQuestion.question} />
        <Typography variant="h4">{currentQuestion.question}</Typography>
      </Grid>
      {currentQuestion.choices.map((choice, index) => (
        <Grid item xs={6} key={index}>
          <Button
            variant="contained"
            onClick={() => handleAnswer(index)}
            color={
              selectedOption === index
                ? currentQuestion.answer === index
                  ? "primary"
                  : "error"
                : "primary"
            }
            fullWidth
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

        <Typography variant="caption">
          Created by Salman Zaheer for ASTR 161. All images used are part of the
          public domain.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Game;
