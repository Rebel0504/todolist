// $("li").click(function(){

//     console.log($(this).css("color"));
//     if($(this).css("color") === "rgb(128, 128, 128)")
//     {
//         $(this).css({
//             color:"black",
//             textDecoration:"none"
//         });
//     }
//     else
//     {
//         $(this).css({
//             color:"gray",
//             textDecoration:"line-through"
//         });
//     }
// });

$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
$(this).parent().fadeOut("500",function(){
    $(this).remove();
});
event.stopPropagation(); //stopPropagation its stops the bubbling of the event
});

$("input[type='text']").on("keypress",function(event){
    if(event.which === 13)
    {
        var text= $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + text + "</li>");
       
    }
});

$(".fa-plus").on("click",function(){
    $("input[type='text']").fadeToggle();
});

