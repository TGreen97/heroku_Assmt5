$( document ).ready(function() {

	   // GLOBAL VARIABLES
	  var triviaQuestions = {
        q1: ["Who helped E.T phone home?", "Elliot", "Drew", "Henry"],
        q2: ["Who got the beat?", "the Runaways", "the Bangles", "the Go-Go's"],
        q3: ["Who is the Last Dragon?", "Sho Nuff", "Taimek", "Berry Gordy"],
        q4: ["Where did Kenny Loggins take us to?", "the Danger Zone", "Bushwood CC", "Wal-mart"],
        q5: ["Who was Pat Benatar running with?", "the Lord of Light", "the Shadows in the Night", "Billie Jean"],
    }
    var correct = 0;
    var incorrect = 0;
    var userAnswer = 0;
    //var lockGame = false;

      // FUNCTIONS
    function startGame(){

      var number = 61;
      var correct = 0;
      var incorrect = 0;
     
      // $('#stop').on('click', stop);
      // $('#resume').on('click', run);

      function run(){
        counter = setInterval(decrement, 1000);
      }

      function decrement(){
        number--;
        $('#show-number').html('<h2>Timer: ' + number + ' Seconds Left</h2>');
        if (number === 0){
          clearInterval(counter);
          alert("Time's Up!");
          console.log("stopped.")
        }
      }
	  run();
	  qAndA();
    }	
    
    var qAndA = function() {
    	$(".triviaQuestions").html(triviaQuestions.q1[0]);
    	$("#a").html(triviaQuestions.q1[1]);
    	$("#b").html(triviaQuestions.q1[2]);
    	$("#c").html(triviaQuestions.q1[3]);
      	$(".btn").on("click", function() {
          //if (lockGame != true) {
            userAnswer = $(this).attr("value");
            console.log(userAnswer);
            if (userAnswer == "1") {
              correct++;
            } else {
              incorrect++;
            }
            $(".btn").value = " ";
            $(".btn").off("click", "**");
            console.log("Right: " + correct);
            console.log("Wrong: " + incorrect);
          
          //$("#qAndA").empty();
         // =================================
          /* $(".triviaQuestions").html(triviaQuestions.q2[0]);
          $("#a").html(triviaQuestions.q2[1]);
          $("#b").html(triviaQuestions.q2[2]);
          $("#c").html(triviaQuestions.q2[3]);
          $(".btn").on("click", function() {
              //if (lockGame != true) {
                userAnswer = $(this).attr("value");
                console.log(userAnswer);
                if (userAnswer == "3") {
                  correct++;
                } else {
                  incorrect++;
                }
                $(".btn").value = " ";
                $(".btn").off("click", "**");
                console.log("Right: " + correct);
                console.log("Wrong: " + incorrect); */

              $(".triviaQuestions").html(triviaQuestions.q3[0]);
	          $("#a").html(triviaQuestions.q3[1]);
	          $("#b").html(triviaQuestions.q3[2]);
	          $("#c").html(triviaQuestions.q3[3]);
	          $(".btn").on("click", function() {
	              //if (lockGame != true) {
	                userAnswer = $(this).attr("value");
	                console.log(userAnswer);
	                if (userAnswer == "2") {
	                  correct++;
	                } else {
	                  incorrect++;
	                }
	                $(".btn").value = " ";
	                $(".btn").off("click", "**");
	                console.log("Right: " + correct);
	                console.log("Wrong: " + incorrect);
              //$("#qAndA").empty();
          });   
              // =================================
          /*    $(".triviaQuestions").html(triviaQuestions.q3[0]);
              $("#a").html(triviaQuestions.q3[1]);
              $("#b").html(triviaQuestions.q3[2]);
              $("#c").html(triviaQuestions.q3[3]);
              $(".btn").on("click", function() {
                  if (lockGame != true) {
                    userAnswer = $(this).attr("value");
                    console.log(userAnswer);
                    if (userAnswer == "2") {
                      correct++;
                    } else {
                      incorrect++;
                    }
                    console.log("Right: " + correct);
                    console.log("Wrong: " + incorrect);
                  }
                  //$("#qAndA").empty();
              });
                  // =================================
                  $(".triviaQuestions").html(triviaQuestions.q4[0]);
                  $("#a").html(triviaQuestions.q4[1]);
                  $("#b").html(triviaQuestions.q4[2]);
                  $("#c").html(triviaQuestions.q4[3]);
                  $(".btn").on("click", function() {
                      if (lockGame != true) {
                        userAnswer = $(this).attr("value");
                        console.log(userAnswer);
                        if (userAnswer == "1") {
                          correct++;
                        } else {
                          incorrect++;
                        }
                        console.log("Right: " + correct);
                        console.log("Wrong: " + incorrect);
                      }
                      //$("#qAndA").empty();
                  });
                      // =================================
                      $(".triviaQuestions").html(triviaQuestions.q5[0]);
                      $("#a").html(triviaQuestions.q5[1]);
                      $("#b").html(triviaQuestions.q5[2]);
                      $("#c").html(triviaQuestions.q5[3]);
                      $(".btn").on("click", function() {
                          if (lockGame != true) {
                            userAnswer = $(this).attr("value");
                            console.log(userAnswer);
                            if (userAnswer == "2") {
                              correct++;
                            } else {
                              incorrect++;
                            }
                            console.log("Right: " + correct);
                            console.log("Wrong: " + incorrect);
                          }
                          //$("#qAndA").empty();
                      });  */
      alert("You got " + correct + " answers right; and " + incorrect + " wrong!");
      $("#imageDiv").html("<img src= 'http://media.riffsy.com/images/34fd42cc5f9db8e1b68bc531feb24af1/raw' />")
      });
     
        
    }
    
	  
	  
	  //==============


      // MAIN GAME
    startGame();
});