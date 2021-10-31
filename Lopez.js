
(function (){
    //Variables y Objetos 
    var app = document.getElementById("app");
    var inputCaracteres = document.getElementById("numero-caracteres")

    var configuracion = {
        caracteres: parseInt(inputCaracteres.value),
		simbolos: true,
		numeros: true,
		mayusculas: true,
		minusculas: true
    }

    var caracteres = {
		numeros: '0 1 2 3 4 5 6 7 8 9',
		simbolos: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
		mayusculas: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
		minusculas: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
	}

//EVENTOS

// Evento para evitar que la app haga un submit
app.addEventListener("submit", function (e){
    e.preventDefault()
})

app.elements.namedItem("btn-mas-uno").addEventListener("click", function(){
    configuracion.caracteres++
    console.log(configuracion.caracteres)
    inputCaracteres.value = configuracion.caracteres
})

//evento con condicioonal para que no permita que el usuario ponga numeros negativos 
app.elements.namedItem("btn-menos-uno").addEventListener("click", function(){
    if (configuracion.caracteres > 1){
    configuracion.caracteres--
    console.log(configuracion.caracteres)
    inputCaracteres.value = configuracion.caracteres
    }
})
app.elements.namedItem("btn-simbolos").addEventListener("click", function(){
    btnToggle(this)
    configuracion.simbolos = !configuracion.simbolos
    console.log("simbolos activados" + configuracion.simbolos)
})
app.elements.namedItem("btn-numeros").addEventListener("click", function(){
    btnToggle(this)
    configuracion.numeros = !configuracion.numeros
    console.log("numeros activados" + configuracion.numeros)
})
app.elements.namedItem("btn-mayusculas").addEventListener("click", function(){
    btnToggle(this)
configuracion.mayusculas = !configuracion.mayusculas
console.log("mayusculas activadas" + configuracion.mayusculas)

})

app.elements.namedItem("btn-generar").addEventListener("click",function(){
    generarPassword()
})

app.elements.namedItem("input-password").addEventListener("click", function (){
    copiarPassword()
})

//FUNCIONES

function btnToggle (elemento) {
    elemento.classList.toggle("false")
    elemento.childNodes[0].classList.toggle("fa-check")
    elemento.childNodes[0].classList.toggle("fa-times")
}


//generador de contraseña 


function generarPassword() {
    var caracteresFinales = ""
    var password = ""

    for (propiedad in configuracion){
        if (configuracion[propiedad] == true){
            caracteresFinales += caracteres[propiedad]
        }
    }
    console.log(caracteresFinales)

    //creando array
    caracteresFinales = caracteresFinales.trim()
    caracteresFinales = caracteresFinales.split(" ")

    console.log(caracteresFinales)
    
    for (var i = 0; i < configuracion.caracteres; i++ ){
        password = password + caracteresFinales[Math.floor(Math.random() * caracteresFinales.length )]
    }

    console.log (password)

    app.elements.namedItem("input-password").value = password
}
// fin de funcion generar password 

function copiarPassword() {
    app.elements.namedItem("input-password").select()
    document.execCommand("copy")
    document.getElementById("alerta-copiado").classList.add("active")
    
    setTimeout(function(){
        document.getElementById("alerta-copiado").classList.remove("active")

    }, 2000)
}

generarPassword()




}()) 