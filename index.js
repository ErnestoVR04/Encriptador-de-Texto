let botonEncrypt = document.querySelector(".Encrypt-Button");
        botonEncrypt.addEventListener("click", function() {
            let texto = document.getElementById("texto").value;

            function encriptar(palabra) {
                let palabraEncriptada = palabra.replace(/e/g, "enter");
                palabraEncriptada = palabraEncriptada.replace(/i/g, "imes");
                palabraEncriptada = palabraEncriptada.replace(/a/g, "ai");
                palabraEncriptada = palabraEncriptada.replace(/o/g, "ober");
                palabraEncriptada = palabraEncriptada.replace(/u/g, "ufat");
                return palabraEncriptada;
            }
            let mensajeModificado = encriptar(texto);
            let mensaje = document.getElementById("mensaje");
            mensaje.textContent = mensajeModificado;
        });

        let botonDecrypt = document.querySelector(".Decrypt-Button");
        botonDecrypt.addEventListener("click", function(){
            let texto = document.getElementById("texto").value;

            function desencriptar(palabraEncriptada) {
                let palabra = palabraEncriptada.replace(/enter/g, "e");
                palabra = palabra.replace(/imes/g, "i");
                palabra = palabra.replace(/ai/g, "a");
                palabra = palabra.replace(/ober/g, "o");
                palabra = palabra.replace(/ufat/g, "u");
                return palabra;
            }
            let mensajeModificado = desencriptar(texto);
            let mensaje = document.getElementById("mensaje");
            mensaje.textContent = mensajeModificado;
        });

        function copiarAlPortapapeles(mensaje) {
            navigator.clipboard.writeText(mensaje).then(function() {
            console.log("Copiado al portapapeles: " + mensaje);
            },
            function() {
            console.error("No se pudo copiar al portapapeles");
            });
        }

        let botonCopiar = document.querySelector(".Copy-Button");
        botonCopiar.addEventListener("click", function() {
            let mensaje = document.getElementById("mensaje").textContent;
            copiarAlPortapapeles(mensaje);
        });