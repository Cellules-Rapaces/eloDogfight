---
title: "CoubyStark"
description: ""
lead: "CoubyStark"
draft: false
images: []
---

<section class="section section-sm">
<div class="row pt-4 pb-4 g-2">

  <div class="col">
    <div class="card shadow-sm">
      <div class="card-body">
        <h3>Statistiques générales</h3>
        Nombre de matchs joués : <br />
        Victoires : <br />
        Défaites : <br />
        Kill ratio : <br />
        <br />
      </div>
    </div>
  </div>

  <div class="col">
    <div>
      <canvas id="all_elos"></canvas>
    </div>
  </div>

  <div class="col">
    <div>
      <canvas id="M2000C_elos"></canvas>
    </div>
  </div>

</div>


</section>

<!-- chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<!-- jQuery 3.5.1 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
<!-- stats pilote -->
<!-- <script src="../../js/CoubyStark.js"></script> -->
<script>
var labels_all_elos_Chart = [];
var data_all_elos =[];
var labels_elos_Chart = [];
var data_elos = [];
var data_elos_Chart = [];
var config_elos_Chart = [];
var elos_Chart = [];
const elodf_aircraft_keys = ["M2000C","FA18C","F16C50","F15C","Su27","MiG29S","JF17","F14B","Su33","F14A","MiG21Bis","F5E","F86F","L39C","MiG19P","AV8B","AJS37","MiG15Bis","C101CC","MF1CE"];

// Récupération et manipulations des données du pilote
$.ajax({
        async:false,
        url: '../../data/elodf_1v1_stats_CoubyStark.json',
        dataType: 'json',
        success: function(data_pilote)
        {
          if (data_pilote != "") {
            // Construction table des ELOs des avions utilisés
            for (j = 0; j < elodf_aircraft_keys.length; j++) {
              var ac_key = elodf_aircraft_keys[j];
              if (data_pilote[ac_key]) {
                labels_all_elos_Chart.push(ac_key);
                data_all_elos.push(data_pilote[ac_key].ELO[0]);
              };
            };

            // On balaye les avions utilisés pour construire les tables de data des graphiques à construire
            for (j = 0; j < labels_all_elos_Chart.length; j++) {
              // Axe X
              labels_elos_Chart[labels_all_elos_Chart[j]] = data_pilote[labels_all_elos_Chart[j]].Match_date;
              data_elos[labels_all_elos_Chart[j]] = data_pilote[labels_all_elos_Chart[j]].ELO;
            };
          }
        }
        });

const data_all_elos_Chart = {
  labels: labels_all_elos_Chart,
  datasets: [{
    label: 'ELOs par avion',
    backgroundColor: 'rgb(19, 64, 206)',
    borderColor: 'rgb(19, 64, 206)',
    data: data_all_elos,
  }]
};

const config_all_elos_Chart = {
  type: 'bar',
  data: data_all_elos_Chart,
  options: {
    animations: {
      tension: {
        duration: 100,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: false
      }
    }
  }
};

const all_elos_Chart = new Chart(
  document.getElementById('all_elos'),
  config_all_elos_Chart
);

// On balaye les avions utilisés pour construire les graphiques de ELOs
for (j = 0; j < labels_all_elos_Chart.length; j++) {
  data_elos_Chart[labels_all_elos_Chart[j]] = {
    labels: labels_elos_Chart[labels_all_elos_Chart[j]],
    datasets: [{
      label: 'M-2000C ELOs',
      backgroundColor: 'rgb(19, 64, 206)',
      borderColor: 'rgb(19, 64, 206)',
      data: data_elos[labels_all_elos_Chart[j]],
    }]
  };

  config_elos_Chart[labels_all_elos_Chart[j]] = {
    type: 'line',
    data: data_elos_Chart[labels_all_elos_Chart[j]],
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

  var ref_graph = labels_all_elos_Chart[j] + "_elos";
  elos_Chart[labels_all_elos_Chart[j]] = new Chart(
    document.getElementById(ref_graph),
    config_elos_Chart[labels_all_elos_Chart[j]]
  );
};
</script>
