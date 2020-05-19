/*
    Practica para trabajar objetos en js.
    -------------------------------------

    1.Pedir al usuario: su nombre y tres marcas de coches que haya tenido.
    2. Almacenar la información en un array.
    3. Mostrar los datos utilizados al usuario con su nombre.
    4. Realizar un mockup, para visualizar la información por pantalla con las mejores condiciones.
    5. Mostrar tambien la información por consola.

*/

// Inicializamos las variables que contendrán lo que el usuario introduzca.
var usuario = {
    nombre : '',
    marca : [],
    modelo :  [],
    anyo : [],

    // Métodos:
    pedirNombre : function (){
        // Pide el nombre al usuario y lo pinta en pantalla para la bienvenida.
        var nombre = prompt('Introduce tu nombre por favor: ');
        document.write('<h1 class="bienvenido"> Bienvenido/a: ' + nombre + '</h1>');
        this.nombre = nombre;
    },
    pedirCoches : function () {
        // Pide la marca, modelo y año de 3 coches que haya tenido el usuario y los introduce en los arrays pertinentes.
        for (var i = 0; i < 3;) {
            var coche = prompt('Introduce UNA marca de coche que hayas tenido :');
            var modelo = prompt('Introduce el modelo:');
            var anyo = prompt('Introduce el año en el que lo tuviste:');
            this.marca.push(coche);
            this.modelo.push(modelo);
            this.anyo.push(anyo);
            i++;
        }
    },
    sacarContenido : function() {
        // Saca el contenido por pantalla de los arrays previamente rellenados.
        for (var i = 0; i < this.modelo.length; i++) {
            document.write(`
            <figure class="main-section-coche">
                <img src="_assets/img/svg/Icon awesome-car-alt.svg" alt="Icono de un coche">
            </figure>
            <article class="main-section-info">
                    <strong> Marca:</strong> ${this.marca[i]}<br><br>
                    <strong>Modelo:</strong> ${this.modelo[i]}<br><br>
                    <strong>Año:</strong> ${this.anyo[i]}<br><br>
            </article>`);

        }
    }
}

// Llamamos a los metodos
usuario.pedirNombre();
usuario.pedirCoches();
usuario.sacarContenido();
console.log(usuario);