/*
This problem was asked by Square.

Assume you have access to a function toss_biased() which returns 0 or 1 with a probability that's not 50-50 (but also not 0-100 or 100-0). You do not know the bias of the coin.

Write a function to simulate an unbiased coin toss.
*/

//supposed we ran the biased function, and then stored the results of 12 coin tosses in an array.  This function below will simulate it:

const toss_biased = () => {
  return Math.round(Math.random())
}

const toss_biased_real_array = () => {
  let output = [];
  for ( i = 0; i < 12; i ++ ) {
    output.push(toss_biased())
  }
  return output
}

const toss_biased_into_array = () => {
  let results = [
    [0,0,0,0,0,0, 1,1,1,1,1,1], //50%
    [0,0,0,0,1,1, 1,1,1,1,1,1], //66%
    [0,0,0,1,1,1, 1,1,1,1,1,1], //75%
    [0,1,1,1,1,1, 1,1,1,1,1,1], //92%
  ]
  return results[Math.floor(Math.random()*4)]
}

const unbiased = (yourArray) => {
  //Determine what is the distribution
  let count0 = 0
  let count1 = 0
  for ( i = 0; i < yourArray.length ; i ++ ) {
    if (yourArray[i] == 1) {
      count1++
    } else {
      count0++
    }
  }
  //find the ratio of 1's over 0's
  let ratio = count1/count0
}


$(document).ready(function() {

  $('#form1').submit(function(){
    event.preventDefault()
    input1 = $('#input-1').val()
    input1 = input1.replace(/\'/g,'"')
    input2 = JSON.parse(input1)
    console.log(input1)
    $('#output-1').text(spiral(input2))
  })

});
