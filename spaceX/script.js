var URL= 'https://api.spacexdata.com/v3/launches?limit=100';

$(function(){    
    $('.btn').on( 'click' ,function(e){
       
     
       var zzz= 'https://api.spacexdata.com/v3/launches?limit=100';
       var x = "&launch_year=";
       var cf = $(this).text();
       var NEWURL = zzz + x + cf;
       console.log(NEWURL);
       $.getJSON(NEWURL, function(data) {
        
      
       document.getElementById('app').innerHTML = `
    <h1> SpaceX launch programme</h1>
        
        ${data.map(function(flightData){
    
       var mission_name = flightData.mission_name;
       var flight_number = flightData.flight_number;
       var mission_ids = flightData.mission_id;
       var list = mission_ids.map(function(mission){
            return mission;
       });
     
    
    
    
    
       var launch_year = flightData.launch_year;
     
       var successful_launch = flightData.launch_success;
       var successful_landing = flightData.landing_success;
       var links = flightData.links.mission_patch;
      
    
    
        
    
    
          
       
    
        
    return `
    <header class="flex-container">
    <section class="flight-container">
    <div class="equalcontentcolumn">
    <img src=${links} />
    <div class="mission_name">${mission_name} #${flight_number}</div>
    <div> Mission ids:
    
    <li>
    ${list}
    </li>
    
    </div>
    <div class="launch_year">Launch Year: <span>${launch_year}</span></div>
    <div class="launch_year">Successful Launch: <span>${successful_launch}</span></div>
    <div class="launch_year">Successful Landing: <span>${successful_landing}</span></div>
    </div>
    </section>
    </header>
    
    `
    
    }).join(' ')}
           
    `
         });
    });    
});
 
$.getJSON(URL, function(data) {
        
    //console.log(data)
        // console.log(obj.colleges[0].college_name);
   document.getElementById('app').innerHTML = `
<h1> SpaceX launch programme</h1>
    
    ${data.map(function(flightData){

   var mission_name = flightData.mission_name;
   var flight_number = flightData.flight_number;
   var mission_ids = flightData.mission_id;
   var list = mission_ids.map(function(mission){
        return mission;
   });
 




   var launch_year = flightData.launch_year;
 
   var successful_launch = flightData.launch_success;
   var successful_landing = flightData.landing_success;
   var links = flightData.links.mission_patch;
   //console.log(x)


    


      
   

    
return `
<header class="flex-container">
<section class="flight-container">
<div class="equalcontentcolumn">
<img src=${links} />
<div class="mission_name">${mission_name} #${flight_number}</div>
<div> Mission ids:

<li>
${list}
</li>

</div>
<div class="launch_year">Launch Year: <span>${launch_year}</span></div>
<div class="launch_year">Successful Launch: <span>${successful_launch}</span></div>
<div class="launch_year">Successful Landing: <span>${successful_landing}</span></div>
</div>
</section>
</header>

`

}).join(' ')}
       
`
     });

  



     $(document).on('DOMNodeInserted' , function() {
        var high = [];
               
                    $('.flight-container').each(function() {
                     high.push($(this).height());
                        });
                      
            var maxHeight = Math.max.apply(null, high);
                        $('.equalcontentcolumn').height(maxHeight);
           });
           
 $(document).ready(function() { 
                        $('li').click(function() { 
                            $('li.active').removeClass("active"); 
                            $(this).addClass("active"); 
                        }); 
                    }); 
    
