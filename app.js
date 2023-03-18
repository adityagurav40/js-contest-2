function startSportsDay() {
  console.log("Let the games begin");
  let scores = {red: 0, blue: 0, green: 0, yellow: 0};

  setTimeout(function() {
    Race100M(scores, function(scores) {
      LongJump(scores, function(scores) {
        HighJump(scores, function(scores) {
          AwardCeremony(scores);
        });
      });
    });
  }, 1000);
}

function Race100M(scores, callback) {
  console.log("Race100M starts");
  let times = {red: getRandomTime(), blue: getRandomTime(), green: getRandomTime(), yellow: getRandomTime()};
  console.log("Times:", times);

  let sortedColors = Object.keys(times).sort(function(a, b) {
    return times[a] - times[b];
  });

  scores[sortedColors[0]] += 50;
  scores[sortedColors[1]] += 25;
  console.log("Scores:", scores);

  setTimeout(function() {
    callback(scores);
  }, 0);
}

function LongJump(scores, callback) {
  console.log("LongJump starts");
  let randomColor = Object.keys(scores)[Math.floor(Math.random() * 4)];
  scores[randomColor] += 150;
  console.log("Scores:", scores);

  setTimeout(function() {
    callback(scores);
  }, 0);
}

function HighJump(scores, callback) {
  console.log("HighJump starts");
  let input = prompt("What colour secured the highest jump? (red/blue/green/yellow)");
  if (input !== null) {
    let color = input.toLowerCase();
    if (color in scores) {
      scores[color] += 100;
      console.log("Scores:", scores);
    } else {
      console.log("Event was cancelled");
    }
  } else {
    console.log("Event was cancelled");
  }

  setTimeout(function() {
    callback(scores);
  }, 0);
}

function AwardCeremony(scores) {
  console.log("AwardCeremony starts");
  let sortedScores = Object.keys(scores).sort(function(a, b) {
    return scores[b] - scores[a];
  });

  console.log(`1st place: ${sortedScores[0]} with ${scores[sortedScores[0]]} points`);
  console.log(`2nd place: ${sortedScores[1]} with ${scores[sortedScores[1]]} points`);
  console.log(`3rd place: ${sortedScores[2]} with ${scores[sortedScores[2]]} points`);
}

function getRandomTime() {
  return Math.floor(Math.random() * 6) + 10;
}