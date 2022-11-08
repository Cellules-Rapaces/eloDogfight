---
title: "CoubyStark"
description: ""
lead: "CoubyStark"
draft: false
images: []
---

Page de stats CoubyStark

<div>
  <canvas id="myChart"></canvas>
</div>


<!-- chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<!-- jQuery 3.5.1 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>

<script>
  var labels = [];
  var data_m2000c_elos = [];

  $.ajax({
          async:false,
          url: '../../data/elodf_1v1_stats_CoubyStark.json',
          dataType: 'json',
          success: function(data_pilote)
          {
            if (data_pilote != "") {
              labels = data_pilote.M2000C.Match_date;
              data_m2000c_elos = data_pilote.M2000C.ELO;
            }
          }
          });

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: data_m2000c_elos,
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
</script>