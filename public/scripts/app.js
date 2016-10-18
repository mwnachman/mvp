var app = {

  server: 'http://localhost:3000/quiz',

  init: function() {

    console.log('working');

    app.$email = $('#email');

    app.$result = $('#result');

    app.$send = $('#send');

    app.$send.on('submit', app.handleSubmit);

  }, 


  // headers: {
  //   'Access-Control-Allow-rigin': '*',
  //   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  //   'access-control-allow-headers': 'content-type, accept'
  //   // 'access-control-max-age': 10, // Seconds.
  //   // 'Content-Type': 'text/html'
  // },

  send: function(data) {
    console.log('url', app.server + "/score");
    var scoreToLog = data.score;
    var dataToSend = JSON.stringify(data);
    // console.log(dataToSend);
    // var dataToSend = data;
    $.ajax({
      url: app.server + "/score",
      method: 'POST', 
      contentType: 'application/json',
      data: dataToSend,
      // headers: app.headers,
      success: function (data) {
        console.log('it worked!', data);
        app.resetForm();
        app.$result.text('Your score is: ' + scoreToLog);
        
      }, 
      error: function(error) {
        console.error('Failed to send answers ', error);
      }
    });
  },


  resetForm: function() {

    app.$email.val('');
    $('input[name="Q1"]:checked').prop("checked", false);
    $('input[name="Q2"]:checked').prop("checked", false);
    $('input[name="Q3"]:checked').prop("checked", false);
    $('input[name="Q4"]:checked').prop("checked", false);
    $('input[name="Q5"]:checked').prop("checked", false);

  },


  handleSubmit: function(event) {

    event.preventDefault();

    var email = app.$email.val();
    var score = app.scoreTest();

    var data = {
      email: email,
      score: score
    };

    // console.log('in handlesubmit', data); 

    app.send(data);
    
  },

  
  scoreTest: function(event) {

    var Q1 = Number($('input[name="Q1"]:checked').val()) || 0;
    var Q2 = Number($('input[name="Q2"]:checked').val()) || 0;
    var Q3 = Number($('input[name="Q3"]:checked').val()) || 0;
    var Q4 = Number($('input[name="Q4"]:checked').val()) || 0;
    var Q5 = Number($('input[name="Q5"]:checked').val()) || 0;


    var score = Q1 + Q2 + Q3 + Q4 + Q5;
    // console.log('score in scoretest', score);
    return score;
  }

};