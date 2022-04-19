var quotes=[ "When you have a dream, you’ve got to grab it and never let go.","Nothing is impossible. The word itself says ‘I’m possible!",
"There is nothing impossible to they who will try.",
"The bad news is time flies. The good news is you’re the pilot.","Life has got all those twists and turns. You’ve got to hold on tight and off you go.",
"Keep your face always toward the sunshine, and shadows will fall behind you.","Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.","You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.","I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened … it’s normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please","Success is not final, failure is not fatal: it is the courage to continue that counts.","You define your own life. Don’t let other people write your script."

]
function newQuote(){
    var randomNumber=Math.floor(Math.random()*(quotes.length));
    document.getElementById("quoteDisplay").innerHTML=quotes[randomNumber];
}