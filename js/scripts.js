$(document).ready(function() {
  $("#myForm").submit(function(event){
    event.preventDefault();

    var vowels = ["a", "e", "i", "o", "u"];
    var sentence = $("#sentence").val();
    var inputArray = sentence.split(' ');
    console.log(inputArray);
    var finishSentence = "";
    var emptyArray = [];
    var inputArraySplit = inputArray.split('');
    alert(inputArray);

    for (var i = 0; i < sentence.length; i++) {
      if (vowels.includes(inputArraySplit[0])) {
        return
      }
}

  finishSentence += sentence.slice(inputArray) + newWord.join('') + "ay" + " ";


    // for (var index = 0; index < sentence.length; index++) {
    //   if (vowels.includes(inputArray[index])) {
    //     $("#output").append(inputArray[index] + 'way');
    //     break;
      }
    
  });
});
