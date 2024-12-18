function buttonClick() {
    alert("Secondary Button Clicked! Add more interactivity here.");
}

document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const productCards = document.querySelectorAll(".product-card");
    const buttons = document.querySelectorAll(".btn");

    // Checkbox Interactivity
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (e) => {
            const filter = e.target.id;
            alert(`${filter} is now ${e.target.checked ? "selected" : "deselected"}`);
        });
    });

    // Button Events
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            alert(`You clicked: ${button.innerText}`);
        });
    });

    // Example of dynamic product filtering (future enhancement)
    console.log("Interactive components loaded successfully!");
});