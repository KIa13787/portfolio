

    function cardEffect(event)
    {
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const centerX = card.offsetLeft + cardWidth/2;
        const centerY = card.offsetTop + cardHeight/2;
        const positionX = event.clientX - centerX;
        const positionY = event.clientY - centerY;

        const rotateX = ((+1)*25*positionY/(cardHeight/2)).toFixed(2);
        const rotateY = ((-1)*25*positionX/(cardWidth/2)).toFixed(2);

        console.log(rotateX,rotateY);

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      

    }

    function cardBack(event)
    {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        cardTransition();
    }

    function cardTransition()
    {
        clearInterval(card.transitionId);
        card.style.transition = 'transform 400ms';
        card.transitionId = setTimeout(() => {
            card.style.transition = '';
        },400);
    }
  

    function cardEnter(event)
    {
        cardTransition();
    }



    function typeWrite(elemento){


        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        
        textoArray.forEach((letra, i) => {
        
        
          setTimeout(function(){
        
            elemento.innerHTML += letra;
        
        
               }, 150*i)
        
          });
        
        
        
         }
        
        
        
        
         function cardEffect(event)
         {
             const cardWidth = card.offsetWidth;
             const cardHeight = card.offsetHeight;
             const centerX = card.offsetLeft + cardWidth/2;
             const centerY = card.offsetTop + cardHeight/2;
             const positionX = event.clientX - centerX;
             const positionY = event.clientY - centerY;
     
             const rotateX = ((+1)*25*positionY/(cardHeight/2)).toFixed(2);
             const rotateY = ((-1)*25*positionX/(cardWidth/2)).toFixed(2);
     
             console.log(rotateX,rotateY);
     
             card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
           
     
         }
     
         function cardBack(event)
         {
             card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
             cardTransition();
         }
     
         function cardTransition()
         {
             clearInterval(card.transitionId);
             card.style.transition = 'transform 400ms';
             card.transitionId = setTimeout(() => {
                 card.style.transition = '';
             },400);
         }
       
     
         function cardEnter(event)
         {
             cardTransition();
         }

        





         function clickMenu() {
  
  
  
            if  (itens.style.display == 'block'){    
             itens.style.display = 'none'
           } else{
           
           itens.style.display = 'block'
           
           }
           
           
           
           
           
        }
        
        
        function mudouTamanho(){
        
          if (window.innerWidth >= 786){
        
          itens.style.display ="block"
        
        
          }
          else{
        
        itens.style.display =  "none";
        
        
        
          }
        
        }
    

