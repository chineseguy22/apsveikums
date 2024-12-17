// JavaScript to toggle the greeting when the button is clicked
document.getElementById('greetButton').addEventListener('click', function() {
    const greeting = document.getElementById('greeting');
    greeting.classList.toggle('hidden');  // Toggle visibility of the greeting
});

// JavaScript to create falling snowflakes
function createSnowflakes() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const numberOfSnowflakes = 50; // Number of snowflakes to generate
    
    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Randomize the snowflake size and starting position
        const size = Math.random() * 10 + 10; // Random size between 10px and 20px
        const startPosition = Math.random() * 100; // Random start position across the width
        
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.left = `${startPosition}vw`; // Position snowflake horizontally
        
        // Add snowflake to container
        snowflakesContainer.appendChild(snowflake);
    }
}

// Initialize the snowflakes when the page loads
window.onload = createSnowflakes;
