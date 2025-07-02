const plantContainer = document.getElementById('plant-container');
const searchInput = document.getElementById('searchInput');
const typeFilter = document.getElementById('typeFilter');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');

const API_URL = 'https://final-server-n0rs.onrender.com/plants';

let allPlants = [];

async function fetchPlants() {
    plantContainer.innerHTML = '<p class="loading-message">Loading plant facts...</p>';
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        allPlants = await response.json();
        renderPlants(allPlants);
        populateTypeFilter(allPlants);

    } catch (error) {
        console.error('Error fetching plant data:', error);
        plantContainer.innerHTML = `<p class="error-message">Failed to load plant facts. Please ensure json-server is running (run: json-server --watch db.json).</p>`;
    }
}

function renderPlants(plantsToRender) {
    plantContainer.innerHTML = '';
    if (plantsToRender.length === 0) {
        plantContainer.innerHTML = '<p class="loading-message">No plants found matching your criteria.</p>';
        return;
    }
    plantsToRender.forEach(plant => {
        const plantCard = document.createElement('div');
        plantCard.className = 'plant-card';
        plantCard.dataset.plantId = plant.id;

        const plantName = document.createElement('h2');
        const plantImage = document.createElement('img');

        plantName.textContent = plant.name;

        plantImage.src = plant.imageUrl || 'https://placehold.co/300x180/cccccc/333333?text=No+Image';
        plantImage.alt = plant.name;
        plantImage.onerror = () => {
            plantImage.src = 'https://placehold.co/300x180/cccccc/333333?text=Image+Error';
        }

        const plantType = document.createElement('p');
        plantType.className = 'type';
        plantType.textContent = `Type: ${plant.type}`;

        const plantCareLevel = document.createElement('p');
        plantCareLevel.className = 'care-level';
        plantCareLevel.textContent = `Care Level: ${plant.careLevel}`;

        const plantFact = document.createElement('p');
        plantFact.className = 'fun-fact';
        plantFact.textContent = `Fun Fact: ${plant.funFact}`;

        const likeButton = document.createElement('button');
        likeButton.className = 'like-button';
        likeButton.textContent = '❤️ Like';

        plantCard.append(plantName, plantImage, plantType, plantCareLevel, plantFact, likeButton);
        plantContainer.append(plantCard);
    });
}

function populateTypeFilter(plants) {
    const types = new Set(plants.map(plant => plant.type));
    typeFilter.innerHTML = '<option value="">All Types</option>';
    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typeFilter.append(option);
    });
}

function filterAndSearchPlants() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedType = typeFilter.value;

    const filteredPlants = allPlants.filter(plant => {
        const matchesSearch = plant.name.toLowerCase().includes(searchTerm) ||
                            plant.funFact.toLowerCase().includes(searchTerm);

        const matchesType = selectedType === '' || plant.type === selectedType;
        return matchesSearch && matchesType;
    });

    renderPlants(filteredPlants);
}

searchInput.addEventListener('input', filterAndSearchPlants);

typeFilter.addEventListener('change', filterAndSearchPlants);

clearFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    typeFilter.value = '';
    renderPlants(allPlants);
});

plantContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('like-button')) {
        const button = event.target;
        button.classList.toggle('liked');
        if (button.classList.contains('liked')) {
            button.textContent = '❤️ Liked!';
        } else {
            button.textContent = '❤️ Like';
        }

        const plantCard = button.closest('.plant-card');
        const plantId = plantCard ? plantCard.dataset.plantId : null;
        if (plantId) {
            console.log(`Plant ID ${plantId} was ${button.classList.contains('liked') ? 'liked' : 'unliked'}.`);
        }
    }
});

document.addEventListener('DOMContentLoaded', fetchPlants);