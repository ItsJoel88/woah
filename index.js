
// JS is to make the text editable fot demo purpose, not required for the effect. Thanks for the suggestion @chriscoyier! 
var h1 = document.querySelector("h1");

h1.addEventListener("input", function() {
    this.setAttribute("data-heading", this.innerText);
});



// THIS JS IS JUST FOR LOADING MY FONTS TRIAL FONTS IN, IT IS NOT NEEDED FOR THE ACTUAL EFFECT IF YOU HAVE THE FONTS.

(function() {
        var path = '//easy.myfonts.net/v2/js?sid=265311(font-family=Infamy+Fill)&sid=265312(font-family=Infamy+Highlight)&sid=265313(font-family=Infamy+Shadow)&sid=265314(font-family=Infamy+Outline)&key=ArVWnapeog',
            protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
            trial = document.createElement('script');
        trial.type = 'text/javascript';
        trial.async = true;
        trial.src = protocol + path;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(trial);
    })();

/*
font-family: 'Infamy Fill'
font-family: 'Infamy Highlight'
font-family: 'Infamy Shadow'
font-family: 'Infamy Outline

https://www.myfonts.com/fonts/latinotype/infamy/
*/
