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
        <br />
      </div>
    </div>
  </div>

  <div class="col">
    <div>
      <canvas id="all_elos"></canvas>
    </div>
  </div>

</div>

<div>
  <canvas id="m2000c_elos"></canvas>
</div>
</section">

<!-- chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<!-- jQuery 3.5.1 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
<!-- stats pilote -->
<script src="../../js/CoubyStark.js"></script>
<script>
var labels_all_elos_Chart = [];
var data_all_elos =[];
var labels_m2000c_elos_Chart = [];
var data_m2000c_elos = [];
const elodf_aircraft_keys = ["M2000C","FA18C","F16C50","F15C","Su27","MiG29S","JF17","F14B","Su33","F14A","MiG21Bis","F5E","F86F","L39C","MiG19P","AV8B","AJS37","MiG15Bis","C101CC","MF1CE"];

$.ajax({
        async:false,
        url: '../../data/elodf_1v1_stats_CoubyStark.json',
        dataType: 'json',
        success: function(data_pilote)
        {
          if (data_pilote != "") {
            // Construction table des ELOs
            for (j = 0; j < elodf_aircraft_keys.length; j++) {
              console.log(elodf_aircraft_keys[j]);
              console.log(data_pilote);
              var temp = elodf_aircraft_keys[j];
              console.log(data_pilote.temp);
            };
            console.log(labels_all_elos_Chart);
            console.log(data_pilote);

            // Data tableau ELOs M2000C
            labels_m2000c_elos_Chart = data_pilote.M2000C.Match_date;
            data_m2000c_elos = data_pilote.M2000C.ELO;
          }
        }
        });
</script>
