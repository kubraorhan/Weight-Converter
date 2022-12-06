let inputForPound = document.querySelector("#pound");
let inputForKg = document.querySelector("#kg");
let inputForGr = document.querySelector("#gr");
let inputForOunce = document.querySelector("#ounce");
let form = document.querySelector("form");


    form.addEventListener("input", converter);
        
    function converter(e) {
        if(e.target.value == inputForPound.value){
           let x = e.target.value;
           inputForKg.value = (x/2.2046).toFixed(2);
           inputForGr.value = (x/0.022046).toFixed(2);
           inputForOunce.value = (x*16).toFixed(2);
        }

        if(e.target.value == inputForKg.value){
            let x = e.target.value;
           inputForPound.value = (x*2.2046).toFixed(2);
           inputForGr.value = (x*1000).toFixed(2);
           inputForOunce.value = (x*35.274).toFixed(2);
                   }

        if(e.target.value == inputForGr.value){
           let x = e.target.value;
           inputForKg.value = (x/1000).toFixed(2);
           inputForPound.value = (x*0.0022046).toFixed(2);
           inputForOunce.value = (x*0.035274).toFixed(2);
                   }

        if(e.target.value == inputForOunce.value){
           let x = e.target.value;
           inputForKg.value = (x/35.274).toFixed(2);
           inputForGr.value = (x/0.035274).toFixed(2);
           inputForPound.value = (x*0.0625).toFixed(2);
           
        }        
      
    }
