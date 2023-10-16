// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map(movie => movie.director);
  const uniqueDirectorsArray = directorsArray.filter(
    (director, i) => directorsArray.indexOf(director) === i
  );
  return uniqueDirectorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) return 0;

  let arr = [];
  arr = moviesArray.filter(
    movie =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );

  return arr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  let scores = moviesArray.map(movie => {
    if (typeof movie.score === 'number') {
      return movie.score;
    } else {
      return 0;
    }
  });

  const average =
    scores.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / scores.length;

  const toTwoDecimals = average.toFixed(2);
  const fixedNumber = parseFloat(toTwoDecimals);

  return fixedNumber;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  // console.log(moviesArray);
  let filterDrama = moviesArray.filter(movie => movie.genre.includes('Drama'));
  let filterScores = filterDrama.map(movie => {
    if (typeof movie.score === 'number') {
      return movie.score;
    } else {
      return 0;
    }
  });
  if (filterDrama.length === 0) return 0;
  const average =
    filterScores.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / filterScores.length;

  const toTwoDecimals = average.toFixed(2);
  const fixedNumber = parseFloat(toTwoDecimals);

  return fixedNumber;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
