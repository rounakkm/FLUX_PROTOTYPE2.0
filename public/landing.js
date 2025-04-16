function calculateFootprint() {
    const vehicleEmissions = parseFloat(document.getElementById('vehicle').value);
    const electricityUsage = parseFloat(document.getElementById('electricity').value);
    const flightsDistance = parseFloat(document.getElementById('flights').value);
    const dietImpact = parseFloat(document.getElementById('diet').value);
    const resultDiv = document.getElementById('result');
    const electricityEmissionFactor = 0.82;
    const flightEmissionFactor = 0.118; 

    if (isNaN(vehicleEmissions) || isNaN(electricityUsage) || isNaN(flightsDistance) || isNaN(dietImpact)) {
        resultDiv.textContent = "Please enter valid numbers for all fields.";
        return;
    }

    const electricityCarbon = electricityUsage * electricityEmissionFactor;
    const flightsCarbon = flightsDistance * flightEmissionFactor;
    const totalCarbonFootprintKg = vehicleEmissions + electricityCarbon + flightsCarbon + dietImpact;
    const totalCarbonFootprintTonnes = totalCarbonFootprintKg / 1000;

    result.innerHTML = `
    <div style="text-align: center;">
        <h3>Your Estimated Carbon Footprint:</h3>
        <p>Vehicle Emissions: ${vehicleEmissions.toFixed(2)} kg CO₂</p>
        <p>Electricity Usage: ${electricityUsage.toFixed(2)} kWh ≈ ${electricityCarbon.toFixed(2)} kg CO₂</p>
        <p>Air Travel: ${flightsDistance.toFixed(2)} km ≈ ${flightsCarbon.toFixed(2)} kg CO₂</p>
        <p>Diet Impact: ${dietImpact.toFixed(2)} kg CO₂</p>
        <hr>
        <p>Total Estimated Carbon Footprint: <strong>${totalCarbonFootprintKg.toFixed(2)} kg CO₂ (${totalCarbonFootprintTonnes.toFixed(3)} tonnes CO₂)</strong></p>
        <p class="note">Note: These are rough estimates based on average emission factors. Your actual carbon footprint may vary.</p>
    </div>
`;
}