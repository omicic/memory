$(function($){
    var wrapp = $('#wrapp').append('<div class="container"></div>');
    var container = $('.container');
    var itemAr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    //var itemAr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    
    var savedAr = [];

    //punjenje divova
    for (var i = 0; i < 16; i++){
        var rand = Math.floor(Math.random()*itemAr.length);
        container.append('<div class="box" id = "'+ i + '"><div class="back">' + itemAr[rand] + '</div><div class="front"></div></div>');
        itemAr.splice(rand,1);
    };

    var boxes = $('.box');
    var testClick=0;
    start();
    function start() {
        boxes.on('click',function(){
            //console.log(testClick);
            savedAr.push($(this));
            testClick++;
            $(this).find('.front').css('transform','perspective(900px) rotateY(180deg)');
            $(this).find('.back').css('transform','perspective(900px) rotateY(0deg)');
            //console.log(testClick);
            if(testClick==2){
                boxes.off();
                var s = document.getElementById(".box").innerHTML;

                if(savedAr[0].html() === savedAr[1].html()){
                    testClick = 0;
                    savedAr[0].html()              
                    savedAr.length = 0;
                    start();
    
                } else {

                    setTimeout(function() {
                        savedAr[0].find('.front').css('transform','perspective(900px) rotateY(0deg)');
                        savedAr[0].find('.back').css('transform','perspective(900px) rotateY(180deg)');
                        savedAr[1].find('.front').css('transform','perspective(900px) rotateY(0deg)');
                        savedAr[1].find('.back').css('transform','perspective(900px) rotateY(180deg)');
                        testClick = 0;
                savedAr.length = 0; 
                start();
                    }, 800);
                     
                }

             
                
            };
            
        })
}
 
        

/*         if( $(this).find('.front').attr('id') === $(this).find('.back').attr('id')){
            console.log("isti");
        } else {
            console.log("razliciti");
        }  */


    



});