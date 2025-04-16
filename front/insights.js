// document.addEventListener("DOMContentLoaded", () => {
//     const suggestions = [
//         "Reduce electricity use by 10% to cut 0.5 tons of CO₂ per year.",
//         "Switch to LED bulbs to save energy and reduce emissions.",
//         "Consider carpooling to lower transportation-related carbon footprint."
//     ];

//     const insightsElement = document.getElementById("ai-insight");
//     insightsElement.textContent = suggestions[Math.floor(Math.random() * suggestions.length)];
// });

// document.getElementById('calculateButton').addEventListener('click', async () => {
//     const imageInput = document.getElementById('imageInput');
//     const aiResponseDiv = document.getElementById('aiResponse');

//     aiResponseDiv.textContent = "Calculating...";

//     if (imageInput.files && imageInput.files[0]) {
//         const file = imageInput.files[0];
//         const reader = new FileReader();

//         reader.onload = async (event) => {
//             const base64Image = event.target.result.split(',')[1];

//             try {
//                 const response = await fetch('/calculate-carbon', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({ image: base64Image }),
//                 });

//                 const data = await response.json();
//                 if (data.result) {
//                     aiResponseDiv.textContent = data.result;
//                 } else if (data.error) {
//                     aiResponseDiv.textContent = data.error;
//                 }

//             } catch (error) {
//                 console.error('Error:', error);
//                 aiResponseDiv.textContent = 'An error occurred during calculation.';
//             }
//         };

//         reader.readAsDataURL(file);
//     } else {
//         aiResponseDiv.textContent = 'Please select an image.';
//     }
// });


document.addEventListener("DOMContentLoaded", () => {
    // Suggestions for AI insights
    const insights = [
        "Reduce electricity use by 10% to cut 0.5 tons of CO₂ per year.",
        "Switch to LED bulbs to save energy and reduce emissions.",
        "Consider carpooling to lower transportation-related carbon footprint.",
        "Opt for electric vehicles to significantly reduce emissions.",
        "Implement a recycling routine to minimize landfill waste."
    ];

    // Display a random AI insight when the page loads
    const aiInsightElement = document.getElementById("ai-insight");
    aiInsightElement.textContent = insights[Math.floor(Math.random() * insights.length)];
});

document.getElementById('calculateButton').addEventListener('click', async () => {
    const imageInput = document.getElementById('imageInput');
    const aiResponseDiv = document.getElementById('aiResponse');

    aiResponseDiv.textContent = "Calculating...";

    // Handle the image input and process it
    if (imageInput.files && imageInput.files[0]) {
        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = async (event) => {
            const base64Image = event.target.result.split(',')[1];

            try {
                const response = await fetch('/calculate-carbon', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ image: base64Image }),
                });

                const data = await response.json();
                if (data.result) {
                    aiResponseDiv.textContent = data.result;
                } else if (data.error) {
                    aiResponseDiv.textContent = data.error;
                }

            } catch (error) {
                console.error('Error:', error);
                aiResponseDiv.textContent = 'An error occurred during calculation.';
            }
        };

        reader.readAsDataURL(file);
    } else {
        aiResponseDiv.textContent = 'Please select an image.';
    }
});

