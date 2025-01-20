function customizeInput(){
const elements = document.getElementsByTagName("INPUT");
for (let i = 0; i < elements.length; i++) {
elements.item(i).style.background = "#D6B893";
elements.item(i).style.color = "#8B6E4F"
}
}

function customizeTextArea(){
const elements = document.getElementsByTagName("textarea");
for (let i = 0; i < elements.length; i++) {
elements.item(i).style.background = "#D6B893";
elements.item(i).style.color = "#8B6E4F"
}
}

function customizeSelect(){
    const elements = document.getElementsByTagName("select");
    for (let i = 0; i < elements.length; i++) {
    elements.item(i).style.background = "#D6B893";
    }
    }

    function displayFeedbackMessage() {
        const username = document.getElementById("username").value;

        if (username) {
          alert(`Thanks ${username} for the feedback!`);
        } else {
             alert("Please enter your name before submitting.");
        }
    }