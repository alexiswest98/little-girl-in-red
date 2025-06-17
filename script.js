//Blood Stain Animation
let hasAnimated = false;

let bloodStainStart = () => {
    if(hasAnimated) return;

    let images = [
        './public/images/BloodStain1.png',
        './public/images/BloodStain2.png',
        './public/images/BloodStain3.png',
        './public/images/BloodStain4.png',
        './public/images/BloodStain5.png',
        './public/images/BloodStain6.png',
        './public/images/BloodStain7.png',
        './public/images/BloodStain8.png',
        './public/images/BloodStain9.png',
        './public/images/BloodStain10.png',
        './public/images/BloodStain11.png',
        './public/images/BloodStain12.png',
    ]

    let i = 0;
    let startIntervalId;

    let Animate = () => {
        if (i < images.length) {
            document.getElementById("bloodStain").src = images[i];
            i++;
        } else {
            document.getElementById("bloodStain").src = images[11];
            clearInterval(startIntervalId);
            hasAnimated = true;
        }
    }
    Animate();
    startIntervalId = setInterval(Animate, 100);
}

//Blood Stain Animation
let bloodStainEnd = (idName) => {
    let images = [
        './public/images/BloodStain12.png',
        './public/images/BloodStain11.png',
        './public/images/BloodStain10.png',
        './public/images/BloodStain9.png',
        './public/images/BloodStain8.png',
        './public/images/BloodStain7.png',
        './public/images/BloodStain6.png',
        './public/images/BloodStain5.png',
        './public/images/BloodStain4.png',
        './public/images/BloodStain3.png',
        './public/images/BloodStain2.png'
    ]

    let i = 0;
    let intervalId;

    let Animate = () => {
        if (i < images.length) {
            document.getElementById(idName).src = images[i];
            i++;
        } else {
            document.getElementById(idName).src = images[10];
            clearInterval(intervalId);
        }
    }
    Animate();
    intervalId = setInterval(Animate, 350);
}


// Get elements
const heading = document.querySelector('.typewriter h1');
const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');
const thirdButton = document.getElementById('thirdButton');
const fourthButton = document.getElementById('fourthButton');
const fifthButton = document.getElementById('fifthButton');
const sixthButton = document.getElementById('sixthButton');

const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const section5 = document.getElementById('section5');
const section6 = document.getElementById('section6');

const poemText1 = document.getElementById('poemText1');
const poemText2 = document.getElementById('poemText2');
const poemText3 = document.getElementById('poemText3');
const poemText4 = document.getElementById('poemText4');
const poemText5 = document.getElementById('poemText5');
const poemText6 = document.getElementById('poemText6');

// Poem text sections
const poem1 = "In a world full of noise and black screens,\nstood a little girl\nwaiting for her mother in a crowded white room.";
const poem2 = "Her weak, cold body shivered,\nunable to speak,\nunable to cry.\nThrough her eyes,\ntime slowed to a crawl as if each moment were a lifetime.";
const poem3 = "The room buzzed with wildlife energy,\na symphony of panic and despair.\nIn every note,\nshe could hear a prayer.";
const poem4 = "The echoes of crying stained the walls dark, dark red.\nThe little girl looked down at her hands\nand she too saw the stains.\nShe felt the echoes all over her body\nand she felt the pain.";
const poem5 = "Her mother was dead\nand she was left with nothing but a man\nholding a camera up to her face,\nrecording for the sake of trying to save their race.";
const poem6 = "We like and we comment and some ignore,\nbut at the end of the day,\nthe little girl will forever be stained red.";



// Animation duration from CSS (3.5s for typing)
const animationDuration = 3500; // 3.5 seconds in milliseconds

// Add a class after the initial animation completes to remove the cursor and show the first button
setTimeout(() => {
    heading.classList.add('typing-complete');
    firstButton.style.display = 'block';
    firstButton.disabled = false; // Enable the first button after title animation
    bloodStainStart();
}, animationDuration);

// First button click handler
firstButton.addEventListener('click', () => {
    firstButton.disabled = true;
    // firstButton.style.display = 'none';

    //need image to turn into stain 
    bloodStainEnd("bloodStain");

    typeText(poemText1, poem1, () => {
    // Show second button only after text is fully typed
    secondButton.style.display = 'block';
    });
});

// Second button click handler
secondButton.addEventListener('click', () => {
    secondButton.disabled = true;
    // secondButton.style.display = 'none';
    section2.style.display = 'flex';

    bloodStainEnd("bloodStain2");

    typeText(poemText2, poem2, () => {
    // Show third button only after text is fully typed
    thirdButton.style.display = 'block';
    });
});

// Third button click handler
thirdButton.addEventListener('click', () => {
    thirdButton.disabled = true;
    // thirdButton.style.display = 'none';
    section3.style.display = 'flex';

    bloodStainEnd("bloodStain3");

    typeText(poemText3, poem3, () => {
    // Show fourth button only after text is fully typed
    fourthButton.style.display = 'block';
    });

});

// Fourth button click handler
fourthButton.addEventListener('click', () => {
    fourthButton.disabled = true;
    // fourthButton.style.display = 'none';
    section4.style.display = 'flex';

    bloodStainEnd("bloodStain4");

    typeText(poemText4, poem4, () => {
    // Show fifth button only after text is fully typed
    fifthButton.style.display = 'block';
    });
});

// Fifth button click handler
fifthButton.addEventListener('click', () => {
    fifthButton.disabled = true;
    // fifthButton.style.display = 'none';
    section5.style.display = 'flex';

    bloodStainEnd("bloodStain5");

    typeText(poemText5, poem5, () => {
    // Show sixth button only after text is fully typed
    sixthButton.style.display = 'block';
    });
});

// Sixth button click handler
sixthButton.addEventListener('click', () => {
    sixthButton.disabled = true;
    // sixthButton.style.display = 'none';
    section6.style.display = 'flex';

    bloodStainEnd("bloodStain6");

    typeText(poemText6, poem6, () => {
    // Final section complete - nothing more to reveal
    });
});

// Function to type text with a callback when complete
function typeText(element, text, callback) {
    let i = 0;
    const speed = 70; // Typing speed in milliseconds
    
    function typeChar() {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;

        // Scroll to the element if it's not in view
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });


        setTimeout(typeChar, speed);
    } else {
        // Typing complete
        if (callback) callback();
    }
    }
    
    // Start typing character by character
    typeChar();
}
