
  const ctx = document.getElementById('myChart').getContext('2d');

  const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient1.addColorStop(0, 'rgba(136, 132, 216, 0.2)');
  gradient1.addColorStop(1, 'rgba(136, 132, 216, 0)');

  const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient2.addColorStop(0, 'rgba(130, 202, 157, 0.2)');
  gradient2.addColorStop(1, 'rgba(130, 202, 157, 0)');

  const gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient3.addColorStop(0, 'rgba(255, 99, 132, 0.2)');
  gradient3.addColorStop(1, 'rgba(255, 99, 132, 0)');

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Visits',
          data: [12, 15, 12, 16, 26],
          fill: true,
          backgroundColor: gradient1,
          borderColor: '#8e44ad',
          tension: 0.4,
          pointBackgroundColor: '#8e44ad',
          pointRadius: 5
        },
        {
          label: 'Likes',
          data: [15, 12, 28, 16, 26],
          fill: true,
          backgroundColor: gradient2,
          borderColor: '#2ecc71',
          tension: 0.4,
          pointBackgroundColor: '#2ecc71',
          pointRadius: 5
        },
        {
          label: 'Conversions',
          data: [12, 15, 16, 16, 26],
          fill: true,
          backgroundColor: gradient3,
          borderColor: '#e74c3c',
          tension: 0.4,
          pointBackgroundColor: '#e74c3c',
          pointRadius: 5
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          enabled: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          display: false
        },
        y: {
          display: false
        }
      },
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          hoverRadius: 6
        }
      }
    }
  });

  // Optional: Recreate gradients on resize to avoid distortion
  window.addEventListener('resize', () => {
    myChart.resize();
  });
