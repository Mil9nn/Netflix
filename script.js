const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((question, index) => {
    question.addEventListener("click", function () {
        const icon = question.querySelector("i"); // Get the icon inside the current question

        // Toggle the visibility of the answer
        if (answers[index].style.display === "none") {
            answers[index].style.display = "block";
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-xmark");
        } else {
            answers[index].style.display = "none";
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-plus");
        }
    });
});

