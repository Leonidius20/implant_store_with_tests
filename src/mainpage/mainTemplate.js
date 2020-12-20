export default function getHtml({ promos, featuredItems }) {
    return `

    <!-- promo slider -->
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            ${promos.map(item => `
                <a href="#promo/${item.id}" class="carousel-item">
                <img src="${item.cover}" class="d-block w-100" alt="${item.title}">
                <div class="carousel-caption">
                    <h5 class="carousel-promo-title" style="font-size: 3vw">${item.name}</h5>
                    <p class="carousel-promo-text" style="font-size: 2vw">${item.short_description}</p>
                </div>
                </a>
            `).join('')}
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <!-- end of promo slider -->
    
    <div class="container">
        <h1>Featured products</h1>
        <div class="content-container card-deck">
            ${featuredItems.map(product => `
                <div class="card">
                    <img class="card-img-top" src="${product.image}">
                    <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between">
                        <div>
                            <h5 class="card-title">${product.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${product.price}</h6>
                        </div>
                        <a href="#product/${product.id}" class="btn btn-primary">View product</a>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
    
    `;
}