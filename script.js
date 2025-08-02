
document.getElementById("carbonForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    travel_km_per_week: parseFloat(document.getElementById("travel").value),
    electricity_kwh_per_month: parseFloat(document.getElementById("electricity").value),
    meat_meals_per_week: parseFloat(document.getElementById("meals").value),
    waste_kg_per_week: parseFloat(document.getElementById("waste").value),
    flights_per_year: parseFloat(document.getElementById("flights").value)
  };

  const emissions = (
    data.travel_km_per_week * 0.21 * 52 +
    data.electricity_kwh_per_month * 12 * 0.7 +
    data.meat_meals_per_week * 52 * 2.5 +
    data.waste_kg_per_week * 52 * 0.8 +
    data.flights_per_year * 250
  ).toFixed(2);

  document.getElementById("result").innerHTML = `
    <h2>Estimated Carbon Footprint</h2>
    <p><strong>${emissions} kg CO₂e/year</strong></p>
    <p>Note: This result is based on a demo calculation.</p>
  `;
});
