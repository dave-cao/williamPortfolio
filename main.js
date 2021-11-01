//nav bar animation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_links_container");
const aboutMeLink = document.querySelector(".aboutMeLink");
const myProjectsLink = document.querySelector(".myProjectsLink");
const contactMeLink = document.querySelector(".contactMeLink");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navBar.classList.toggle("under");
});

//enlarge all photos when clicked
const images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
        images[i].classList.toggle("enlarge");
    });
}

//Stop users from sending an empty form
let errorMessageContainer = document.querySelector(".errorMessage");
let errorMessage = document.createElement("h4");
const validateForm = () => {
    let userName = document.forms["myForm"]["user_name"].value;
    let userEmail = document.forms["myForm"]["user_email"].value;
    let userComments = document.forms["myForm"]["user_comments"].value;

    let errorIncrement = 0;
    errorMessageContainer.style.display = "block";
    //helper function for animation
    const errorFunction = () => {
        errorMessageContainer.appendChild(errorMessage);
        errorMessageContainer.style.opacity = "0";
        errorIncrement++;
        let frameRate;
        let fade = 0;
        let position = 0;
        clearInterval(frameRate);
        id = setInterval(frame, 1);

        function frame() {
            if (fade === 1) {
                clearInterval(frameRate);
            } else {
                position++;
                errorMessageContainer.style.left = position + "px";
                fade += 0.01;
                errorMessageContainer.style.opacity = fade;
            }
        }
    };

    if (userName == "") {
        errorMessage.innerHTML =
            "Please fill in your name so I know who to refer you as!";
        errorFunction();
        return false;
    } else if (userEmail == "") {
        errorMessage.innerHTML = "I need to know your email to contact you back!";
        errorFunction();
        return false;
    } else if (userComments == "") {
        errorMessage.innerHTML =
            "Leave a comment so I can understand why you're contacting me! :)";
        errorFunction();
        return false;
    }
};

const thankYouForm = (event) => {
    let fullFormContainer = document.querySelector("#contactMe");
    let formContainer = document.querySelector(".formContainer");
    let contactTitle = document.querySelector("#contactMeTitle");
    let thankParagraph = document.createElement("p");
    formContainer.style.display = "none";
    contactTitle.innerHTML = "Thank you for reaching out!";
    thankParagraph.textContent = "I will get back to you as soon as I can.";
    fullFormContainer.appendChild(thankParagraph);

    fullFormContainer.style.height = "40vh";
    fullFormContainer.style.display = "flex";
    fullFormContainer.style.flexDirection = "column";
    fullFormContainer.style.alignItems = "center";
    fullFormContainer.style.justifyContent = "center";
    fullFormContainer.style.fontSize = "1.4em";
    console.log(thankParagraph);
};
