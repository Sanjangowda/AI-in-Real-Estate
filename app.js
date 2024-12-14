// Sample data for prediction (used in a linear regression model)
const data = [
    { location: 'Downtown', bedrooms: 2, bathrooms: 1, size: 800, price: 300000 },
    { location: 'Suburbs', bedrooms: 3, bathrooms: 2, size: 1500, price: 500000 },
    { location: 'City Center', bedrooms: 1, bathrooms: 1, size: 600, price: 250000 },
    { location: 'Downtown', bedrooms: 3, bathrooms: 2, size: 1200, price: 450000 },
    { location: 'Suburbs', bedrooms: 4, bathrooms: 3, size: 2000, price: 650000 },
    { location: 'City Center', bedrooms: 2, bathrooms: 2, size: 900, price: 350000 },
    { location: 'Downtown', bedrooms: 5, bathrooms: 4, size: 2500, price: 800000 },
    { location: 'Suburbs', bedrooms: 3, bathrooms: 1, size: 1000, price: 400000 },
    { location: 'City Center', bedrooms: 2, bathrooms: 1, size: 750, price: 275000 },
    { location: 'Suburbs', bedrooms: 3, bathrooms: 2, size: 1200, price: 500000 }
];

// Dummy coefficients for linear regression model (based on your previous example)
const coefficients = {
    intercept: 50000, // example intercept value
    downtown: 20000,  // example coefficient for 'Downtown' location
    suburbs: 15000,   // example coefficient for 'Suburbs' location
    city_center: 10000, // example coefficient for 'City Center' location
    bedrooms: 10000,
    bathrooms: 5000,
    size: 100
};

// Function to predict the price based on the input values
function calculatePrice(event) {
    event.preventDefault();  // Prevent the form from submitting

    // Get input values
    const size = parseFloat(document.getElementById('size').value);
    const location = document.getElementById('location').value.toLowerCase(); // Convert location to lowercase
    const bedrooms = parseInt(document.getElementById('bedrooms').value);
    const bathrooms = parseInt(document.getElementById('bathrooms').value);

    // Encode location (Downtown = 1, Suburbs = 2, City Center = 3)
    let locationValue = 0;
    if (location === 'downtown') locationValue = coefficients.downtown;
    else if (location === 'suburbs') locationValue = coefficients.suburbs;
    else if (location === 'city center') locationValue = coefficients.city_center;

    // Calculate the predicted price using a simple linear regression formula
    const predictedPrice = coefficients.intercept
        + locationValue
        + coefficients.bedrooms * bedrooms
        + coefficients.bathrooms * bathrooms
        + coefficients.size * size;

    // Display the predicted price
    document.getElementById('predictedPrice').textContent = '₹' + predictedPrice.toFixed(2);
}

function showContactInfo() {
    const contactInfo = document.getElementById('contact-info');
    contactInfo.style.display = contactInfo.style.display === 'block' ? 'none' : 'block';
}
