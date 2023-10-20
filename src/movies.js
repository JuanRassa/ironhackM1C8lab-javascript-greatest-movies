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
function orderByYear(moviesArray) {
  const copyMoviesArray = [...moviesArray];
  copyMoviesArray.sort(
    (a, b) => a.year - b.year || a.title.localeCompare(b.title)
  );
  // copyMoviesArray.sort((a, b) => {
  //   if (a.year - b.year === 0 || !a.year) {
  //     return a.title.localeCompare(b.title);
  //   }

  //   return a.year - b.year;
  // });

  return copyMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // console.log('BEFORE', moviesArray);
  const copyMoviesArray = [...moviesArray];
  copyMoviesArray.sort((a, b) => a.title.localeCompare(b.title));

  const moviesTitlesStrings = [];
  copyMoviesArray.forEach(movie => {
    moviesTitlesStrings.push(movie.title);
  });
  // console.log('AFTER', moviesTitlesStrings);
  // console.log(moviesTitlesStrings.length);

  if (moviesTitlesStrings.length > 20) {
    // console.log(moviesTitlesStrings.slice(0, 20));
    return moviesTitlesStrings.slice(0, 20);
  } else {
    // console.log(moviesTitlesStrings);
    return moviesTitlesStrings;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // console.log('BEFORE', moviesArray);
  // const copyMoviesArray = [...moviesArray];

  const copyMoviesArray = moviesArray.map(movie => {
    let splitString = movie.duration.split('h');
    let hoursString = splitString[0];
    let minutesString = splitString[1].split('min')[0] || 0;

    let totalMinsNum = hoursString * 60 + minutesString * 1;

    // console.log(movie.duration);
    // console.log('splitString', splitString);
    // console.log('hoursString -> ', hoursString);
    // console.log('minutesString -> ', minutesString);
    // console.log('totalMinsNum', totalMinsNum);

    return { duration: totalMinsNum };
  });

  // console.log('AFTER', moviesArray);
  return copyMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  // console.log('INIT ARRAY', moviesArray);

  //  I.  Early returns for cases where:
  //    1. Incoming array is empty.
  //    2. Incoming array has only one movie.
  if (moviesArray.length === 0) return null;
  if (moviesArray.length === 1) {
    console.log(
      `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`
    );
    return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`;
  }

  //  II. Store all the values of 'year' of each movie in a new array:
  const listAllYears = moviesArray.map(movie => movie.year);
  // console.log('listAllYears --->', listAllYears);

  //  III.  Filter in a new array the values of the years without repetitions. Each year appears once in here:
  const uniqueYearsArr = listAllYears.filter(
    (year, i) => listAllYears.indexOf(year) === i
  );
  // console.log('** uniqueYearsArr --->', uniqueYearsArr);

  // let copyArr = [...moviesArray];

  //  IV. Declare the variables that will hold the greatest average score and the year.
  let winningYear = 0;
  let winningAvrgScore = 0;

  //  V.  Start to loop the value of each year hold in the uniqueYearsArr array.
  uniqueYearsArr.forEach(year => {
    // console.log('** INSIDE forEach() **');
    // console.log('** Year -->', year);

    //  V.I.  Apply a filter by the current year in order to group the movies in a new and temporal array:
    let moviesByYear = moviesArray.filter(movie => movie.year === year);
    // console.log('** Movies by year -->', year, moviesByYear);

    //  V.II: Loop through all the movies and check if its a number type or not. If not, assign the 0 value to that score in order to keep the count for the average calc. The scores are stored in a new array, the rest of the movie data is excluded.
    let scores = moviesByYear.map(movie => {
      if (typeof movie.score === 'number') {
        return movie.score;
      } else {
        return 0;
      }
    });
    // console.log('** Scores -->', scores);

    //  V.III: Calculate the average score.
    let yearAverageRate =
      scores.reduce((curr, prev) => {
        return curr + prev;
      }, 0) / scores.length;
    // console.log('** yearAverageRate -->', yearAverageRate);

    //  V.IV: Determine if the current value is bigger that the global winning one. If this evaulates to true, it should be assigned as the new greatest average score as weel as its related year.
    if (yearAverageRate > winningAvrgScore) {
      winningAvrgScore = yearAverageRate;
      winningYear = year;
    }
    //  V.V.
    if (yearAverageRate === winningAvrgScore) {
      if (winningYear - year > 0) winningYear = year;
      // console.log('winningYear', winningYear);
      // console.log('evalYear', year);
    }
  });

  console.log(
    `The best year was ${winningYear} with an average score of ${winningAvrgScore}`
  );
  return `The best year was ${winningYear} with an average score of ${winningAvrgScore}`;
}

/*
let testArray = [
  { year: 2000, score: 10 },
  { year: 2000, score: 90 },
  { year: 1990, score: 20 },
  { year: 1990, score: 20 },
  { year: 1990, score: 20 },
  { year: 1990, score: '' },
  { year: 1980, score: 10 },
  { year: 1980, score: 1000 },
];
bestYearAvg(testArray);
console.log('*******************');
console.log('*******************');
console.log('*******************');
console.log('*******************');
*/
