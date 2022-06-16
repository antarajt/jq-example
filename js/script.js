$(document).ready(function(){

    $('#btn1').dblclick(function(){

        alert("hello there");
    });

    $('.cbtn').click(function(){

        alert("hello there");
    });

    $('.mbtn').mouseover(function(){

        alert("hello there");
    });


//hide
    $('#hide').click(function(){

        $('h3').hide();
    });

//show
    $('#show').click(function(){

        $('h3').show();
    });

//show
    $('#toggle').click(function(){

        $('h3').toggle();
    });

//fade Out
    
    $('#fadeout').click(function(){

        $('h3').fadeOut("fast"); //shortcut fast/slow anyting 
    });
//fade Out
    $('#fadein').click(function(){

        $('h3').fadeIn(1000);  //time duration
    });


//fade toggle
    $('#fadetoggle').click(function(){

        $('h3').fadeToggle();
    });

//fade to
    $('#fadeto').click(function(){

        $('h3').fadeTo(2000, .2); //duration or opacity
    });


//slide toggle

    $('.pannel').click(function(){

        $('.content').slideToggle(1000);
    });


//change

    $( ".target" ).change(function() {
        alert( "Handler for .change() called." );
        
    });



    var input = $("form input:checkbox")
    .wrap(" <span></span> ")
    .parent()
    .css({
        background: "green",
        border: "2px aqua solid"
    });

    $("call")
    .text("for this type jQuery found" + input.length + ".")
    .css("color", "green")

//clone
    $( "b" ).clone().prependTo( ".prepend" );

    $("strong").clone().appendTo(".apply");
            
//closest

$( ".result div" ).click(function() {
    var color = $( this ).css( "background-color" );
    $( "#result" ).html( "That div is <span style='color:" +
      color + ";'>" + color + "</span>." );
  });

//On method

  $("#box2").on("click",function(){

    $(this).css("background", "orange");
  });
//on mouse over
  $("#box3").on("mouseover mouseout",function(){

    $(this).toggleClass("boxbg");
  });




//multiple on methods

$("#box4").on({

    "click" : function(){

        $(this).css("background", "orange");
    },

    "mouseover" : function(){

        $(this).css("background", "pink");
    },

    "mouseout" : function(){

        $(this).css("background", "lightblue");
    },
});
//click

$(".remove").click(function(){

    $("#box4").off("mouseover mouseout");
});

//click

$("body").click(function(event){

    $("#log").html("clicked: " + event.target.nodeName);
});


//items
function Handler(event){
    var target = $(event.target);
    if (target.is("li") ){
        target.children().toggle();
        
    } 
}
$("ul").click( Handler ).find("ul").hide();


//run
$("button").click(function (){

    $("div.first").slideUp(300).delay(800).fadeIn(400);
    $("div.second").slideUp(300).delay().fadeIn(400);

});


//pageY

$(document).on("mousemove",function(event){

    $("#page").text("pageX: " + event.pageX + ", pageY: " + event.pageY );
});

//inner width

var modWidth = 90;
$(".inner").one("click", function(){
    $(this).innerWidth (modWidth).addClass("mod");
    modWidth -= 8;
})

//wrap

var pTags = $( ".wrap1" );
$( ".un-wrap" ).click(function() {
  if ( pTags.parent().is( ".wr" ) ) {
    pTags.unwrap();
  } else {
    pTags.wrap( ".wrap1" );
  }
});

//select

$( ":input" ).select(function() {
    $( ".sel" ).text( "Something was selected" ).show().fadeOut( 1000 );
  });


  //sibilings

  $( ".sibi1" ).siblings( ".selected" ).css( "background", "aqua" );


//scroll left

$( "div.scr" ).scrollLeft( 600 );

//replace all

    $( "<b>All Items are Replaced.  - Hello</b> <br>" ).replaceAll( ".replace" );

//remove class

$( "p" ).even().removeClass( "blue" );
$( "p" ).even().removeClass( "" );

});