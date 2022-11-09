---
title: "CoubyStark"
description: ""
lead: "CoubyStark"
draft: false
images: []
---

<div>
  <canvas id="m2000c_elos"></canvas>
</div>

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 pt-4 g-3">

  <div class="col">
    <div class="card shadow-sm">
      <h3>Statistiques générales</h3>
      Nombre de matchs joués :
      Victoires :
      Défaites :
    </div>
  </div>

  <div class="col">

  </div>

</div>

<div>
  <canvas id="m2000c_elos"></canvas>
</div>


<!-- chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<!-- jQuery 3.5.1 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
<!-- stats pilote -->
<script>
var labels = [];
var data_m2000c_elos = [];

// Chargement des datas du pilote
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
    label: 'M-2000C ELOs',
    backgroundColor: 'rgb(19, 64, 206)',
    borderColor: 'rgb(19, 64, 206)',
    data: data_m2000c_elos,
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    animations: {
      tension: {
        duration: 100,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: false
      }
    },
    scales: {
      x: {reverse: true}
    }
  }
};

const m2000c_elos = new Chart(
  document.getElementById('m2000c_elos'),
  config
);
</script>
