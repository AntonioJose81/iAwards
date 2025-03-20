import { Chart } from 'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/+esm'
import { CategoryScale, LinearScale, PointElement, LineElement, LineController, Legend, Tooltip } from 'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/+esm'

// Register required Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, LineController, Legend, Tooltip)

// Constants for environmental impact calculations
const IMPACT_FACTORS = {
    trophy: {
        co2: 2.5,    // kg of CO2 saved per trophy
        plastic: 0.5, // kg of plastic avoided per trophy
        trees: 0.1    // equivalent trees saved per trophy
    },
    medal: {
        co2: 1.0,    // kg of CO2 saved per medal
        plastic: 0.2, // kg of plastic avoided per medal
        trees: 0.05   // equivalent trees saved per medal
    }
}

let chart = null

function initializeCalculator() {
    const trophiesInput = document.getElementById('trophies')
    const medalsInput = document.getElementById('medals')
    
    // Initialize chart with correct Chart import
    const ctx = document.getElementById('impactChart').getContext('2d')
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Inicio'],
            datasets: [{
                label: 'CO2 Reducido (kg)',
                data: [0],
                borderColor: '#ff3e3e',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#ffffff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#ffffff'
                    }
                }
            }
        }
    })

    // Add event listeners for real-time updates
    ;[trophiesInput, medalsInput].forEach(input => {
        input.addEventListener('input', updateCalculations)
    })
}

function updateCalculations() {
    const trophies = parseInt(document.getElementById('trophies').value) || 0
    const medals = parseInt(document.getElementById('medals').value) || 0

    // Calculate impacts
    const co2Saved = (trophies * IMPACT_FACTORS.trophy.co2 + medals * IMPACT_FACTORS.medal.co2).toFixed(1)
    const plasticSaved = (trophies * IMPACT_FACTORS.trophy.plastic + medals * IMPACT_FACTORS.medal.plastic).toFixed(1)
    const treesSaved = (trophies * IMPACT_FACTORS.trophy.trees + medals * IMPACT_FACTORS.medal.trees).toFixed(1)

    // Update stats
    document.getElementById('co2-saved').textContent = `${co2Saved} kg`
    document.getElementById('plastic-saved').textContent = `${plasticSaved} kg`
    document.getElementById('trees-saved').textContent = treesSaved

    // Update chart
    updateChart(co2Saved)
}

function updateChart(newValue) {
    const timestamp = new Date().toLocaleTimeString()
    
    chart.data.labels.push(timestamp)
    chart.data.datasets[0].data.push(newValue)

    // Keep only last 10 data points
    if (chart.data.labels.length > 10) {
        chart.data.labels.shift()
        chart.data.datasets[0].data.shift()
    }

    chart.update()
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCalculator)