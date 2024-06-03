document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function() {
        var plus = this.querySelector(".plus");
        var minus = this.querySelector(".minus");
        var paragraph = this.closest(".faq-item").querySelector(".item3 p");

        // Toggle visibility of plus and minus icons
        plus.classList.toggle("hide");
        minus.classList.toggle("show");

        // Toggle visibility of the paragraph
        paragraph.classList.toggle("show");
    });
});
