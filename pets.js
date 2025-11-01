// Pet data
const pets = [
    { id: 1, name: "Max", type: "Dog", breed: "Golden Retriever", age: 2, gender: "Male", image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&q=80", description: "Friendly and energetic, loves to play fetch" },
    { id: 2, name: "Luna", type: "Cat", breed: "Siamese", age: 1, gender: "Female", image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&q=80", description: "Calm and affectionate, perfect lap cat" },
    { id: 3, name: "Charlie", type: "Dog", breed: "Labrador", age: 3, gender: "Male", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80", description: "Great with kids, well-trained and gentle" },
    { id: 4, name: "Bella", type: "Cat", breed: "Persian", age: 2, gender: "Female", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&q=80", description: "Sweet and quiet, loves to cuddle" },
    { id: 5, name: "Rocky", type: "Dog", breed: "German Shepherd", age: 4, gender: "Male", image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80", description: "Loyal and protective, great family dog" },
    { id: 6, name: "Milo", type: "Cat", breed: "Maine Coon", age: 3, gender: "Male", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80", description: "Playful and gentle giant" },
    { id: 7, name: "Daisy", type: "Dog", breed: "Beagle", age: 1, gender: "Female", image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=800&q=80", description: "Curious and friendly, loves adventures" },
    { id: 8, name: "Oliver", type: "Cat", breed: "British Shorthair", age: 5, gender: "Male", image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=800&q=80", description: "Calm and independent" },
    { id: 9, name: "Bailey", type: "Dog", breed: "Poodle", age: 2, gender: "Female", image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&q=80", description: "Smart and hypoallergenic" },
    { id: 10, name: "Whiskers", type: "Cat", breed: "Tabby", age: 6, gender: "Male", image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=800&q=80", description: "Loving senior cat" },
    { id: 11, name: "Cooper", type: "Dog", breed: "Corgi", age: 1, gender: "Male", image: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=800&q=80", description: "Energetic and adorable" },
    { id: 12, name: "Sophie", type: "Cat", breed: "Ragdoll", age: 4, gender: "Female", image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800&q=80", description: "Docile and affectionate" }
];

let filteredPets = [...pets];

// Render pets
function renderPets() {
    const grid = document.getElementById('petsGrid');
    const count = document.getElementById('resultsCount');

    count.textContent = `${filteredPets.length} pet${filteredPets.length !== 1 ? 's' : ''} available`;

    grid.innerHTML = filteredPets.map(pet => `
    <a href="pet-detail.html?id=${pet.id}" class="pet-card">
      <div class="pet-card-image">
        <img src="${pet.image}" alt="${pet.name}">
        <!--
        <button class="favorite-btn" aria-label="Add to favorites">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>
        -->
      </div>
      <div class="pet-card-content">
        <div class="pet-card-header">
          <h3 class="pet-card-name">${pet.name}</h3>
          <span class="badge badge-sm">${pet.type}</span>
        </div>
        <p class="pet-card-info">${pet.breed} • ${pet.age} year${pet.age !== 1 ? 's' : ''}</p>
        <p class="pet-card-description">${pet.description}</p>
      </div>
    </a>
  `).join('');
}

// Apply filters
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const typeFilter = document.getElementById('typeFilter').value;
    const ageFilter = document.getElementById('ageFilter').value;
    const genderFilter = document.getElementById('genderFilter').value;

    filteredPets = pets.filter(pet => {
        const matchesSearch = pet.name.toLowerCase().includes(searchTerm) ||
            pet.breed.toLowerCase().includes(searchTerm);
        const matchesType = !typeFilter || pet.type === typeFilter;
        const matchesGender = !genderFilter || pet.gender === genderFilter;

        let matchesAge = true;
        if (ageFilter) {
            const age = pet.age;
            if (ageFilter === '0-1') matchesAge = age <= 1;
            else if (ageFilter === '1-3') matchesAge = age > 1 && age <= 3;
            else if (ageFilter === '3-7') matchesAge = age > 3 && age <= 7;
            else if (ageFilter === '7+') matchesAge = age > 7;
        }

        return matchesSearch && matchesType && matchesAge && matchesGender;
    });

    renderPets();
}

// Clear filters
function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('typeFilter').value = '';
    document.getElementById('ageFilter').value = '';
    document.getElementById('genderFilter').value = '';
    filteredPets = [...pets];
    renderPets();
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    renderPets();

    // Add event listeners
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    document.getElementById('typeFilter').addEventListener('change', applyFilters);
    document.getElementById('ageFilter').addEventListener('change', applyFilters);
    document.getElementById('genderFilter').addEventListener('change', applyFilters);
    document.getElementById('clearFilters').addEventListener('click', clearFilters);
});