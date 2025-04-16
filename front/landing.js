function calculateFootprint() {
    const vehicle = parseFloat(document.getElementById('vehicle').value) || 0;
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const flights = parseFloat(document.getElementById('flights').value) || 0;
    const diet = parseFloat(document.getElementById('diet').value) || 0;

    // Constants based on approximate emission factors:
    const electricityFactor = 0.233; // kg CO₂ per kWh
    const flightFactor = 0.115;      // kg CO₂ per km

    const totalCO2 =
        vehicle +
        electricity * electricityFactor +
        flights * flightFactor +
        diet;

    const tons = (totalCO2 / 1000).toFixed(2); // Convert to metric tons

    const result = document.getElementById('result');
    result.innerHTML = `
        <p><strong>Your Estimated Annual Carbon Footprint:</strong></p>
        <p style="font-size:1.5rem; color:#64ffda;">${tons} tons CO₂</p>
        <p>🎯 Aim for less than 2 tons/year to stay eco-friendly!</p>
    `;
}
