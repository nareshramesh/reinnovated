document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById("openPage2");
    const content = document.getElementById("content1");

    if (button1) {
        button1.addEventListener("click", function() {
            content.classList.add("slide-up");
            setTimeout(() => {
                window.location.href = "page2.html";
            }, 500); 
        });
    }
});
