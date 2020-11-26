/// ejercicio 1
function grande(x){
    gran=[]
    for(var i=0;i<x.length;i++){
      if (x[i]<0){
         gran.push(x[i])
      }
       if (x[i]>0){
         gran.push("big")
      } 
  }
  return gran
 }
console.log(grande([-1,3,5,-5]));
/// ejercicio 2 
function mm(x){
    men=x[0]
    may=0
    for(var i=0;i<x.length;i++){
      if (x[i]>may){
         may=x[i]
      }
       if (x[i]<men){
         men=x[i]
      } 
  }
  console.log(men)
  return may
 }
console.log(mm([1,3,5,8]));
// ejercicio 3
function unootro(x){   
    console.log(x[x.length-2]) 
    for(var i=0;i<x.length;i++){
          if(x[i]%2!=0){
              return(x[i])
          }   
    } 
  }
  console.log(unootro([1,3,5,8]));
  // ejercicio 4
  function doble(x) {
    var dob=[];
    for(var i=0;i<x.length;i++){
          dob.push(x[i]*x[i]);
    }
    return dob;
  }
  console.log(doble([1,2,3]))
  // ejercicio 5
  function par(x){
    pos=[]
    arr=[]
    for(var i=0;i<x.length;i++){
        arr.push(x[i])
    if (x[i]>=0){
        pos.push(x[i])
          } 
    }
arr.pop()
arr.push(pos.length)
return arr
}
console.log(par([-1,1,1,1]));
// ejercicio 6 
function pyi(x){
    var pares=0;
    var impares=0;
    for(var i=0;i<x.length;i++){
        if(x[i]%2==0){
            pares=pares+1
            impares=0
            if(pares==3){
                console.log("¡Es para bien!")
            }
        }
        else{
            impares=impares+1
            pares=0
            if(impares==3){
                console.log("¡Que imparcial!")
            }
        }
    }
}
pyi([2,2,4,4])
// ejercicio 7 
function agrega(x){
    arr=[]
    for(var i=0;i<x.length;i++){
        if (i%2!=0){
            arr.push(x[i]+1)
        }
        else
            arr.push(x[i])
        }      
    return arr
    
}
console.log(agrega([1,2,3,4,5,6,-6]))
// ejercicio 8
function longitud(x){
    var previo=[]
        previo.push(x[0])
        for(var i=1;i<x.length;i++){
               previo.push(x[i-1].length)
            }  
     return previo 
}
console.log(longitud(["programar","dojo", "genial"]))
//ejercicio 9 
function siete(x){
    array=[]
    for(var i=0;i<x.length;i++){
        array.push(x[i]+7)
  }
  return array
}
  console.log(siete([1,2,3]));
  // ejercicio 10 
  function invertir(x){
    var arr=(x);
    var rev= arr.reverse ();
    return rev
   }
   y = invertir([3,1,6,4,2]);
   console.log(y);
   // ejercicio 11
   function negativa(x){
    neg=[]
    for(var i=0;i<x.length;i++){
    if (x[i]<0){
        neg.push(x[i])
    }
    if (x[i]>0){
        neg.push(x[i]*-1)
    }
}
return neg
}
console.log(negativa([1,-3,5]));
// ejercicio 12
function hambriento(x){
    comida=[]
    for(var i=0;i<x.length;i++){
    if (x[i]>0){
        comida.push("yummy")
    }
}
if (comida.length==0){
return("tengo hambre")
}
if (comida.length>0){
return comida
}
}
console.log(hambriento([-1,-3,-5]));
// ejercicio 13 
function cambia(x){
    uno=0;
    dos=0;
    var nuevo=[]
     for(var i=0;i<x.length;i++){
        if(x[i]==x[0]){
            uno=x[i]
            nuevo.push(x[x.length-1])
        }
        else if(x[i]==x[2]){
            dos=x[i]
            nuevo.push(x[x.length-3])
        }
        else if(x[i]==x[x.length-3]){
            nuevo.push(dos)
        }
        else if (x[i]==x[x.length-1]){
            nuevo.push(uno)
        }
        else
            nuevo.push(x[i])
     }
     return nuevo  
 }
 console.log(cambia([1,2,3,4,5,6]))
 // ejercicio 14 
 function escala(x,y){
    var esc=[]
    for(var i=0;i<x.length;i++){
        esc.push(x[i]*y) 
    } 
   return esc   
}
console.log(escala([1,2,3],3)) 
// ayudado por jocelyn casi todas 