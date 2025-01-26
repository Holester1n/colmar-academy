const allElementsWithId = document.querySelectorAll("#mobile-only");
const targetCard = Array.from(allElementsWithId).filter(element => element.classList.contains("course-card"));
targetCard.forEach(courseCard => {
    courseCard.addEventListener("click", () => {
        const img = courseCard.querySelector("img");
        const textContainer = courseCard.querySelector(".text-container");
        if (img.style.display === 'none' && textContainer.style.display === 'none') {
            img.style.display = 'block';
            textContainer.style.display = 'block';
        }
        else {
            img.style.display = 'none';
            textContainer.style.display = 'none';
        }
    });
});