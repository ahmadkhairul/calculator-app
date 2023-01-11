<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Laravel</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Nunito', sans-serif;
    }

    .chart-container {
      width: 800px;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>GRAFIK LAMA KUNJUNGAN APLIKASI KALKULATOR DALAM JAM</h1>
    <div class="chart-container">
      <canvas id="myChart"></canvas>
    </div>
  </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
  const ctx = document.getElementById('myChart');

  let data = [];
  @foreach($data as $p)
  data.push({
    username: '{{ $p["username"] }}',
    nested: {
      tooltip: '{{ $p["desc"] }}',
      value: '{{ $p["total"] }}',
    }
  });
  @endforeach

  new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [{
        label: "total kunjungan dalam Jam",
        data,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      parsing: {
        xAxisKey: 'username',
        yAxisKey: 'nested.value'
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(tooltipItem, data) {
              return tooltipItem.raw.nested.tooltip;
            }
          }
        }
      },
    }
  });
</script>

</html>