const movies = [
    {
        poster: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        title: "Interestelar (2014)",
        description: "Dirigido por Christopher Nolan, Interestelar é atualmente meu filme predileto. A história passa por diversos pontos, desde relações entre família a singularidades e buracos negros. Em suma, é o meu filme favorito e, se eu fosse voce, iria assistir agora mesmo."
    },
    {
        poster: "https://m.media-amazon.com/images/M/MV5BNmY0MWY2NDctZDdmMi00MjA1LTk0ZTQtZDMyZTQ1NTNlYzVjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
        title: "Barry Lyndon (1975)",
        description: "Dirigido pela lenda Stanley Kubrick, Barry Lyndon conta uma história marcante, com diversos acontecimentos palpáveis e uma fotografia linda. Cada frame desse filme poderia ser facilmente um quadro pintado. Durante as 3 horas de filme fui teleportado para a época em que se passava, e duvido que com voce não aconteça o mesmo."
    },
    {
        poster: "https://i.etsystatic.com/36067604/r/il/cb4837/4230529114/il_fullxfull.4230529114_fnxx.jpg",
        title: "La Haine (1995)",
        description: "Dirigido por Mathieu Kassovitz, o flime conta a história de uma França em completo caos e 3 amigos, que no meio desse caos, encontram uma arma que um policial perdeu. Ele pode causar estranheza por ser um filme recente e mesmo assim ser preto e branco, mas vai por mim, vale muito a pena conferir essa obra prima do cinema Francês. E lembre-se, o importante não é a queda, é a aterrissagem."
    },
    {
        poster: "https://img.elo7.com.br/product/zoom/264E936/big-poster-filme-blade-runner-1982-lo003-tamanho-90x60-cm-poster-cinema.jpg",
        title: "Blade Runner (1982)",
        description: "Dirigido por Harrison Ford e com grande turbulência na produção, Blade Runner só saiu como o diretor queria 10 anos após a sua estreia nos cinemas. É considerado um neo-noir e uma referência enorme quando se fala de ficção científica, e, sem dúvidas, é muito merecido."
    },
    {
        poster: "https://i5.walmartimages.com/seo/Marvel-Spider-Man-Across-the-Spider-Verse-Official-One-Sheet-Wall-Poster-22-375-x-34_2d95ee13-2a4f-4a6f-aabc-69de79974cb6.3cf8241bdda2089270cce55beaf7d2b5.jpeg",
        title: "Spider-Man: Across the Spider-Verse (2023)",
        description: "Dirigido por Joaquim Dos Santos, Justin K. Thompson e Kemp Powers, Homem-Aranha: Através do Aranhaverso faz o impossível depois do primeiro filme. Ele consegue ser tão surpreendente quanto inovador em diversos aspectos, superando assim a sua primeira versão. Sem dúvidas um filme que superou as expectativas (que já eram bastante altas) de todos."
    }
];

let currentIndex = 0;

function updateMovie() {
    const currentMovie = movies[currentIndex];
    document.getElementById("movie-poster").src = currentMovie.poster;
    document.getElementById("movie-title").innerText = currentMovie.title;
    document.getElementById("movie-description").innerText = currentMovie.description;

    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button")

    prevButton.classList.toggle("disabled", currentIndex === 0);
    nextButton.classList.toggle("disabled", currentIndex === movies.length - 1);
}

function prevMovie() {
    if (currentIndex > 0) {
        currentIndex--;
        updateMovie();
    }
}

function nextMovie() {
    if (currentIndex < movies.length - 1) {
        currentIndex++;
        updateMovie();
    }
}

function prevPoster() {
    if (currentIndex > 0) {
        currentIndex--;
        updateMovie();
    }
}

function nextPoster() {
    if (currentIndex < movies.length - 1) {
        currentIndex++;
        updateMovie();
    }
}

updateMovie();