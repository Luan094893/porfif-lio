//Aqui tudo foi pra cuidar do gradiente de 'informações'
const informacoes = document.getElementById('informações');

// Lista de gradientes
const backgrounds = [
    'linear-gradient(to right, #ff7e5f, #feb47b)',  // Gradiente Pôr do Sol
    'radial-gradient(circle, #ff7e5f, #feb47b)',   // Gradiente Pôr do Sol Radial
    'linear-gradient(to right, #ff9a9e, #fad0c4 99%)',  // Gradiente Rosa-Azul Suave
    'linear-gradient(to right, #a18cd1, #fbc2eb)',  // Gradiente Roxo-Laranja Vibrante
    'linear-gradient(to right, #f7971e, #ffd200)',  // Gradiente Laranja-Dourado (Amanhecer)
    'linear-gradient(to right, #00c6ff, #0072ff)',  // Gradiente Oceano
    'linear-gradient(to right, #00f260, #0575e6)',  // Gradiente Neon Azul-Verde
    'linear-gradient(to right, #f093fb, #f5576c)',  // Gradiente Rosa-Pêssego
    'linear-gradient(to right, #4facfe, #00f2fe)',  // Gradiente Azul Neon
    'linear-gradient(to right, #43e97b, #38f9d7)',  // Gradiente Verde Menta Neon
    'linear-gradient(to right, #fa709a, #fee140)',  // Gradiente Rosa-Dourado
    'linear-gradient(to right, #fbc2eb, #a6c1ee)',  // Gradiente Rosa Claro-Azul Claro
    'linear-gradient(to right, #ff9966, #ff5e62)',  // Gradiente Laranja-Vermelho
    'linear-gradient(to right, #1d976c, #93f9b9)',  // Gradiente Verde-Floresta
    'linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)',  // Gradiente Azul Claro-Três Tonalidades
    'linear-gradient(to right, #ee9ca7, #ffdde1)',  // Gradiente Rosa-Salmão
    'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',  // Gradiente Tricolor Neon
    'linear-gradient(to right, #8e2de2, #4a00e0)',  // Gradiente Roxo Escuro
    'linear-gradient(to right, #e6dada, #274046)'   // Gradiente Cinza-Petróleo (Moderno)
];


// Variável para controlar o índice do gradiente atual
let currentIndex = 0;

informacoes.addEventListener('click', () => {
    // Aplica o próximo gradiente da lista
    informacoes.style.backgroundImage = backgrounds[currentIndex];

    // Atualiza o índice para o próximo clique (cíclico)
    currentIndex = (currentIndex + 1) % backgrounds.length;
});
