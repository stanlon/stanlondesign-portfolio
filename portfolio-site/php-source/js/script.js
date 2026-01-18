console.log("SCRIPT FILE LOADED");
// Smooth Scroll - https://byprimer.co/blog/navigation-smooth-scrolling-jquery/
$(document).ready(function() {
  var headerHeight = $('nav').outerHeight(); // Target your header navigation here
  $('#main-nav li a').click(function(e) {
  	var targetHref   = $(this).attr('href');
  	$('html, body').animate({
  		scrollTop: $(targetHref).offset().top - (headerHeight - 100) // Add it to the calculation here
  	}, 1000);
    e.preventDefault();
  });

  //Shrinkable Nav Menu - https://codepen.io/ondrejsvestka/pen/yXJjLj
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 20) {
      $(".navbar").addClass("compressed");
      $(".navbar-default .navbar-nav li a").addClass("compressed");
    } else {
      $(".navbar").removeClass("compressed");
      $(".navbar-default .navbar-nav li a").removeClass("compressed");
    }
  });

  // Bootstrap v3.3.7 Scrollspy
  $('body').scrollspy({ target: '#exampleNavComponents'})

  // Portfolio showing the project documentation
  $(".project-dropdown").hide();
  $(".projectBTN").click(function(event){
    $(event.target).parent().parent().parent().parent().next( ".project-dropdown" ).toggle(1000);
    if($(event.target).text() === "Show Documentation") {
      $(event.target).text("Hide Documentation");
    } else {
      $(event.target).text("Show Documentation");
    }
  });

  //Contact Form (Formspree + free-tier redirect)
  const $form = $("#contact-form");
  if ($form.length) {
    $form.on("submit", function (e) {
      e.preventDefault();

      const $btn = $("#submit-btn");
      $btn.addClass("loading").prop("disabled", true);

      fetch(this.action, {
        method: "POST",
        body: new FormData(this),
        headers: { "Accept": "application/json" }
      })
      .then(response => {
        if (response.ok) {
          window.location.href = "/thanks.php";
        } else {
          alert("Something went wrong. Please try again.");
          $btn.removeClass("loading").prop("disabled", false);
        }
      })
      .catch(() => {
        alert("Network error. Please try again.");
        $btn.removeClass("loading").prop("disabled", false);
      });
    });
  }

});

