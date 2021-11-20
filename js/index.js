console.log("your index.js file is loaded correctly!");
$(' a').on ("click", function(){
    $(' a.active').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function(){
    $("button").click(function(){
      $(".idahod").animate({
        width: 'toggle'
      });
    });
  });

  $(document).ready(function(){
    $("button").click(function(){
      var div = $(".idahjo");  
      div.animate({left: '100px'}, "slow");
      div.animate({fontSize: '3em'}, "slow");
    });
  });