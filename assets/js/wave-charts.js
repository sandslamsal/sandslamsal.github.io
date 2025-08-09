// Deprecated test chart file (axis label diagnostics). Not used by wave app.
// Keeping placeholder to avoid broken references; safe to delete if unused elsewhere.

/*
// Chart.js Axis Label Test
window.addEventListener('DOMContentLoaded', function() {
  var testCanvas = document.getElementById('test-chart');
  if (testCanvas) {
    var ctxTest = testCanvas.getContext('2d');
    new Chart(ctxTest, {
      type: 'line',
      data: {
        labels: [0,1,2,3,4,5],
        datasets: [{
          label: 'Test Data',
          data: [0,1,4,9,16,25],
          borderColor: '#667eea',
          fill: false
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: true } },
        scales: {
          x: { title: { display: true, text: 'Time t (s)' } },
          y: { title: { display: true, text: 'Wave Elevation (m)' } }
        }
      }
    });
  }
});
*/
