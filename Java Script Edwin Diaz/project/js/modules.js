//console.log('hello ! can you here me');
var imageModule = (function(){
    
//    return {
//        display: function(){
//            console.log('this\'s working bro');
//        }
//    }
//    
//    console.log('hello ! can you here me');
    
    return {
        
        carImages: {
            
            car1:'http://www.youtube.com', 
            car2:'http://www.youtube.com', 
            car3:'http://www.youtube.com', 
            car4:'http://www.youtube.com', 
            car5:'http://www.youtube.com', 
            car6:'http://www.youtube.com', 
            car7:'http://www.youtube.com', 
            car8:'http://www.youtube.com'
            
        },
        
        insertImages : function(){
            var myArguments = '.'+arguments[0]           
            var imagesContainer = document.querySelectorAll(myArguments);
            var output = "<div>";
            //console.log(imagesContainer);
            for(var key in this.carImages){
                output += '<div class="col-lg-3 col-md-4 col-xs-6 thumb">';
                output += '<a class="thumbnail" href="'+this.carImages[key]+'">';
			  //output += '<a class="thumbnail" href="'+this.carImages[key]+'">';
                output += '<img class= "img-responsive" src="project-styles/images/'+key+'.jpg'+'"alt="iamge">';
			  //output += '<img class= "img-responsive" src="images/'+key+'.jpg'+'" alt=""> ';	
                output += '</a>';
                output += '</div>';
               console.log(output); 
              //console.log(output);

                
            }
            
            for(var i =0 ; i<imagesContainer.length;i++){
                
                imagesContainer[i].innerHTML = output;
            }
            output +='</div>';

        }
    }
    
})();