$(document).ready(function () {
  // Podium M2000C
  $.getJSON("/data/elodf_1v1_podium_M2000C.json",
    function (data) {
      var player_M2000 = '';

      player_M2000 += '<tbody>';

      if (data[0]) {
        player_M2000 += '<tr class="text-center fw-bold align-middle">';
        player_M2000 += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_M2000 += '<td>' +
            data[0]["Country"] + '</td>';

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
            data[1]["Country"] + '</td>';

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
            data[2]["Country"] + '</td>';

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

  // Podium F18C
  $.getJSON("/data/elodf_1v1_podium_FA18C.json",
    function (data) {
      var player_F18 = '';

      player_F18 += '<tbody>';

      if (data[0]) {
        player_F18 += '<tr class="text-center fw-bold align-middle">';
        player_F18 += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_F18 += '<td>' +
            data[0]["Country"] + '</td>';

        player_F18 += '<td>' +
            data[0]["Player"] + '</td>';

        player_F18 += '<td>' +
            data[0]["ELO"] + '</td>';
        player_F18 += '</tr>';
      }

      if (data[1]) {
        player_F18 += '<tr class="text-center align-middle">';
        player_F18 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F18 += '<td>' +
            data[1]["Country"] + '</td>';

        player_F18 += '<td>' +
            data[1]["Player"] + '</td>';

        player_F18 += '<td>' +
            data[1]["ELO"] + '</td>';
        player_F18 += '</tr>';
      }

      if (data[2]) {
        player_F18 += '<tr class="text-center align-middle">';
        player_F18 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F18 += '<td>' +
            data[2]["Country"] + '</td>';

        player_F18 += '<td>' +
            data[2]["Player"] + '</td>';

        player_F18 += '<td>' +
            data[2]["ELO"] + '</td>';
        player_F18 += '</tr>';
      }

      player_F18 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F18').append(player_F18);
  });

  // Podium F14C
  $.getJSON("/data/elodf_1v1_podium_F14B.json",
    function (data) {
      var player_F14 = '';

      player_F14 += '<tbody>';

      if (data[0]) {
        player_F14 += '<tr class="text-center fw-bold align-middle">';
        player_F14 += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_F14 += '<td>' +
            data[0]["Country"] + '</td>';

        player_F14 += '<td>' +
            data[0]["Player"] + '</td>';

        player_F14 += '<td>' +
            data[0]["ELO"] + '</td>';
        player_F14 += '</tr>';
      }

      if (data[1]) {
        player_F14 += '<tr class="text-center align-middle">';
        player_F14 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F14 += '<td>' +
            data[1]["Country"] + '</td>';

        player_F14 += '<td>' +
            data[1]["Player"] + '</td>';

        player_F14 += '<td>' +
            data[1]["ELO"] + '</td>';
        player_F14 += '</tr>';
      }

      if (data[2]) {
        player_F14 += '<tr class="text-center align-middle">';
        player_F14 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F14 += '<td>' +
            data[2]["Country"] + '</td>';

        player_F14 += '<td>' +
            data[2]["Player"] + '</td>';

        player_F14 += '<td>' +
            data[2]["ELO"] + '</td>';
        player_F14 += '</tr>';
      }

      player_F14 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F14').append(player_F14);
  });

  // Podium F16C
  $.getJSON("/data/elodf_1v1_podium_F16C50.json",
    function (data) {
      var player_F16 = '';

      player_F16 += '<tbody>';

      if (data[0]) {
        player_F16 += '<tr class="text-center fw-bold align-middle">';
        player_F16 += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_F16 += '<td>' +
            data[0]["Country"] + '</td>';

        player_F16 += '<td>' +
            data[0]["Player"] + '</td>';

        player_F16 += '<td>' +
            data[0]["ELO"] + '</td>';
        player_F16 += '</tr>';
      }

      if (data[1]) {
        player_F16 += '<tr class="text-center align-middle">';
        player_F16 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F16 += '<td>' +
            data[1]["Country"] + '</td>';

        player_F16 += '<td>' +
            data[1]["Player"] + '</td>';

        player_F16 += '<td>' +
            data[1]["ELO"] + '</td>';
        player_F16 += '</tr>';
      }

      if (data[2]) {
        player_F16 += '<tr class="text-center align-middle">';
        player_F16 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F16 += '<td>' +
            data[2]["Country"] + '</td>';

        player_F16 += '<td>' +
            data[2]["Player"] + '</td>';

        player_F16 += '<td>' +
            data[2]["ELO"] + '</td>';
        player_F16 += '</tr>';
      }

      player_F16 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F16').append(player_F16);
  });

  // Podium JF17C
  $.getJSON("/data/elodf_1v1_podium_JF17.json",
    function (data) {
      var player_JF17 = '';

      player_JF17 += '<tbody>';

      if (data[0]) {
        player_JF17 += '<tr class="text-center fw-bold align-middle">';
        player_JF17 += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_JF17 += '<td>' +
            data[0]["Country"] + '</td>';

        player_JF17 += '<td>' +
            data[0]["Player"] + '</td>';

        player_JF17 += '<td>' +
            data[0]["ELO"] + '</td>';
        player_JF17 += '</tr>';
      }

      if (data[1]) {
        player_JF17 += '<tr class="text-center align-middle">';
        player_JF17 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_JF17 += '<td>' +
            data[1]["Country"] + '</td>';

        player_JF17 += '<td>' +
            data[1]["Player"] + '</td>';

        player_JF17 += '<td>' +
            data[1]["ELO"] + '</td>';
        player_JF17 += '</tr>';
      }

      if (data[2]) {
        player_JF17 += '<tr class="text-center align-middle">';
        player_JF17 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_JF17 += '<td>' +
            data[2]["Country"] + '</td>';

        player_JF17 += '<td>' +
            data[2]["Player"] + '</td>';

        player_JF17 += '<td>' +
            data[2]["ELO"] + '</td>';
        player_JF17 += '</tr>';
      }

      player_JF17 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_JF17').append(player_JF17);
  });


});
