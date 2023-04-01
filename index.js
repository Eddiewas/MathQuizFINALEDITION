player_lname = localStorage.getItem("player1_name");
player_2name = localStorage.getItem("player2_name");
player_lscore = 0;
player_2score = 0;
document.getElementById("player1_name").innerHTML = player_lname;
document.getElementById("player2_name").innerHTML = player_2name;
document.getElementById("player1_score").innerHTML = player_1score;
document.getElementById("player2_score").innerHTML = player_2score;
document.getElementById("player_question").innerHTML = "Question Turn:" + player_lname;
document.getElementById("player_answer").innerHTML = "Question Turn:" + player_2name;

function send() {
    numberl = document.getElementById("text_inputl").value;
    number2 = document.getElementById("text_input2").value;
    actualAnswer = parseInt(numberl) * parseInt(number2);
    question_number = "<h4>" + numberl + " X " + number2 + "<h4>";
    question_box = "<br>Answer : <input type='text' id='input_check_box'";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + question_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("text_inputl").value = "";
    document.getElementById("text_input2").value = "";

}