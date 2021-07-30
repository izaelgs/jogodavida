var celula1 = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

function ligaCelula(id){        
    let elemento = document.getElementById(`cell${id}`);
    let indice = id -1;

    celula1[indice] = true;    
    elemento.classList.add('active');
}

function start(){
    celula1.forEach(function(celula, i){
        indice = i;
        numero = i + 1;
        elemento = document.getElementById(`cell${numero}`);    
     

        switch(numero){
            case 1:
                n1 = i+1;
                n2 = i+4;
                n3 = i+5;
                    var vizinhas = [celula1[n1], celula1[n2], celula1[n3],];
                    amigas = vizinhas.filter(function (e){
                        return e == true;
                    })                    

                    if(amigas.length === 3){               
                        elemento.classList.add('active');
                    }
                    else if(amigas.length < 2){
                        elemento.classList.remove('active');
                    }
                break;

            case 2: case 3:
                    n1 = i-1;
                    n2 = i+1;
                    n3 = i+3;
                    n4 = i+4;
                    n5 = i+5;                        
                        var vizinhas = [celula1[n1], celula1[n2], celula1[n3], celula1[n4], celula1[n5]];
                        amigas = vizinhas.filter(function (e){
                            return e == true;
                        })                                
        
                        if(amigas.length === 3){                          
                            elemento.classList.add('active');
                        }
                        else if(amigas.length < 2){
                            elemento.classList.remove('active');
                        }
                        else if (amigas.length > 3){                         
                            elemento.classList.remove('active');
                        }
                break;

            case 4:
                n1 = i-1;
                n2 = i+3;
                n3 = i+4;
                    var vizinhas = [celula1[n1], celula1[n2], celula1[n3],];
                    amigas = vizinhas.filter(function (e){
                        return e == true;
                    })                    

                    if(amigas.length === 3){                    
                        elemento.classList.add('active');
                    }
                    else if(amigas.length < 2){
                        elemento.classList.remove('active');
                    }
                break;

            case 5: case 9:
                    n1 = i-4;
                    n2 = i-3;
                    n3 = i+1;
                    n4 = i+4;
                    n5 = i+5;                        
                        var vizinhas = [celula1[n1], celula1[n2], celula1[n3], celula1[n4], celula1[n5]];
                        amigas = vizinhas.filter(function (e){
                            return e == true;
                        })        
        
                        if(amigas.length === 3){                        
                            elemento.classList.add('active');
                        }
                        else if(amigas.length < 2){
                            elemento.classList.remove('active');
                        }
                        else if (amigas.length > 3){                        
                            elemento.classList.remove('active');
                        }
                break;

            case 8: case 12:
                    n1 = i-5;
                    n2 = i-4;
                    n3 = i-1;
                    n4 = i+3;
                    n5 = i+4;                        
                        var vizinhas = [celula1[n1], celula1[n2], celula1[n3], celula1[n4], celula1[n5]];
                        amigas = vizinhas.filter(function (e){
                            return e == true;
                        })        
        
                        if(amigas.length === 3){                        
                            elemento.classList.add('active');
                        }
                        else if(amigas.length < 2){
                            elemento.classList.remove('active');
                        }
                        else if (amigas.length > 3){                  
                            elemento.classList.remove('active');
                        }
                break;
        
            case 6: case 7: case 10: case 11:
                n1 = i -5;
                n2 = i -4;
                n3 = i -3;
                n4 = i -1;
                n5 = i +1;
                n6 = i +3;
                n7 = i +4;
                n8 = i +5;
                    var vizinhas = [celula1[n1], celula1[n2], celula1[n3], celula1[n4], celula1[n5], celula1[n6], celula1[n7], celula1[n8],];
                    amigas = vizinhas.filter(function (e){
                        return e == true;
                    })                    

                    if(amigas.length === 3){                 
                        elemento.classList.add('active')
                    }
                    else if(amigas.length < 2){
                        elemento.classList.remove('active')
                    }
                    else if (amigas.length > 3){                  
                        elemento.classList.remove('active');
                    }
                break;
                
            case 13:
                n1 = i-4;
                n2 = i-3;
                n3 = i+1;
                    var vizinhas = [celula1[n1], celula1[n2], celula1[n3],];
                    amigas = vizinhas.filter(function (e){
                        return e == true;
                    })                    

                    if(amigas.length === 3){           
                        elemento.classList.add('active');
                    }
                    else if(amigas.length < 2){
                        elemento.classList.remove('active');
                    }
                break;

            case 14: case 15:
                    n1 = i-1;
                    n2 = i+1;
                    n3 = i-5;
                    n4 = i-4;
                    n5 = i-3;                        
                        var vizinhas = [celula1[n1], celula1[n2], celula1[n3], celula1[n4], celula1[n5]];
                        amigas = vizinhas.filter(function (e){
                            return e == true;
                        })                                
        
                        if(amigas.length === 3){                
                            elemento.classList.add('active');
                        }
                        else if(amigas.length < 2){
                            elemento.classList.remove('active');
                        }
                        else if (amigas.length > 3){                  
                            elemento.classList.remove('active');
                        }
                break;

                case 16:
                    n1 = i-1;
                    n2 = i-5;
                    n3 = i-4;
                        var vizinhas = [celula1[n1], celula1[n2], celula1[n3],];
                        amigas = vizinhas.filter(function (e){
                            return e == true;
                        })                    
    
                        if(amigas.length === 3){                       
                            elemento.classList.add('active');
                        }
                        else if(amigas.length < 2){
                            elemento.classList.remove('active');
                        }
                    break;
        }               
    })

    celula1.forEach(function(celula, i){
        indice = i;
        numero = i + 1;
        elemento = document.getElementById(`cell${numero}`).className;

        if (elemento.indexOf('active') !== -1){        
            celula1[indice] = true;         
        }
        else{
            celula1[indice]=false;
        }
    })
}

function limpa(){    
    celula1.forEach(function(celula, i){
        indice = i;
        numero = i + 1;
        classe = document.getElementById(`cell${numero}`).className;
        elemento = document.getElementById(`cell${numero}`);

        if (classe.indexOf('active') !== -1){            
            celula1[indice] = false;            
            elemento.classList.remove('active');           
        }
        else{
            celula1[indice]=false;            
        }
    })
}
