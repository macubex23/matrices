function explocion()
{
    alert("BOOM!!");
    document.write("<h1>BOOM! elegiste una area minada :( </h1> ")
}

function ganaste()
{
    
    document.write("Eres un ganador :) ");
}



var campo = [[1 , 0 , 0 ],
             [0 , 1 , 0 ],
             [1 , 1 , 1 ] ];
var textos =[" Cesped "," Bomba "];

var x, y;

alert("estas en un campo minado\n elije una posicion entre 0 y 2 para x y para Y ");
x = prompt("posición en X? (entre 0 y 2)" );
y = prompt("posición en Y? (entre 0 y 2)" );



if(x <= 2 && y <= 2)
    {
        var posicion = campo[x][y]
        document.write("elegiste" + textos[posicion]+ "<br />");
        if(posicion == 1)
            {
              explocion();   
            }
        else
            {
               ganaste(); 
            }
    }
else
{
    document.write("¡Te saliste del campo!");
    explocion();
}



