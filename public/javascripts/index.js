"use strict";

 //---------------- square object
 const square = {};

 // reference square blocks by num and immediately invoke (IIFE)
 (() => {
   for(let i = 0; i < 9; i++){
     square[`num-${i}`] = document.getElementById(`num-${i}`);
   }
 })();

 //---------------- private keys
 square.turnIs = "x";

 //---------------- methods

 square.makeMove = (item) => {
   square.turnIs === "x" ? (item.setAttribute("class", "col-md-4 x"), item.innerHTML = "x", square.turnIs = "o", square.checkWinStatus()) : (item.setAttribute("class", "col-md-4 o"), item.innerHTML = "o", square.turnIs = "x", square.checkWinStatus());
 };

 square.checkWinStatus = () => {
   if(
     // check x win status
       // win combination one
       square["num-0"].getAttribute("class")==="col-md-4 x" && square["num-1"].getAttribute("class")==="col-md-4 x" && square["num-2"].getAttribute("class")==="col-md-4 x" ||
       // win combination two
       square["num-0"].getAttribute("class")==="col-md-4 x" && square["num-3"].getAttribute("class")==="col-md-4 x" && square["num-6"].getAttribute("class")==="col-md-4 x" ||
       // win combination three
       square["num-0"].getAttribute("class")==="col-md-4 x" && square["num-4"].getAttribute("class")==="col-md-4 x" && square["num-8"].getAttribute("class")==="col-md-4 x" ||
       // win combination four
       square["num-1"].getAttribute("class")==="col-md-4 x" && square["num-4"].getAttribute("class")==="col-md-4 x" && square["num-7"].getAttribute("class")==="col-md-4 x" ||
       // win combination five
       square["num-2"].getAttribute("class")==="col-md-4 x" && square["num-5"].getAttribute("class")==="col-md-4 x" && square["num-8"].getAttribute("class")==="col-md-4 x" ||
       // win combination six
       square["num-2"].getAttribute("class")==="col-md-4 x" && square["num-4"].getAttribute("class")==="col-md-4 x" && square["num-6"].getAttribute("class")==="col-md-4 x" ||
       // win combination seven
       square["num-3"].getAttribute("class")==="col-md-4 x" && square["num-4"].getAttribute("class")==="col-md-4 x" && square["num-5"].getAttribute("class")==="col-md-4 x" ||
       // win combination eight
       square["num-6"].getAttribute("class")==="col-md-4 x" && square["num-7"].getAttribute("class")==="col-md-4 x" && square["num-8"].getAttribute("class")==="col-md-4 x"
   ){
     console.log("x wins");
   } else if(
     // check o win status
       // win combination one
       square["num-0"].getAttribute("class")==="col-md-4 o" && square["num-1"].getAttribute("class")==="col-md-4 o" && square["num-2"].getAttribute("class")==="col-md-4 o" ||
       // win combination two
       square["num-0"].getAttribute("class")==="col-md-4 o" && square["num-3"].getAttribute("class")==="col-md-4 o" && square["num-6"].getAttribute("class")==="col-md-4 o" ||
       // win combination three
       square["num-0"].getAttribute("class")==="col-md-4 o" && square["num-4"].getAttribute("class")==="col-md-4 o" && square["num-8"].getAttribute("class")==="col-md-4 o" ||
       // win combination four
       square["num-1"].getAttribute("class")==="col-md-4 o" && square["num-4"].getAttribute("class")==="col-md-4 o" && square["num-7"].getAttribute("class")==="col-md-4 o" ||
       // win combination five
       square["num-2"].getAttribute("class")==="col-md-4 o" && square["num-5"].getAttribute("class")==="col-md-4 o" && square["num-8"].getAttribute("class")==="col-md-4 o" ||
       // win combination six
       square["num-2"].getAttribute("class")==="col-md-4 o" && square["num-4"].getAttribute("class")==="col-md-4 o" && square["num-6"].getAttribute("class")==="col-md-4 o" ||
       // win combination seven
       square["num-3"].getAttribute("class")==="col-md-4 o" && square["num-4"].getAttribute("class")==="col-md-4 o" && square["num-5"].getAttribute("class")==="col-md-4 o" ||
       // win combination eight
       square["num-6"].getAttribute("class")==="col-md-4 o" && square["num-7"].getAttribute("class")==="col-md-4 o" && square["num-8"].getAttribute("class")==="col-md-4 o"
   ){
     console.log("o wins");
   }
 };


 //----------------- attach event listeners to each button in square
 // get row divs
 const squareButtons = document.getElementsByClassName("row");

 // convert collection to array and iterate over each
 Array.from(squareButtons).map((item, index)=>{
   // convert collection to array and attach event listener
   Array.from(item.getElementsByTagName("button")).map((innerItem, innerIndex) => {
     // this will be one of the nine buttons, attach event listener to each
     innerItem.addEventListener("click", () => {
       // check whose turn it is, add corresponding class, and switch turn to other player
       square.makeMove(innerItem);
     });
   });
 });
