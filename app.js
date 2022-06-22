const API_KEY = 'https://api.themoviedb.org/3/movie/550?api_key=6f405f479d5508e1b4054722b27ed4aa';

const dadosFilmes = {
    "results": [{
        "backdrop_path": "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
        "id": 338953,
        "original_language": "en",
        "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
        "overview": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
        "popularity": 4757.639,
        "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
        "release_date": "2022-04-06", "title": "Fantastic Beasts: The Secrets of Dumbledore",
        "vote_average": 6.8
    },
    {
        "backdrop_path": "/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg",
        "id": 335787,
        "original_language": "en",
        "original_title": "Uncharted",
        "overview": "A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother.",
        "popularity": 1918.903, "poster_path": "/tlZpSxYuBRoVJBOpUrPdQe9FmFq.jpg",
        "release_date": "2022-02-10",
        "title": "Uncharted",
        "vote_average": 7.1,
    },
    {
        "backdrop_path": "/xHrp2pq73oi9D64xigPjWW1wcz1.jpg",
        "id": 414906,
        "original_language": "en",
        "original_title": "The Batman",
        "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        "popularity": 1887.022, "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        "release_date": "2022-03-01",
        "title": "The Batman",
        "vote_average": 7.8,
    },
    ]
}

const mostraFilmes = (data) =>{

    let dadosFilmes = JSON.parse(data.target.response);
    localStorage.setItem('db_filmes',data.target.response);

    let dadosHTML = '';
      for (let i = 0;i < dadosFilmes.results.length; i++) {

        console.log("oolai");
        let filme = dadosFilmes.results[i];
        dadosHTML += 
        `
        <div class="card col-4">
        <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}"class="card-img-top" alt="FilmeXPTO">
        <div class="card-body">
            <h5 class="card-title">${filme.title}</h5>
            <p class="card-text">${filme.overview}</p>
            <a href="detalhes_filme.html?id=${filme.id}" class="btn btn-primary">go somewhere</a>
        </div>
    </div>
   `    
    }                  
        
    
                        document.getElementById ('divListaFilmes').innerHTML = dadosHTML
}



const mostraErro = (data) => {
    alert('erro de requisição');
}


const init = () => {

    
  
    let xhr = new XMLHttpRequest ();
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=6f405f479d5508e1b4054722b27ed4aa&LENGUAGE=PT-BR";
    xhr.onload = mostraFilmes;
    xhr.onerror = mostraErro;
    xhr.open ('GET', url, true);
    xhr.send ();
}

document.body.onload = init;


