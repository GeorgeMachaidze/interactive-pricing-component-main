let pageViews = document.getElementById("pageViews");

let amount = document.getElementById("amount");

let checkBox = document.getElementById("cb_id");

let sliderAfter = document.querySelector(".sliderAfter");

slide.onchange = function() {
if(this.value == 0&&checkBox.checked){
   pageViews.innerHTML="10k Pageviews";
   amount.innerHTML="$6.00";
   sliderAfter.style.width = "0"
 }else if(this.value == 1&&checkBox.checked){
     pageViews.innerHTML="50k Pageviews";
     amount.innerHTML="$9.00";
     sliderAfter.style.width = "25%"
  }else if(this.value == 2&&checkBox.checked){
     pageViews.innerHTML="100k Pageviews"
     amount.innerHTML="$12.00"
     sliderAfter.style.width = "50%"
  }else if(this.value == 3&&checkBox.checked){
     pageViews.innerHTML="500k Pageviews"
     amount.innerHTML="$19.00"
     sliderAfter.style.width = "75%"
  }else if(this.value == 4&&checkBox.checked){
     pageViews.innerHTML="1M Pageviews"
     amount.innerHTML="$27.00"
     sliderAfter.style.width = "100%"
  }else if(this.value == 0){
     pageViews.innerHTML="10k Pageviews";
     amount.innerHTML="$8.00";
     sliderAfter.style.width = "0"
  }else if(this.value == 1){
     pageViews.innerHTML="50k Pageviews";
     amount.innerHTML="$12.00";
     sliderAfter.style.width = "25%"
  }else if(this.value == 2){
     pageViews.innerHTML="100k Pageviews"
     amount.innerHTML="$16.00"
     sliderAfter.style.width = "50%"
  }else if(this.value == 3){
     pageViews.innerHTML="500k Pageviews"
     amount.innerHTML="$24.00"
     sliderAfter.style.width = "75%"
  }else if(this.value == 4){
     pageViews.innerHTML="1M Pageviews"
     amount.innerHTML="$36.00"
     sliderAfter.style.width = "100%"

  }
}









// $(document).ready(function(){

//   //set defaults
//   $("#plan-holder").text('Personal Plan:');
//   $("#device-holder").text('0-3 Devices');
//   $(".info-price").html('$ 0 / month');
//   $(".annual-price").html('$0');
    
//     new Dragdealer('pr-slider', {
//     animationCallback: function(x, y) {
//       var slider_value = ((Math.round(x * 100)));
//       //$("#pr-slider .value").text(slider_value);
//       var stripe_width = slider_value+1;
//       $(".stripe").css("width", ""+stripe_width+"%");
      
//       //set personal
//       if(slider_value > 0 && slider_value < 6){
//        $("#plan-holder").text('Personal Plan:');
//      $("#device-holder").text('0-3 Devices');
//        $(".info-price").html('$ 0 / month');
       
//        $("#green-highlight").hide(); 
//       }
      
//       //set basic
//       if(slider_value > 5 && slider_value < 37){
//         $("#plan-holder").text('Basic Plan:');
        
//         $("#orange-highlight").hide();
//         $("#green-highlight").show();
//         $("#green-highlight").css("width", ""+(slider_value+40.5)+"%");
      
//         if(slider_value > 5){ 
//           $(".info-price").html('$ 29 / month'); 
//           $(".annual-price").html('$ 290'); 
//           $("#device-holder").text('Up to 10 Devices');
//         } 
//         if(slider_value > 11){
//           $(".info-price").html('$ 59 / month'); 
//           $(".annual-price").html('$ 590'); 
//           $("#device-holder").text('Up to 20 Devices');
//         } 
//         if(slider_value > 18){
//           $(".info-price").html('$ 89 / month'); 
//           $(".annual-price").html('$ 890'); 
//           $("#device-holder").text('Up to 30 Devices');
//         }
//         if(slider_value > 24){
//           $(".info-price").html('$ 119 / month'); 
//           $(".annual-price").html('$ 1190'); 
//           $("#device-holder").text('Up to 40 Devices');
//         }
//         if(slider_value > 31){
//           $(".info-price").html('$ 149 / month'); 
//           $(".annual-price").html('$ 1490'); 
//           $("#device-holder").text('Up to 50 Devices');
//         } 
        
//       }
      
//       //set business
//       if(slider_value > 38 && slider_value < 83){
//         $("#plan-holder").text('Business Plan:');
        
//         $("#green-highlight").css("width", "314px");
//         $("#orange-highlight").show();
//         $("#blue-highlight").hide();
        
//         /*
//         if(slider_value > 38){ 
//           $(".info-price").html('$ 249 / month'); 
//           $(".annual-price").html('$ 2490');
//           $("#device-holder").text('Up to 50 Devices');
//         }*/
//         if(slider_value > 38){
//           $(".info-price").html('$ 359 / month'); 
//           $(".annual-price").html('$ 3590'); 
//           $("#device-holder").text('Up to 75 Devices');
          
//         }
        
//         if(slider_value < 40){ $("#orange-highlight").hide(); }
//         if(slider_value > 40){ $("#orange-highlight").css("width", ""+(slider_value/4.8)+"%"); }
        
//         if(slider_value > 44){
//           $(".info-price").html('$ 579 / month'); 
//           $(".annual-price").html('$ 5790'); 
//           $("#device-holder").text('Up to 125 Devices');
          
//           $("#orange-highlight").css("width", ""+(slider_value/2.5)+"%");
//         }
        
//         if(slider_value > 50){ $("#orange-highlight").css("width", ""+(slider_value/1.7)+"%"); }
        
//         if(slider_value > 57){
//           $(".info-price").html('$ 799 / month'); 
//           $(".annual-price").html('$ 7990'); 
//         $("#device-holder").text('Up to 175 Devices');
//         }
        
//         if(slider_value > 68){ $("#orange-highlight").css("width", ""+(slider_value/1.6)+"%"); }
        
//         if(slider_value > 70){
//           $(".info-price").html('$ 999 / month'); 
//           $(".annual-price").html('$ 9990'); 
//           $("#device-holder").text('Up to 225 Devices');
//         }
//       }
      
//       //set enterprise
//       if(slider_value > 83){
//         $("#plan-holder").text('Enterprise Plan:');
//       $("#orange-highlight").css("width", "433px");

        
//         if(slider_value > 84){ 
//           $("#blue-highlight").css("width", ""+(slider_value/24)+"%"); 
//           $("#blue-highlight").show();
//         }
//         if(slider_value > 88){ $("#blue-highlight").css("width", ""+(slider_value/10)+"%"); }
//         if(slider_value > 93){ $("#blue-highlight").css("width", ""+(slider_value/8)+"%"); }
//         if(slider_value > 97){ $("#blue-highlight").css("width", ""+(slider_value/6)+"%"); }
                
//         $(".info-price").html('Contact us'); 
//       $(".annual-price").html('');
//       $("#device-holder").text('Unlimited Devices');
//     } 
      
//     }
//   });
    
// });