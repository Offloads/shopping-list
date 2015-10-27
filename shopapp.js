$(document).ready(
    function(){
        
        $(document).on("click", ".delete", function() {
                $(this).closest("li").fadeOut(200);
            totalCost -= parseFloat($(this).data("sub"));
            console.log($(this).data("sub"));
            $("#totalCost").text(totalCost);
            console.log(totalCost);
            });
        
        $(document).on("click", ".done", function(){
               $(this).closest("li").toggleClass("strike");
            });
        
        var subCosts = [];
        var totalCost = 0;
        
        
        
        $('form').submit( function(event){
            event.preventDefault();
            // this is where our code goes!!!
            var item = $("input[type=text]").val();
            
            var amount = parseFloat($('input[type=number]').val());
            var cost = $('input#itemCost').val();
            
            
            cost = parseFloat(cost);
            var subCost = amount * cost;
            subCosts.push(subCost);
            
            var $li = '<li><span>'+ item + "( $" + subCost + " )" + '</span><button class="delete" data-sub="'+ subCost +'"      type="button">X</button><button class="done" type="button">DONE</button></li>';
                
            $("ul").append($li);
              //  return false;
            //});
            $("input#shopItems").val("");
            $('input#itemAmount').val("");
            $('input#itemCost').val("");
            
            
            totalCost = subCosts.reduce(function(a,b){
                return a+b;                           
            },0);
            $("#totalCost").text(totalCost);
            
            
                    
    });
           

});
    

       