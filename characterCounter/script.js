
//get elements 
const textareaEl = document.getElementById ("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");
const specialCounterEl = document.getElementById ("special-counter");
const numbersCounterEl = document.getElementById ("number-counter");


// Add an event listener to the textarea element
textareaEl.addEventListener("keyup",()=>{
    updateCounter();
    updateSpecialCounter();
    updateNumber();


    
});
//call the functions
updateCounter();
updateSpecialCounter();
updateNumber(); 





// Update counters with the length of the textarea value
function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length
   remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length ;

   
}
// update special characters counter 
function updateSpecialCounter(){
    specialCounterEl.innerText = calculateSpecialCharacters();
}   
// update numbers counter
function updateNumber(){
    numbersCounterEl.innerText = calculateNumbers();
}










// calculate special characters
const specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]","|",";",":","'","<",">","?","/","~","`", ",", ".", "\"", "\\"];
function calculateSpecialCharacters(){
    let count = 0;
    for(let i = 0; i < textareaEl.value.length; i++){
        if(specialCharacters.includes(textareaEl.value[i])){
            count++;
        }
        
    }
    return count;
}                                                                    

// calculate numbers
const numberCounter = ["1","2","3","4","5","6","7","8","9","0"];
function calculateNumbers(){
    let count = 0;
    for(let i = 0; i < textareaEl.value.length; i++){
        if(numberCounter.includes(textareaEl.value[i])){
            count++;
        }
        
    }
    return count;
}                   

// //const specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]","|",";",":","'","<",">","?","/","~","`", " ", ",", ".", "\"", "\\"];
// const numberCounter = ["1","2","3","4","5","6","7","8","9","0"];

// function calculateCharactersAndNumbers() {
//     let specialCount = 0;
//     let numberCount = 0;

//     for(let i = 0; i < textareaEl.value.length; i++){
//         if(specialCharacters.includes(textareaEl.value[i])){
//             specialCount++;
//         }
//         if(numberCounter.includes(textareaEl.value[i])){
//             numberCount++;
//         }
//     }

//     return {
//         specialCount: specialCount,
//         numberCount: numberCount
//     };
// } why couldnt this work!!!
    

    
