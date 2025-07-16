// Sample hotel data
const hotels = [
    {
        name: "Luxury Beach Resort",
        price: 299,
        rating: 5,
        image: "assets/img/place1.jpg",
        location: "Maldives"
    },
    {
        name: "Mountain View Lodge",
        price: 149,
        rating: 4,
        image: "assets/img/place2.jpg",
        location: "Swiss Alps"
    },
    {
        name: "City Center Hotel",
        price: 89,
        rating: 3,
        image: "assets/img/place3.jpg",
        location: "New York"
    }
];

// Sample flight data
const flights = [
    {
        airline: "SkyWings",
        departure: "10:00 AM",
        arrival: "12:30 PM",
        duration: "2h 30m",
        from: "New York",
        to: "Los Angeles",
        price: 299
    },
    {
        airline: "Ocean Air",
        departure: "2:15 PM",
        arrival: "5:45 PM",
        duration: "3h 30m",
        from: "London",
        to: "Paris",
        price: 199
    }
];

function createHotelCard(hotel) {
    const card = document.createElement('div');
    card.className = 'hotel-card';
    
    card.innerHTML = `
        <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
        <div class="hotel-details">
            <h3 class="hotel-name">${hotel.name}</h3>
            <div class="hotel-price">$${hotel.price}/night</div>
            <div class="hotel-rating">${'★'.repeat(hotel.rating)}${'☆'.repeat(5-hotel.rating)}</div>
            <p class="hotel-location">${hotel.location}</p>
            <button class="button" onclick="bookHotel('${hotel.name}')">Book Now</button>
        </div>
    `;
    
    return card;
}

function createFlightCard(flight) {
    return `
        <div class="flight-card">
            <div class="flight-info">
                <div class="airline-name">${flight.airline}</div>
            </div>
            <div class="flight-info">
                <div class="flight-time">${flight.departure}</div>
                <div class="text-light">${flight.from}</div>
            </div>
            <div class="flight-duration">
                <span>${flight.duration}</span>
            </div>
            <div class="flight-info">
                <div class="flight-time">${flight.arrival}</div>
                <div class="text-light">${flight.to}</div>
            </div>
            <div class="flight-price">
                $${flight.price}
            </div>
            <button class="button" onclick="bookFlight('${flight.airline}', '${flight.from}', '${flight.to}')">
                Book Now
            </button>
        </div>
    `;
}

function initializeHotels() {
    const grid = document.getElementById('hotelsGrid');
    if (grid) {
        hotels.forEach(hotel => {
            grid.appendChild(createHotelCard(hotel));
        });
    }
}

function searchFlights(event) {
    event.preventDefault();
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    
    const resultsContainer = document.getElementById('flightResults');
    resultsContainer.innerHTML = '';

    const filteredFlights = flights.filter(flight => 
        flight.from.toLowerCase().includes(from.toLowerCase()) &&
        flight.to.toLowerCase().includes(to.toLowerCase())
    );

    if (filteredFlights.length === 0) {
        resultsContainer.innerHTML = `
            <div class="text-center padding-2">
                No flights found for your search criteria. Please try different dates or destinations.
            </div>
        `;
        return;
    }

    filteredFlights.forEach(flight => {
        resultsContainer.innerHTML += createFlightCard(flight);
    });
}

function bookHotel(hotelName) {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }
    alert(`Booking ${hotelName}...`);
}

function bookFlight(airline, from, to) {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }
    alert(`Booking flight with ${airline} from ${from} to ${to}...`);
}

function isLoggedIn() {
    // This should be replaced with actual authentication check
    return false;
}

// Initialize features when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeHotels();
    
    // Set minimum date to today for flight search
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
    }
});

// Sample data for best places
const bestPlaces = [
    {
        name: "Santorini, Greece",
        image: "assets/img/place1.jpg",
        description: "Beautiful white-washed buildings and stunning sunsets over the Aegean Sea.",
        rating: 4.9
    },
    {
        name: "Machu Picchu, Peru",
        image: "assets/img/place2.jpg",
        description: "Ancient Incan city set high in the Andes Mountains.",
        rating: 4.8
    },
    {
        name: "Maldives",
        image: "assets/img/place3.jpg",
        description: "Crystal clear waters and luxurious overwater bungalows.",
        rating: 4.9
    },
    {
        name: "Banff National Park, Canada",
        image: "assets/img/place4.jpg",
        description: "Stunning mountain landscapes and pristine lakes.",
        rating: 4.7
    }
];

// Enhanced special offers data
const specialOffers = [
    {
        title: "Luxury Maldives Escape",
        icon: "ri-island-line",
        description: "7 days in an overwater villa with all-inclusive meals and spa treatments",
        price: "$2,999",
        tag: "30% OFF",
        validUntil: "2024-08-31",
        features: [
            "Overwater Villa",
            "All-Inclusive Meals",
            "Daily Spa Treatment",
            "Water Sports"
        ],
        isPremium: true
    },
    {
        title: "Swiss Alps Adventure",
        icon: "ri-mountain-line",
        description: "5 days hiking tour with luxury accommodation and guided experiences",
        price: "$1,799",
        tag: "HOT DEAL",
        validUntil: "2024-07-15",
        features: [
            "Luxury Lodge Stay",
            "Professional Guide",
            "Equipment Included",
            "Mountain Training"
        ],
        isNew: true
    },
    {
        title: "European City Explorer",
        icon: "ri-building-line",
        description: "10 days touring Paris, Rome, and Barcelona with exclusive access",
        price: "$2,499",
        tag: "BEST SELLER",
        validUntil: "2024-09-30",
        features: [
            "5-Star Hotels",
            "Skip-the-Line Access",
            "Private Tours",
            "Luxury Transport"
        ]
    }
];

// Function to create place cards
function createPlaceCard(place) {
    return `
        <div class="place-card">
            <img src="${place.image}" alt="${place.name}" class="place-image">
            <div class="place-details">
                <h3 class="place-name">${place.name}</h3>
                <div class="place-rating">
                    <i class="ri-star-fill"></i>
                    <span>${place.rating}</span>
                </div>
                <p class="place-description">${place.description}</p>
                <button class="button" onclick="explorePlace('${place.name}')">
                    Explore Now
                </button>
            </div>
        </div>
    `;
}

// Enhanced function to create offer cards
function createOfferCard(offer) {
    const features = offer.features.map(feature => `
        <li class="offer-feature">
            <i class="ri-check-line"></i>
            <span>${feature}</span>
        </li>
    `).join('');

    return `
        <div class="offer-card ${offer.isPremium ? 'premium' : ''} ${offer.isNew ? 'new' : ''}">
            <i class="${offer.icon} offer-icon"></i>
            <span class="offer-tag">${offer.tag}</span>
            <h3 class="offer-title">${offer.title}</h3>
            <p class="offer-description">${offer.description}</p>
            <ul class="offer-features">
                ${features}
            </ul>
            <div class="offer-price">${offer.price}</div>
            <span class="offer-validity">Valid until ${formatDate(offer.validUntil)}</span>
            <button class="offer-button" onclick="bookOffer('${offer.title}')">
                Book Now
            </button>
        </div>
    `;
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Function to handle place exploration
function explorePlace(placeName) {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }
    alert(`Exploring ${placeName}...`);
}

// Function to handle offer booking
function bookOffer(offerTitle) {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }
    alert(`Booking ${offerTitle}...`);
}

// Initialize places and offers when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize places
    const placesGrid = document.getElementById('placesGrid');
    if (placesGrid) {
        bestPlaces.forEach(place => {
            placesGrid.innerHTML += createPlaceCard(place);
        });
    }

    // Initialize offers
    const offersGrid = document.getElementById('offersGrid');
    if (offersGrid) {
        specialOffers.forEach(offer => {
            offersGrid.innerHTML += createOfferCard(offer);
        });
    }
});
