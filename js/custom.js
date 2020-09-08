$(document).ready(function(){
    AOS.init();
    $(".navbar li").on("click", function() {
        $(".navbar li").removeClass("active");
        $(this).addClass("active");
    }); 

    // smooth scroll
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        // Prevent default action
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      } 
    });

    // scroll top function js
    var scrollBtn = document.getElementById("scrollBtn");

    window.onscroll = function() {scroll()};

    function scroll() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    }

    //click to top 
    $("#scrollBtn").on("click",function(e){
        e.preventDefault(),
        $("html, body").animate({scrollTop:0},"300")
        $(".navbar li").removeClass("active");
        $("#home").addClass("active");
    });
});