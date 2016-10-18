var app = {

  server: 'http://localhost:3000/',

  init: function() {

    console.log('working');

    app.$email = $('#email');

    app.$send = $('#send');

    app.$send.on('submit', app.handleSubmit);

  }, 


  send: function(data) {

    app.clearForm();


    // $.ajax({
    //   url: app.server + 'results',
    //   type: 'POST'
    // })


  },

  clearForm: function() {

   // $('form input[type=submit]').attr('disabled', 'true');

  },




  handleSubmit: function(event) {

    var data = {

    }

    console.log(event.target); 


    // app.send(data);



    // var score = app.scoreTest(event);
    // console.log('score in handlesubmit', score);
    // console.log('email', app.$email.val());

    
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