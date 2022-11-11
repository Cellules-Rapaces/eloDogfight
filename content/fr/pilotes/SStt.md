---
title: "SStt"
description: ""
lead: "SStt"
draft: false
images: []
---

<!-- Flag icons -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/css/flag-icons.min.css" rel="stylesheet">

<section class="section section-sm">
<div class="row pt-4 pb-4 g-2">

  <div class="col">
    <div class="card shadow-sm">
      <div class="card-body">
        <h3>Statistiques générales</h3>
        Nombre de matchs joués : <span class="total_combats"></span><br />
        Victoires : <span class="total_victoires"></span><br />
        Défaites : <span class="total_defaites"></span><br />
        Kill ratio total : <span class="total_killratio"></span><br />
        <br />
      </div>
    </div>
  </div>

  <div class="col">
    <div>
      <canvas id="all_elos"></canvas>
    </div>
  </div>

  <div class="w-100"></div>

  <div class="M2000C"></div>
  <div class="FA18C"></div>
  <div class="F16C50"></div>
  <div class="F15C"></div>
  <div class="Su27"></div>
  <div class="MiG29S"></div>
  <div class="JF17"></div>
  <div class="F14B"></div>
  <div class="Su33"></div>
  <div class="F14A"></div>
  <div class="MiG21Bis"></div>
  <div class="F5E"></div>
  <div class="F86F"></div>
  <div class="L39C"></div>
  <div class="MiG19P"></div>
  <div class="AV8B"></div>
  <div class="AJS37"></div>
  <div class="MiG15Bis"></div>
  <div class="C101CC"></div>
  <div class="MF1CE"></div>

</div>


</section>

<!-- chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<!-- jQuery 3.5.1 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
<!-- stats pilote -->
<script>
var labels_all_elos_Chart = [];
var data_all_elos =[];
var labels_elos_Chart = [];
var data_elos = [];
var data_classements = [];
var data_elos_Chart = [];
var config_elos_Chart = [];
var elos_Chart = [];
var total_combats = 0;
var derniers_classements = [];
var killsratio = [];
var victoires = [];
var defaites = [];
var total_victoires = 0;
var total_defaites = 0;
var total_kills = 0;
var total_morts = 0;
var total_killsratio = 0;
var country = "";
const elodf_aircraft_keys = ["M2000C","FA18C","F16C50","F15C","Su27","MiG29S","JF17","F14B","Su33","F14A","MiG21Bis","F5E","F86F","L39C","MiG19P","AV8B","AJS37","MiG15Bis","C101CC","MF1CE"];
const ac_icons = new Map([
  ["M2000C", "M2000"],
  ["FA18C", "f-18"],
  ["F16C50", "f-16"],
  ["F15C", "f-15"],
  ["Su27", "su27"],
  ["MiG29S", "mig29"],
  ["JF17", "jf-17"],
  ["F14B", "f-14"],
  ["Su33", "su33"],
  ["F14A", "f-14"],
  ["MiG21Bis", "mig21"],
  ["F5E", "f-5"],
  ["F86F", "f-86"],
  ["L39C", "l39"],
  ["MiG19P", "mig19"],
  ["AV8B", "av8b"],
  ["AJS37", "ajs37"],
  ["MiG15Bis", "mig15"],
  ["C101CC", "c101"],
  ["MF1CE", "mf1"],
]);

// Récupération et manipulations des données du pilote
$.ajax({
        async:false,
        url: '../../data/elodf_1v1_stats_SStt.json',
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
              var popp = labels_elos_Chart[labels_all_elos_Chart[j]].pop();
              // Axe Y ELOs
              data_elos[labels_all_elos_Chart[j]] = data_pilote[labels_all_elos_Chart[j]].ELO;
              var popp = data_elos[labels_all_elos_Chart[j]].pop();
              // Axe Y1 Classements
              data_classements[labels_all_elos_Chart[j]] = data_pilote[labels_all_elos_Chart[j]].Ratings;
              var popp = data_classements[labels_all_elos_Chart[j]].pop();
              // Dernier classement avion
              derniers_classements[labels_all_elos_Chart[j]] = data_pilote[labels_all_elos_Chart[j]].Latest_Ratings[0];
              // Kill ratio sur cet avion
              if (data_pilote[labels_all_elos_Chart[j]].Morts != 0) {
                killsratio[labels_all_elos_Chart[j]] = Math.round(data_pilote[labels_all_elos_Chart[j]].Kills / data_pilote[labels_all_elos_Chart[j]].Morts * 100) / 100;
              } else {
                killsratio[labels_all_elos_Chart[j]] = data_pilote[labels_all_elos_Chart[j]].Kills;
              };
              // Victoires sur cet avion
              victoires[labels_all_elos_Chart[j]] = 0;
              victoires[labels_all_elos_Chart[j]] = data_pilote[labels_all_elos_Chart[j]].Resultats.filter(x => x === 1).length;
              // Défaites sur cet avion
              defaites[labels_all_elos_Chart[j]] = data_elos[labels_all_elos_Chart[j]].length - victoires[labels_all_elos_Chart[j]];
              // Pour stats générales
              total_kills = total_kills + data_pilote[labels_all_elos_Chart[j]].Kills;
              total_morts = total_morts + data_pilote[labels_all_elos_Chart[j]].Morts;
              total_killsratio = Math.round(total_kills / total_morts *100)/100;
            };

            // On calcule la somme des combats joués, victoires et défaites
            for (j = 0; j < labels_all_elos_Chart.length; j++) {
              total_combats = total_combats + data_elos[labels_all_elos_Chart[j]].length;
              total_victoires = total_victoires + victoires[labels_all_elos_Chart[j]];
              total_defaites = total_defaites + defaites[labels_all_elos_Chart[j]];
            };

            // On récupère le pays
            country = data_pilote["Player_Country"];
          }
        }
        });

const data_all_elos_Chart = {
  labels: labels_all_elos_Chart,
  datasets: [{
    label: 'ELOs par avion utilisé',
    backgroundColor: 'rgb(19, 64, 206)',
    borderColor: 'rgb(19, 64, 206)',
    data: data_all_elos,
    yAxisID: 'y3',
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
      },
    },
    scales: {
      y3: {
        type: 'linear',
        display: true,
        position: 'left',
        max: 3000,
      },
    },
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
      type: 'line',
      label: labels_all_elos_Chart[j] + ' ELOs',
      backgroundColor: 'rgb(46, 150, 100)',
      borderColor: 'rgb(46, 150, 100)',
      data: data_elos[labels_all_elos_Chart[j]],
      yAxisID: 'y',
    },
    {
      type: 'bar',
      label: labels_all_elos_Chart[j] + ' Classements',
      backgroundColor: 'rgb(85, 85, 85)',
      borderColor: 'rgb(85, 85, 85)',
      data: data_classements[labels_all_elos_Chart[j]],
      yAxisID: 'y1',
    }
  ]
  };

  config_elos_Chart[labels_all_elos_Chart[j]] = {
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
        x: {reverse: true},
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          max: (data_classements[labels_all_elos_Chart[j]][0]+10),

          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      }
    }
  };

  var ref_graph = labels_all_elos_Chart[j] + "_elos";
  var ref_class = "."+labels_all_elos_Chart[j];
  $(ref_class).replaceWith('<div class="col">'+
    '<div><canvas id='+ref_graph+'></canvas></div>'+
    '</div>'+
    '<div class="col">'+
      '<div class="card shadow-sm">'+
        '<div class="card-body">'+
          '<h3><span class="icon-'+ac_icons.get(labels_all_elos_Chart[j])+'-h"></span> '+ labels_all_elos_Chart[j] +' stats</h3>'+
          'Dernier Classement : #'+ derniers_classements[labels_all_elos_Chart[j]] +'<br />'+
          'Nombre de matchs joués : '+ data_elos[labels_all_elos_Chart[j]].length +'<br />'+
          'Victoires : '+ victoires[labels_all_elos_Chart[j]] +'<br />'+
          'Défaites : '+ defaites[labels_all_elos_Chart[j]] +'<br />'+
          'Kill ratio : '+ killsratio[labels_all_elos_Chart[j]] +'<br />'+
          '<br />'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="w-100"></div>');

  elos_Chart[labels_all_elos_Chart[j]] = new Chart(
    document.getElementById(ref_graph),
    config_elos_Chart[labels_all_elos_Chart[j]]
  );

};

$(".total_combats").replaceWith(total_combats);
$(".total_victoires").replaceWith(total_victoires);
$(".total_defaites").replaceWith(total_defaites);
$(".total_killratio").replaceWith(total_killsratio);
$(".country").replaceWith('<span class=\"fi fi-'+country+'\"></span>');
</script>