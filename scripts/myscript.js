$( document ).ready(function() {

    console.log( "ready!" );
    $('.toggle-level-1>a').after('<i class="fa fa-plus"></i>')

    $( ".toggle-level-1>i" ).click(function() {
  
    $(this).siblings('.sub-menu').slideToggle();
    if($(this).hasClass('fa fa-plus'))
    {
      $(this).removeClass("fa fa-plus")
      $(this).addClass("fa fa-minus")
    }
    else{
      $(this).removeClass("fa fa-minus")
      $(this).addClass("fa fa-plus")
    }
  });


});
