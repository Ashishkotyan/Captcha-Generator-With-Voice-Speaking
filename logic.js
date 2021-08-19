


const cheagetxtbtn = document.querySelector('.changetext');

const readtxtbtn = document.querySelector('.readtext');

const code = document.querySelector('#code');

const input = document.querySelector('.userInput input');

const Submitbtn = document.querySelector('.btn');


cheagetxtbtn.addEventListener('click', () => {
    code.textContent = createCaptcha();
});

window.addEventListener('load', () => {
    code.textContent = createCaptcha();
});

function createCaptcha(){
    let letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","0","1","2","3","4","5","6","7","8","9"];
    let a = letter[Math.floor(Math.random()* letter.length)];
    let b = letter[Math.floor(Math.random()* letter.length)];
    let c = letter[Math.floor(Math.random()* letter.length)];
    let d = letter[Math.floor(Math.random()* letter.length)];
    let f = letter[Math.floor(Math.random()* letter.length)];
    let g = letter[Math.floor(Math.random()* letter.length)];
    let i= letter[Math.floor(Math.random()* letter.length)];
  
    let code = a+b+c+d+f+g+i;
    return code;

   }
Submitbtn.addEventListener('click', () => {
    let val = input.value;
    if(val==''){
        
        responsiveVoice.speak('Please Enter the Captcha');
        alert('Please Enter the Text');
    }
    else if(val===code.textContent)
    {
        
        alert('The Code is Valid '+" "+code.textContent)
    }
    else{
        
        responsiveVoice.speak('Invalid Captcha');
        alert('Invalid code')
    }
})

readtxtbtn.addEventListener('click', () => {
    let text = code.textContent;
    responsiveVoice.speak(text);

});
