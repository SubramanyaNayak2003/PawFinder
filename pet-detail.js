// Pet data (same as pets.js)
// const pets = [
//     { id: 1, name: "Max", type: "Dog", breed: "Golden Retriever", age: 2, gender: "Male", image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&q=80", description: "Max is a friendly and energetic Golden Retriever who loves to play fetch and go on long walks. He's great with children and other dogs, making him the perfect family companion.", weight: "28 kgs", color: "Golden", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: true, energyLevel: "High" },
//     { id: 2, name: "Luna", type: "Cat", breed: "Siamese", age: 1, gender: "Female", image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&q=80", description: "Luna is a calm and affectionate Siamese cat who loves to cuddle. She's the perfect lap cat and enjoys quiet environments.", weight: "3 kgs", color: "Cream", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: false, energyLevel: "Low" },
//     { id: 3, name: "Charlie", type: "Dog", breed: "Labrador", age: 3, gender: "Male", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80", description: "Charlie is a well-trained and gentle Labrador who's great with kids. He knows basic commands and loves to swim.", weight: "23 kgs", color: "Yellow", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: true, energyLevel: "Medium" },
//     { id: 4, name: "Bella", type: "Cat", breed: "Persian", age: 2, gender: "Female", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&q=80", description: "Bella is a sweet and quiet Persian cat who loves to cuddle. She requires regular grooming but is worth every minute.", weight: "3 kgs", color: "White", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: true, energyLevel: "Low" },
//     { id: 5, name: "Rocky", type: "Dog", breed: "German Shepherd", age: 4, gender: "Male", image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80", description: "Rocky is a loyal and protective German Shepherd, making him a great family dog and watchdog.", weight: "25 kgs", color: "Black & Tan", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: false, energyLevel: "High" },
//     { id: 6, name: "Milo", type: "Cat", breed: "Maine Coon", age: 3, gender: "Male", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80", description: "Milo is a playful and gentle giant Maine Coon. Despite his size, he's incredibly gentle and loves to play.", weight: "5 kgs", color: "Brown Tabby", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: true, energyLevel: "Medium" }
// ];

const pets = [
    { id: 1, name: "Max", type: "Dog", breed: "Golden Retriever", age: 2, gender: "Male", image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&q=80", description: "Max is a friendly and energetic Golden Retriever who loves to play fetch and go on long walks. He's great with children and other dogs, making him the perfect family companion.", weight: "28 kgs", color: "Golden", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: true, energyLevel: "High" },
    { id: 2, name: "Luna", type: "Cat", breed: "Siamese", age: 1, gender: "Female", image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&q=80", description: "Luna is a calm and affectionate Siamese cat who loves to cuddle. She's the perfect lap cat and enjoys quiet environments.", weight: "3 kgs", color: "Cream", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: false, energyLevel: "Low" },
    { id: 3, name: "Charlie", type: "Dog", breed: "Labrador", age: 3, gender: "Male", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80", description: "Charlie is a well-trained and gentle Labrador who's great with kids. He knows basic commands and loves to swim.", weight: "23 kgs", color: "Yellow", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: true, energyLevel: "Medium" },
    { id: 4, name: "Bella", type: "Cat", breed: "Persian", age: 2, gender: "Female", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&q=80", description: "Bella is a sweet and quiet Persian cat who loves to cuddle. She requires regular grooming but is worth every minute.", weight: "3 kgs", color: "White", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: true, energyLevel: "Low" },
    { id: 5, name: "Rocky", type: "Dog", breed: "German Shepherd", age: 4, gender: "Male", image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80", description: "Rocky is a loyal and protective German Shepherd, making him a great family dog and watchdog.", weight: "25 kgs", color: "Black & Tan", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: false, energyLevel: "High" },
    { id: 6, name: "Milo", type: "Cat", breed: "Maine Coon", age: 3, gender: "Male", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80", description: "Milo is a playful and gentle giant Maine Coon. Despite his size, he's incredibly gentle and loves to play.", weight: "5 kgs", color: "Brown Tabby", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: true, energyLevel: "Medium" },
    { id: 7, name: "Daisy", type: "Dog", breed: "Beagle", age: 1, gender: "Female", image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=800&q=80", description: "Daisy is an adventurous young Beagle with a curious nose and a cheerful personality. She loves exploring new scents, playing outdoors, and meeting new people and pets. Her playful energy makes her a perfect match for active families.", weight: "10 kgs", color: "Tri-color (Brown, White & Black)", vaccinated: true, neutered: false, goodWithKids: true, goodWithPets: true, energyLevel: "High" },
    { id: 8, name: "Oliver", type: "Cat", breed: "British Shorthair", age: 5, gender: "Male", image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=800&q=80", description: "Oliver is a calm and independent British Shorthair with a plush blue-gray coat. He enjoys lounging in sunny spots and quietly observing his surroundings. He's affectionate on his own terms and perfectly suited for a peaceful home.", weight: "6 kgs", color: "Blue-Gray", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: true, energyLevel: "Low" },
    { id: 9, name: "Bailey", type: "Dog", breed: "Poodle", age: 2, gender: "Female", image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&q=80", description: "Bailey is an intelligent and elegant Poodle known for her hypoallergenic coat and quick learning skills. She enjoys training sessions, loves performing tricks, and gets along great with children. Her affectionate nature makes her a joy to be around.", weight: "14 kgs", color: "White", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: true, energyLevel: "Medium" },
    { id: 10, name: "Whiskers", type: "Cat", breed: "Tabby", age: 6, gender: "Male", image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=800&q=80", description: "Whiskers is a loving senior Tabby who enjoys naps in the sun and gentle head scratches. Despite his age, he remains affectionate and playful. He's an ideal companion for someone seeking a calm, easy-going cat with lots of love to give.", weight: "4.5 kgs", color: "Brown Tabby", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: true, energyLevel: "Low" },
    { id: 11, name: "Cooper", type: "Dog", breed: "Corgi", age: 1, gender: "Male", image: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=800&q=80", description: "Cooper is an energetic and cheerful Corgi with an adorable smile and short little legs. He loves running around, playing fetch, and meeting new friends. He's affectionate, loyal, and brings a lot of joy wherever he goes.", weight: "11 kgs", color: "Red & White", vaccinated: true, neutered: false, goodWithKids: true, goodWithPets: true, energyLevel: "High" },
    { id: 12, name: "Sophie", type: "Cat", breed: "Ragdoll", age: 4, gender: "Female", image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800&q=80", description: "Sophie is a docile and affectionate Ragdoll cat who loves being held and carried. Her striking blue eyes and silky fur make her truly beautiful. She's gentle, social, and loves spending time with her humans.", weight: "4.5 kgs", color: "Cream & Gray", vaccinated: true, neutered: true, goodWithKids: true, goodWithPets: true, energyLevel: "Low" }
];




// Get pet ID from URL
const urlParams = new URLSearchParams(window.location.search);
const petId = parseInt(urlParams.get('id'));

// Find pet by ID
const pet = pets.find(p => p.id === petId) || pets[0];

// Additional images for gallery
const galleryImages = [
    pet.image,
    pet.image.replace('?w=800', '?w=800&sat=-100'),
    pet.image.replace('?w=800', '?w=800&hue=30'),
    pet.image.replace('?w=800', '?w=800&brightness=10')
];

// Render pet detail
function renderPetDetail() {
    const container = document.getElementById('petDetail');

    container.innerHTML = `
    <div class="pet-gallery">
      <div class="gallery-main">
        <img id="mainImage" src="${galleryImages[0]}" alt="${pet.name}">
      </div>
      <div class="gallery-thumbnails">
        ${galleryImages.map((img, index) => `
          <div class="gallery-thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
            <img src="${img}" alt="${pet.name} photo ${index + 1}">
          </div>
        `).join('')}
      </div>
    </div>

    <div class="pet-info">
      <div class="pet-header">
        <div>
          <h1 class="pet-name">${pet.name}</h1>
          <p class="pet-breed">${pet.breed}</p>
        </div>
        <span class="badge">${pet.type}</span>
      </div>

      <p class="pet-description">${pet.description}</p>

      <div class="pet-details-grid">
        <div class="detail-item">
          <span class="detail-label">Age</span>
          <span class="detail-value">${pet.age} year${pet.age !== 1 ? 's' : ''}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Gender</span>
          <span class="detail-value">${pet.gender}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Weight</span>
          <span class="detail-value">${pet.weight}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Color</span>
          <span class="detail-value">${pet.color}</span>
        </div>
      </div>

      <div class="pet-characteristics">
        <h3 class="characteristics-title">Characteristics</h3>
        
        ${pet.vaccinated ? `
          <div class="characteristic-item">
            <svg class="characteristic-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Vaccinated</span>
          </div>
        ` : ''}
        
        ${pet.neutered ? `
          <div class="characteristic-item">
            <svg class="characteristic-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Spayed/Neutered</span>
          </div>
        ` : ''}
        
        ${pet.goodWithKids ? `
          <div class="characteristic-item">
            <svg class="characteristic-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Good with Children</span>
          </div>
        ` : ''}
        
        ${pet.goodWithPets ? `
          <div class="characteristic-item">
            <svg class="characteristic-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Good with Other Pets</span>
          </div>
        ` : ''}
        
        <div class="characteristic-item">
          <svg class="characteristic-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span>${pet.energyLevel} Energy Level</span>
        </div>
      </div>

      <div class="pet-actions">
        <a href="contact.html?pet=${pet.name}" class="btn btn-primary" style="flex: 1;">
          Adopt ${pet.name}
        </a>
    <!--    <button class="favorite-btn-large btn btn-outline">
          <svg class="nav-logo-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
            </path>
          </svg>
        </button>
    -->
      </div>
    </div>
  `;

    // Add gallery functionality
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    const mainImage = document.getElementById('mainImage');

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            mainImage.src = galleryImages[index];
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', renderPetDetail);