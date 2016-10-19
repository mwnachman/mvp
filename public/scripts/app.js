var app = {

  server: 'http://localhost:3000/quiz',

  init: function() {
    
    // console.log('working');
    app.$test = $('#test');
    app.$however = $('#however');
    app.$explanation = $('#explanation');
    app.$adjAvg = $('#adjustedAverage');
    app.$email = $('#email');
    app.$result = $('#result');
    app.$send = $('#send');
    app.$send.on('submit', app.handleSubmit);
    // app.displayQuestions();

  }, 

  send: function(data) {
    console.log('url', app.server + "/score");
    var scoreToLog = data.score;
    var dataToSend = JSON.stringify(data);
    // console.log(dataToSend);
    $.ajax({
      url: app.server + "/score",
      method: 'POST', 
      contentType: 'application/json',
      data: dataToSend,
      success: function (data) {
        console.log('it worked!', data);
        var avg = data.average;
        app.showScore(scoreToLog, avg);
        // app.resetForm();
      }, 
      error: function(error) {
        console.error('Failed to send answers ', error);
      }
    });
  },

  showScore: function(score, avgScore) {
    app.$test.html('<p>Thank you for taking the test.</p>');
    app.$result.text('Your score is: ' + score +"!");
    avgScore = Number(avgScore.toFixed(2));
    app.$however.text('However, your average score is: ' + avgScore);
    app.$explanation.text('According to Time Magazine, the national average on the full, 40-question test is 15.5. Actors have an average score of 18.5.  Reality show stars score 19.5.  Violent offenders in prisons weigh in at 23.  A score of 17 or above indicates you are flirting with narcissism.');
    var adj = avgScore * 4;
    app.$adjAvg.text('Your adjusted average is: ' + adj);
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var email = app.$email.val();
    var score = app.scoreTest();

    var data = {
      email: email,
      score: score
    };
    app.send(data);  
  },

  
  scoreTest: function(event) {
    var sum = 0;
    for (var i = 1; i <= 10; i++) {
      var num = ($('input[name="Q' + i + '"]:checked').val()) ? 
        Number($('input[name="Q' + i + '"]:checked').val()) : 0;
      sum += num;
    };
    return sum;
  }

};





















