
// Selecionando todos os elementos com a classe "accordion-header"
var headers = document.querySelectorAll('.accordion-header');

// Adicionando um evento de clique a cada cabeçalho do acordeão
headers.forEach(function(header) {
    header.addEventListener('click', function() {
        // Selecionando o corpo do acordeão associado ao cabeçalho clicado
        var body = this.nextElementSibling;

        // Alternando a visibilidade do corpo do acordeão
        if (body.style.display === 'block') {
            body.style.display = 'none';
        } else {
            body.style.display = 'block';
        }
    });
});
