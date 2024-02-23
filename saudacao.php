<?php
// Verifica se o valor do nome foi enviado via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém o nome do formulário
    $nome = htmlspecialchars($_REQUEST['nome']); // Limpa os dados de entrada para evitar ataques XSS
    
    if (empty($nome)) {
        echo "Nome está vazio.";
    } else {
        echo "Olá, " . $nome . "! Seja bem-vindo(a).";
    }
}
echo "não entrou no if";
?>
