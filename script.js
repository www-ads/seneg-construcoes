```javascript
// =========================================================
// SENEG CONSTRUÇÕES
// JAVASCRIPT PRINCIPAL
// =========================================================


// Seleciona todos os links que apontam para
// alguma seção da própria página.

const links = document.querySelectorAll('a[href^="#"]');


// Percorre cada link.

links.forEach(link => {


    // Detecta quando o usuário clicar.

    link.addEventListener("click", function(event) {


        // Impede o comportamento padrão do navegador.

        event.preventDefault();


        // Descobre qual seção foi selecionada.

        const destino = document.querySelector(
            this.getAttribute("href")
        );


        // Faz uma rolagem suave até a seção.

        if (destino) {

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
```
