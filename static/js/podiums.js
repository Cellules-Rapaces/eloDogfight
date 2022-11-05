$(document).ready(function () {
  // Podium M2000C
  $.getJSON("/data/elodf_1v1_podium_M2000C.json",
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
});
