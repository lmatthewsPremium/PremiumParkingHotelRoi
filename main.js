function updateYearlyRevenue() {
    const hotelRooms = parseInt(document.getElementById("hotelRooms").value) || 0;
    const hotelOccupancyRate = parseInt(document.getElementById("hotelOccupancy").value) / 100 || 0;
    const driveInRate = parseInt(document.getElementById("driveInRate").value) / 100 || 0;
    const overnightRate = parseInt(document.getElementById("overnightRate").value) || 0;
  
    const occupiedRooms = hotelRooms * hotelOccupancyRate;
    const guestsWhoDrive = occupiedRooms * driveInRate;
    const dailyRevenue = guestsWhoDrive * overnightRate;
    const yearlyRevenue = dailyRevenue * 365;
  
    const profit = yearlyRevenue * 0.8;
    const revPar = yearlyRevenue / 365 / hotelRooms;
    const revPor = yearlyRevenue / 365 / occupiedRooms; // Corrected
  
    document.getElementById("calculatedRevenue").innerText = `$${yearlyRevenue.toFixed(2)}`;
    document.getElementById("profit").innerText = `Profit: $${profit.toFixed(2)}`;
    document.getElementById("revPar").innerText = `RevPar: $${revPar.toFixed(2)}`;
    document.getElementById("revPor").innerText = `RevPor: $${revPor.toFixed(2)}`;
}

// Initial update on page load
document.addEventListener('DOMContentLoaded', updateYearlyRevenue);

// Attach event listeners to inputs for real-time updates
document.getElementById("hotelRooms").addEventListener("input", updateYearlyRevenue);
document.getElementById("hotelOccupancy").addEventListener("input", updateYearlyRevenue);
document.getElementById("driveInRate").addEventListener("input", updateYearlyRevenue);
document.getElementById("overnightRate").addEventListener("input", function() {
    document.getElementById('overnightRateDisplay').innerText = this.value;
    updateYearlyRevenue(); // Call to update calculations when the slider changes
});