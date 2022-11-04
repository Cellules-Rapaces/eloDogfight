---
title : "Duels au canon sur DCS World"
description: "Défi combat canon 1v1 sur DCS World."
lead: "Fight's On !"
date: 2020-10-06T08:47:36+00:00
lastmod: 2020-10-06T08:47:36+00:00
draft: false
images: []
---

<img class="mb-2 mx-auto img-fluid" src="../images/ready.png" alt="" >

<section class="section section-sm">
<!-- Podium -->
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 pt-4 g-3">
  <!-- Podium M2000C -->
  <div class="col">
    <div class="card shadow-sm">
      <img src="../images/Trophy_M2000C.png" class="bd-placeholder-img card-img-top" height="100%">
      <table id="table_M2000" class="table table-secondary table-striped table-hover mb-0">
      </table>
      <div class="py-2 mx-auto">
          <a class="btn btn-dark" href="/resultats/classements/classement_m2000c"><i class="fas fa-flag-checkered"></i> Classement <span class="icon-M2000-h"></span></a>
      </div>
    </div>
  </div>

  <!-- Podium F-18 -->
  <div class="col">
    <div class="card shadow-sm">
      <img src="../images/Trophy_F18.png" class="bd-placeholder-img card-img-top" height="100%">
      <table id="table_F18_norvt" class="table table-secondary table-striped table-hover mb-0">
      </table>
      <div class="py-2 mx-auto">
          <a class="btn btn-dark" href="/classements_F18"><i class="fas fa-flag-checkered"></i> Classement <span class="icon-f-18-h"></span></a>
      </div>
    </div>
  </div>

  <!-- Podium F-14 -->
  <div class="col">
    <div class="card shadow-sm">
      <img src="../images/Trophy_F14B.png" class="bd-placeholder-img card-img-top" height="100%">
      <table id="table_F14_norvt" class="table table-secondary table-striped table-hover mb-0">
      </table>
      <div class="py-2 mx-auto">
          <a class="btn btn-dark" href="/classements_F14"><i class="fas fa-flag-checkered"></i> Classement <span class="icon-f-14-h"></span></a>
      </div>
    </div>
  </div>

  <!-- Podium F-16 -->
  <div class="col">
    <div class="card shadow-sm">
      <img src="../images/Trophy_F16.png" class="bd-placeholder-img card-img-top" height="100%">
      <table id="table_F16_norvt" class="table table-secondary table-striped table-hover mb-0">
      </table>
      <div class="py-2 mx-auto">
          <a class="btn btn-dark" href="/classements_F16"><i class="fas fa-flag-checkered"></i> Classement <span class="icon-f-16-h"></span></a>
      </div>
    </div>
  </div>

  <!-- Podium JF-17 -->
  <div class="col">
    <div class="card shadow-sm">
      <img src="../images/Trophy_JF17.png" class="bd-placeholder-img card-img-top" height="100%">
      <table id="table_JF17_norvt" class="table table-secondary table-striped table-hover mb-0">
      </table>
      <div class="py-2 mx-auto">
          <a class="btn btn-dark" href="/classements_JF17"><i class="fas fa-flag-checkered"></i> Classement <span class="icon-jf-17-h"></span></a>
      </div>
    </div>
  </div>

</div>

</section>

<script>
// Podium M2000C
$.getJSON("../data/elodf_1v1_podium_M2000C.json",
  function (data) {
    var player_M2000 = '';

    player_M2000 += '<tbody>';

    if (data[0]) {
      player_M2000 += '<tr class="text-center fw-bold">';
      player_M2000 += '<td><img src="/images/medal_gold.png" alt=""></td>';

      player_M2000 += '<td>' +
          data[0]["Player"] + '</td>';

      player_M2000 += '<td>' +
          data[0]["ELO"] + '</td>';
      player_M2000 += '</tr>';
    }

    if (data[1]) {
      player_M2000 += '<tr class="text-center align-middle">';
      player_M2000 += '<td><img src="/images/medal_silver.png" alt=""></td>';

      player_M2000 += '<td>' +
          data[1]["Player"] + '</td>';

      player_M2000 += '<td>' +
          data[1]["ELO"] + '</td>';
      player_M2000 += '</tr>';
    }

    if (data[2]) {
      player_M2000 += '<tr class="text-center align-middle">';
      player_M2000 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

      player_M2000 += '<td>' +
          data[2]["Player"] + '</td>';

      player_M2000 += '<td>' +
          data[2]["ELO"] + '</td>';
      player_M2000 += '</tr>';
    }

    player_M2000 += '</tbody>';

    //INSERTING ROWS INTO TABLE
    $('#table_M2000').append(player_M2000);
});
</script>
