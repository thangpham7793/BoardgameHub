type Rating = 0 | 1 | 2 | 3 | 4 | 5;
type DifficultyLevel = 0 | 1 | 2 | 3 | 4 | 5;
type StrategyLevel = 0 | 1 | 2 | 3 | 4 | 5;
type Ranking = Rating;
type Age = number;
type NumOfPlayers = number;
type Duration = number;
type AgeRating = `${Age}+`;
type Genre = string;
type Summary = string;
type PlayMethod = string;

type Popularity = {
  rating: Rating;
  ranking: Ranking;
};

type Complexity = {
  difficultyLevel: DifficultyLevel;
  strategyLevel: StrategyLevel;
};

type Photo = {
  url: String;
};

type Illustration = {
  main: Photo;
  details: Photo[];
};

type UserFeedback = {
  popularity: Popularity;
  complexity: Complexity;
};

type Mechanics = {
  playMethod: PlayMethod;
  numOfPlayers: NumOfPlayers;
  duration: Duration;
};

type GameFact = {
  summary: Summary;
  genre: Genre;
  ageRating: AgeRating;
  mechanics: Mechanics;
};

type GameOverview = {
  gameFact: GameFact;
  userFeedback: UserFeedback;
};
