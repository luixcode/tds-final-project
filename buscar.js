document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("buscar");
    const resultsDiv = document.getElementById("resultados");
    const selectProvincia = document.getElementById("provincia");

    // Datos de prueba: lista de provincias
    const provinces = [
        {
            name: "Samaná",
            description: "Samaná, ubicada en el noreste de la República Dominicana, es conocida por su belleza natural y su ambiente tranquilo. La región ofrece playas vírgenes como Playa Rincón, famosa por su arena blanca y aguas cristalinas. Samaná es también un lugar privilegiado para el avistamiento de ballenas jorobadas, que migran a sus aguas durante la temporada de enero a marzo. Además, el Parque Nacional Los Haitises, con su impresionante paisaje de manglares y formaciones rocosas, es un destino popular para el ecoturismo. Otros atractivos incluyen el Salto El Limón, una cascada de 50 metros de altura rodeada por una exuberante vegetación tropical, ideal para los amantes de la naturaleza y el senderismo.",
            sites: [
                { name: "Playa Rincón", image: "image_buscar/rincon.jpg" },
                { name: "Parque Nacional Los Haitises", image: "image_buscar/haitises.jpg" },
                { name: "Salto El Limón", image: "image_buscar/limon.jpg" }
            ]
        },
        {
            name: "Punta Cana",
            description: "Punta Cana, situada en la región este de la República Dominicana, es uno de los destinos turísticos más famosos del Caribe. Conocida por sus lujosos resorts todo incluido y playas de arena blanca, Punta Cana atrae a turistas de todo el mundo. Playa Juanillo es una de las playas más exclusivas, con su ambiente tranquilo y aguas turquesas ideales para nadar y practicar deportes acuáticos. Playa Macao es famosa por sus olas, que la convierten en un lugar popular para el surf. El Splash Water Park ofrece diversión para toda la familia con sus emocionantes toboganes y atracciones acuáticas. Punta Cana también es conocida por su vibrante vida nocturna y una amplia gama de actividades recreativas como golf y excursiones en bote.",
            sites: [
                { name: "Playa Juanillo", image: "image_buscar/juanillo.jpg" },
                { name: "Playa Macao", image: "image_buscar/macao.jpg" },
                { name: "Splash Water Park", image: "image_buscar/splash.jpg" }
            ]
        },
        {
            name: "Jarabacoa",
            description: "Jarabacoa, situada en el corazón de la República Dominicana, es conocida por su clima fresco y sus paisajes montañosos. Ubicada en la Cordillera Central, esta región ofrece un escape refrescante del calor tropical. El Salto Jimenoa Two es una de las cascadas más impresionantes, con su caída de agua en medio de un entorno natural exuberante. El Parque La Confluencia, ubicado en la confluencia de los ríos Yaque del Norte y Jimenoa, es perfecto para los amantes del senderismo y el ecoturismo. Rancho Jarabacoa ofrece actividades al aire libre como cabalgatas y rafting. La región también es famosa por su producción de café de alta calidad y su belleza escénica.",
            sites: [
                { name: "Salto Jimenoa Two", image: "image_buscar/jimenoa.jpg" },
                { name: "Parque La Confluencia", image: "image_buscar/confluencia.jpg" },
                { name: "Rancho Jarabacoa", image: "image_buscar/rancho.jpg" }
            ]
        },
        {
            name: "Santo Domingo",
            description: "Santo Domingo, la capital de la República Dominicana, es una ciudad vibrante y rica en historia y cultura. Fundada en 1498, es la ciudad europea más antigua del Nuevo Mundo y su Zona Colonial, declarada Patrimonio de la Humanidad por la UNESCO, alberga numerosas construcciones históricas como la Catedral Primada de América, la primera catedral del continente. El Faro a Colón, un monumento imponente en honor a Cristóbal Colón, y el Jardín Botánico Nacional son otros atractivos importantes. El Pantheon Nacional, una neoclásica edificación que rinde homenaje a los héroes nacionales, y el Mercado Modelo ofrecen una experiencia cultural única. Santo Domingo también es conocida por su animada vida nocturna, con numerosos bares, restaurantes y discotecas.",
            sites: [
                { name: "Faro a Colón", image: "image_buscar/faro.jpg" },
                { name: "National Botanical Garden", image: "image_buscar/garden.jpg" },
                { name: "National Pantheon of the Dominican Republic", image: "image_buscar/panteon.jpg" }
            ]
        }
    ];
    

    function search() {
        const query = searchInput.value.toLowerCase();
        const selectedProvincia = selectProvincia.value.toLowerCase();
        let filteredProvinces = provinces;

        // Reiniciar el select
        selectProvincia.selectedIndex = 0;

        if (query) {
            filteredProvinces = filteredProvinces.filter(province =>
                province.name.toLowerCase().includes(query)
            );
        }

        if (selectedProvincia) {
            filteredProvinces = filteredProvinces.filter(province =>
                province.name.toLowerCase() === selectedProvincia
            );
        }

        resultsDiv.innerHTML = ""; // Limpiar resultados anteriores

        if (filteredProvinces.length > 0) {
            filteredProvinces.forEach(province => {
                const provinceDiv = document.createElement("div");
                provinceDiv.classList.add("province");

                const provinceName = document.createElement("h2");
                provinceName.classList.add("province-name");
                provinceName.textContent = province.name;

                const provinceDescription = document.createElement("p");
                provinceDescription.classList.add("province-description");
                provinceDescription.textContent = province.description;

                const galleryDiv = document.createElement("div");
                galleryDiv.classList.add("gallery");

                province.sites.forEach(site => {
                    const siteDiv = document.createElement("div");
                    siteDiv.classList.add("site");

                    const siteImage = document.createElement("img");
                    siteImage.src = site.image;
                    siteImage.alt = site.name;

                    const siteName = document.createElement("p");
                    siteName.classList.add("site-name");
                    siteName.textContent = site.name;

                    siteDiv.appendChild(siteImage);
                    siteDiv.appendChild(siteName);

                    galleryDiv.appendChild(siteDiv);
                });

                provinceDiv.appendChild(provinceName);
                provinceDiv.appendChild(provinceDescription);
                provinceDiv.appendChild(galleryDiv);

                resultsDiv.appendChild(provinceDiv);
            });
        } else {
            resultsDiv.innerHTML = "<p>No se encontraron resultados.</p>";
        }

        // Limpiar el campo de búsqueda
        searchInput.value = "";
    }

    searchButton.addEventListener("click", search);
    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            search();
        }
    });
});