window.addEventListener("scroll", function(){
    var header = document.querySelector("hero");
    header.classList.toggle("sticky", window.scrollY > 0 );
    })