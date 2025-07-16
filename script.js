const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer <YOUR_API_TOKEN>'
    }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=pt-br&page=1', options)
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        if (data.results) {
            carregarcardlista(data.results);
        }
    })
    .catch(err => console.error('Erro ao carregar filmes:', err));

const carregarcardlista = (filmes) => {
    const container = document.getElementById('movie-container');
    if (!container) {
        console.error('Container não encontrado');
        return;
    }
    
    filmes.forEach(item => {
        const divCard = document.createElement('div');
        divCard.className = 'col-md-3 col-sm-6 mb-4';
        divCard.innerHTML = `<div class="card h-100">`;
        
        const cardContent = document.createElement('div');
        cardContent.className = 'card';
        divCard.innerHTML = `
            <div class="card h-100">
                <img src="https://image.tmdb.org/t/p/w300${item.poster_path || ''}" class="card-img-top" alt="${item.title || 'Filme'}" style="height: 400px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title">${item.title}</h6>
                    <p class="card-text small flex-grow-1 text-overview">${item.overview || 'Descrição não disponível'}</p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <a href="#" class="text-primary text-decoration-none">Ver mais</a>
                        <small class="text-muted"> <strong>Estréia: </strong>${new Date(item.release_date).toLocaleDateString('pt-BR')}</small>
                    </div>
                </div>
            </div>`;
        
        container.appendChild(divCard);
        console.log(item.title)
    });
};