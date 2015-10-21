$(document).ready(
    function(){
        
        $('form').submit( function(event){
            event.preventDefault();
            // this is where our code goes!!!
            var item = $("input[type=text]").val();

            var amount = $('input[type=number]').val();

            $("#add").click(function(){
                var $li = $('<li><span>'+ item + "(" + amount + ")" + '</span><button id="delete"      type="button">X</button><button id="done" type="button">DONE</button></li>');
                
            $("ul").append($li);
                return false;
            });
            
                
            $(document).on("click", "#delete", function() {
                $(this).closest("li").fadeOut(200);
            });
            
            //$(document).on("click", "#done", function(){
              //  $("ul li").addClass( "strike" );
            //});
            $(document).on("click", "#done", function () {
        $(this).closest("li").toggleClass("strike");
    });             
    });
        

});
    

       