//get data from the 🤟 StreamElements 🤟 data injection
const name = '{{name}}';

// vanilla es6 query selection (can use libraries and frameworks too)
const userNameContainer = document.querySelector('#username-container');

// change the inner html to animate it 🤪
//userNameContainer.innerHTML = stringToAnimatedHTML(name, animation);
userNameContainer.innerHTML = stringToHTML(name);

/**
 * return an html, with animation
 * @param s: the text
 * @param anim: the animation to use on the text
 * @returns {string}
 */

function stringToHTML(s, anim) {
    let stringAsArray = s.split('');
    stringAsArray = stringAsArray.map((letter) => {
        return `<span>${letter}</span>`
    });
    return stringAsArray.join('');

}