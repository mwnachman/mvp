var app = {

  server: 'http://localhost:3000/quiz',

  init: function() {

    console.log('working');

    app.$email = $('#email');

    app.$send = $('#send');

    app.$send.on('submit', app.handleSubmit);

  }, 


  send: function(data) {
    console.log('data in send func', data);

    $.ajax({
      url: app.server + "/score",
      type: 'POST', 
      data: JSON.stringify(data),
      success: function (data) {
        app.$email.val('');
        console.log('it worked!', data);
      }, 
      error: function(error) {
        console.error('Failed to send answers ', error);
      }
    });
  },



  handleSubmit: function(event) {
    
    var email = app.$email.val();
    var score = app.scoreTest();

    var data = {
      email: email,
      score: score
    };

    console.log('in handlesubmit', data); 

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