// Reverse a string
//like "Name" = "emaN"




function reverse(str){

  let reversed = "";

  //Usual process of solving this problem

  // for (let i=0; i<str.length; i++){

  //   reversed = str[i] + reversed;
  // }


  // This one is more simpler 

  for (let char of str){

      reversed = char + reversed;
    }


  return reversed;
}


console.log(reverse("MonopolyBusiness"));



