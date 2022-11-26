$(document).ready(function () {
  // Podium M2000C
  $.getJSON("/data/en/elodf_1v1_podium_M2000C.json",
    function (data) {
      var player_M2000 = '';

      player_M2000 += '<tbody>';

      if (data[0]) {
        player_M2000 += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_M2000 += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_M2000 += '<td>' +
            data[0]["国家"] + '</td>';

        player_M2000 += '<td>' +
            data[0]["选手"] + '</td>';

        player_M2000 += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_M2000 += '</tr>';
      }

      if (data[1]) {
        player_M2000 += '<tr class="text-center " style="vertical-align: middle">';
        player_M2000 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_M2000 += '<td>' +
            data[1]["国家"] + '</td>';

        player_M2000 += '<td>' +
            data[1]["选手"] + '</td>';

        player_M2000 += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_M2000 += '</tr>';
      }

      if (data[2]) {
        player_M2000 += '<tr class="text-center " style="vertical-align: middle">';
        player_M2000 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_M2000 += '<td>' +
            data[2]["国家"] + '</td>';

        player_M2000 += '<td>' +
            data[2]["选手"] + '</td>';

        player_M2000 += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_M2000 += '</tr>';
      }

      player_M2000 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_M2000').append(player_M2000);
  });

  // Podium F18C
  $.getJSON("/data/en/elodf_1v1_podium_FA18C.json",
    function (data) {
      var player_F18 = '';

      player_F18 += '<tbody>';

      if (data[0]) {
        player_F18 += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_F18 += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_F18 += '<td>' +
            data[0]["国家"] + '</td>';

        player_F18 += '<td>' +
            data[0]["选手"] + '</td>';

        player_F18 += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_F18 += '</tr>';
      }

      if (data[1]) {
        player_F18 += '<tr class="text-center " style="vertical-align: middle">';
        player_F18 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F18 += '<td>' +
            data[1]["国家"] + '</td>';

        player_F18 += '<td>' +
            data[1]["选手"] + '</td>';

        player_F18 += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_F18 += '</tr>';
      }

      if (data[2]) {
        player_F18 += '<tr class="text-center " style="vertical-align: middle">';
        player_F18 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F18 += '<td>' +
            data[2]["国家"] + '</td>';

        player_F18 += '<td>' +
            data[2]["选手"] + '</td>';

        player_F18 += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_F18 += '</tr>';
      }

      player_F18 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_FA18C').append(player_F18);
  });

  // Podium F14B
  $.getJSON("/data/en/elodf_1v1_podium_F14B.json",
    function (data) {
      var player_F14 = '';

      player_F14 += '<tbody>';

      if (data[0]) {
        player_F14 += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_F14 += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_F14 += '<td>' +
            data[0]["国家"] + '</td>';

        player_F14 += '<td>' +
            data[0]["选手"] + '</td>';

        player_F14 += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_F14 += '</tr>';
      }

      if (data[1]) {
        player_F14 += '<tr class="text-center " style="vertical-align: middle">';
        player_F14 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F14 += '<td>' +
            data[1]["国家"] + '</td>';

        player_F14 += '<td>' +
            data[1]["选手"] + '</td>';

        player_F14 += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_F14 += '</tr>';
      }

      if (data[2]) {
        player_F14 += '<tr class="text-center " style="vertical-align: middle">';
        player_F14 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F14 += '<td>' +
            data[2]["国家"] + '</td>';

        player_F14 += '<td>' +
            data[2]["选手"] + '</td>';

        player_F14 += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_F14 += '</tr>';
      }

      player_F14 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F14B').append(player_F14);
  });

  // Podium F16C
  $.getJSON("/data/en/elodf_1v1_podium_F16C50.json",
    function (data) {
      var player_F16 = '';

      player_F16 += '<tbody>';

      if (data[0]) {
        player_F16 += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_F16 += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_F16 += '<td>' +
            data[0]["国家"] + '</td>';

        player_F16 += '<td>' +
            data[0]["选手"] + '</td>';

        player_F16 += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_F16 += '</tr>';
      }

      if (data[1]) {
        player_F16 += '<tr class="text-center " style="vertical-align: middle">';
        player_F16 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F16 += '<td>' +
            data[1]["国家"] + '</td>';

        player_F16 += '<td>' +
            data[1]["选手"] + '</td>';

        player_F16 += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_F16 += '</tr>';
      }

      if (data[2]) {
        player_F16 += '<tr class="text-center " style="vertical-align: middle">';
        player_F16 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F16 += '<td>' +
            data[2]["国家"] + '</td>';

        player_F16 += '<td>' +
            data[2]["选手"] + '</td>';

        player_F16 += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_F16 += '</tr>';
      }

      player_F16 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F16').append(player_F16);
  });

  // Podium JF17C
  $.getJSON("/data/en/elodf_1v1_podium_JF17.json",
    function (data) {
      var player_JF17 = '';

      player_JF17 += '<tbody>';

      if (data[0]) {
        player_JF17 += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_JF17 += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_JF17 += '<td>' +
            data[0]["国家"] + '</td>';

        player_JF17 += '<td>' +
            data[0]["选手"] + '</td>';

        player_JF17 += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_JF17 += '</tr>';
      }

      if (data[1]) {
        player_JF17 += '<tr class="text-center " style="vertical-align: middle">';
        player_JF17 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_JF17 += '<td>' +
            data[1]["国家"] + '</td>';

        player_JF17 += '<td>' +
            data[1]["选手"] + '</td>';

        player_JF17 += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_JF17 += '</tr>';
      }

      if (data[2]) {
        player_JF17 += '<tr class="text-center " style="vertical-align: middle">';
        player_JF17 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_JF17 += '<td>' +
            data[2]["国家"] + '</td>';

        player_JF17 += '<td>' +
            data[2]["选手"] + '</td>';

        player_JF17 += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_JF17 += '</tr>';
      }

      player_JF17 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_JF17').append(player_JF17);
  });

  // Podium MF1CE
  $.getJSON("/data/en/elodf_1v1_podium_MF1CE.json",
    function (data) {
      var player_MF1CE = '';

      player_MF1CE += '<tbody>';

      if (data[0]) {
        player_MF1CE += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_MF1CE += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_MF1CE += '<td>' +
            data[0]["国家"] + '</td>';

        player_MF1CE += '<td>' +
            data[0]["选手"] + '</td>';

        player_MF1CE += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_MF1CE += '</tr>';
      }

      if (data[1]) {
        player_MF1CE += '<tr class="text-center " style="vertical-align: middle">';
        player_MF1CE += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_MF1CE += '<td>' +
            data[1]["国家"] + '</td>';

        player_MF1CE += '<td>' +
            data[1]["选手"] + '</td>';

        player_MF1CE += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_MF1CE += '</tr>';
      }

      if (data[2]) {
        player_MF1CE += '<tr class="text-center " style="vertical-align: middle">';
        player_MF1CE += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_MF1CE += '<td>' +
            data[2]["国家"] + '</td>';

        player_MF1CE += '<td>' +
            data[2]["选手"] + '</td>';

        player_MF1CE += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_MF1CE += '</tr>';
      }

      player_MF1CE += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_MF1CE').append(player_MF1CE);
  });

  // Podium MiG29S
  $.getJSON("/data/en/elodf_1v1_podium_MiG29S.json",
    function (data) {
      var player_MiG29S = '';

      player_MiG29S += '<tbody>';

      if (data[0]) {
        player_MiG29S += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_MiG29S += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_MiG29S += '<td>' +
            data[0]["国家"] + '</td>';

        player_MiG29S += '<td>' +
            data[0]["选手"] + '</td>';

        player_MiG29S += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_MiG29S += '</tr>';
      }

      if (data[1]) {
        player_MiG29S += '<tr class="text-center " style="vertical-align: middle">';
        player_MiG29S += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_MiG29S += '<td>' +
            data[1]["国家"] + '</td>';

        player_MiG29S += '<td>' +
            data[1]["选手"] + '</td>';

        player_MiG29S += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_MiG29S += '</tr>';
      }

      if (data[2]) {
        player_MiG29S += '<tr class="text-center " style="vertical-align: middle">';
        player_MiG29S += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_MiG29S += '<td>' +
            data[2]["国家"] + '</td>';

        player_MiG29S += '<td>' +
            data[2]["选手"] + '</td>';

        player_MiG29S += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_MiG29S += '</tr>';
      }

      player_MiG29S += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_MiG29S').append(player_MiG29S);
  });

  // Podium Su27
  $.getJSON("/data/en/elodf_1v1_podium_Su27.json",
    function (data) {
      var player_Su27 = '';

      player_Su27 += '<tbody>';

      if (data[0]) {
        player_Su27 += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_Su27 += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_Su27 += '<td>' +
            data[0]["国家"] + '</td>';

        player_Su27 += '<td>' +
            data[0]["选手"] + '</td>';

        player_Su27 += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_Su27 += '</tr>';
      }

      if (data[1]) {
        player_Su27 += '<tr class="text-center " style="vertical-align: middle">';
        player_Su27 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_Su27 += '<td>' +
            data[1]["国家"] + '</td>';

        player_Su27 += '<td>' +
            data[1]["选手"] + '</td>';

        player_Su27 += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_Su27 += '</tr>';
      }

      if (data[2]) {
        player_Su27 += '<tr class="text-center " style="vertical-align: middle">';
        player_Su27 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_Su27 += '<td>' +
            data[2]["国家"] + '</td>';

        player_Su27 += '<td>' +
            data[2]["选手"] + '</td>';

        player_Su27 += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_Su27 += '</tr>';
      }

      player_Su27 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_Su27').append(player_Su27);
  });

  // Podium Su33
  $.getJSON("/data/en/elodf_1v1_podium_Su33.json",
    function (data) {
      var player_Su33 = '';

      player_Su33 += '<tbody>';

      if (data[0]) {
        player_Su33 += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_Su33 += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_Su33 += '<td>' +
            data[0]["国家"] + '</td>';

        player_Su33 += '<td>' +
            data[0]["选手"] + '</td>';

        player_Su33 += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_Su33 += '</tr>';
      }

      if (data[1]) {
        player_Su33 += '<tr class="text-center " style="vertical-align: middle">';
        player_Su33 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_Su33 += '<td>' +
            data[1]["国家"] + '</td>';

        player_Su33 += '<td>' +
            data[1]["选手"] + '</td>';

        player_Su33 += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_Su33 += '</tr>';
      }

      if (data[2]) {
        player_Su33 += '<tr class="text-center " style="vertical-align: middle">';
        player_Su33 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_Su33 += '<td>' +
            data[2]["国家"] + '</td>';

        player_Su33 += '<td>' +
            data[2]["选手"] + '</td>';

        player_Su33 += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_Su33 += '</tr>';
      }

      player_Su33 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_Su33').append(player_Su33);
  });

  // Podium F15C
  $.getJSON("/data/en/elodf_1v1_podium_F15C.json",
    function (data) {
      var player_F15C = '';

      player_F15C += '<tbody>';

      if (data[0]) {
        player_F15C += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_F15C += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_F15C += '<td>' +
            data[0]["国家"] + '</td>';

        player_F15C += '<td>' +
            data[0]["选手"] + '</td>';

        player_F15C += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_F15C += '</tr>';
      }

      if (data[1]) {
        player_F15C += '<tr class="text-center " style="vertical-align: middle">';
        player_F15C += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F15C += '<td>' +
            data[1]["国家"] + '</td>';

        player_F15C += '<td>' +
            data[1]["选手"] + '</td>';

        player_F15C += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_F15C += '</tr>';
      }

      if (data[2]) {
        player_F15C += '<tr class="text-center " style="vertical-align: middle">';
        player_F15C += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F15C += '<td>' +
            data[2]["国家"] + '</td>';

        player_F15C += '<td>' +
            data[2]["选手"] + '</td>';

        player_F15C += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_F15C += '</tr>';
      }

      player_F15C += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F15C').append(player_F15C);
  });

  // Podium MiG21Bis
  $.getJSON("/data/en/elodf_1v1_podium_MiG21Bis.json",
    function (data) {
      var player_MiG21Bis = '';

      player_MiG21Bis += '<tbody>';

      if (data[0]) {
        player_MiG21Bis += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_MiG21Bis += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_MiG21Bis += '<td>' +
            data[0]["国家"] + '</td>';

        player_MiG21Bis += '<td>' +
            data[0]["选手"] + '</td>';

        player_MiG21Bis += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_MiG21Bis += '</tr>';
      }

      if (data[1]) {
        player_MiG21Bis += '<tr class="text-center " style="vertical-align: middle">';
        player_MiG21Bis += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_MiG21Bis += '<td>' +
            data[1]["国家"] + '</td>';

        player_MiG21Bis += '<td>' +
            data[1]["选手"] + '</td>';

        player_MiG21Bis += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_MiG21Bis += '</tr>';
      }

      if (data[2]) {
        player_MiG21Bis += '<tr class="text-center " style="vertical-align: middle">';
        player_MiG21Bis += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_MiG21Bis += '<td>' +
            data[2]["国家"] + '</td>';

        player_MiG21Bis += '<td>' +
            data[2]["选手"] + '</td>';

        player_MiG21Bis += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_MiG21Bis += '</tr>';
      }

      player_MiG21Bis += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_MiG21bis').append(player_MiG21Bis);
  });

  // Podium MiG15Bis
  $.getJSON("/data/en/elodf_1v1_podium_MiG15Bis.json",
    function (data) {
      var player_MiG15Bis = '';

      player_MiG15Bis += '<tbody>';

      if (data[0]) {
        player_MiG15Bis += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_MiG15Bis += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_MiG15Bis += '<td>' +
            data[0]["国家"] + '</td>';

        player_MiG15Bis += '<td>' +
            data[0]["选手"] + '</td>';

        player_MiG15Bis += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_MiG15Bis += '</tr>';
      }

      if (data[1]) {
        player_MiG15Bis += '<tr class="text-center " style="vertical-align: middle">';
        player_MiG15Bis += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_MiG15Bis += '<td>' +
            data[1]["国家"] + '</td>';

        player_MiG15Bis += '<td>' +
            data[1]["选手"] + '</td>';

        player_MiG15Bis += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_MiG15Bis += '</tr>';
      }

      if (data[2]) {
        player_MiG15Bis += '<tr class="text-center " style="vertical-align: middle">';
        player_MiG15Bis += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_MiG15Bis += '<td>' +
            data[2]["国家"] + '</td>';

        player_MiG15Bis += '<td>' +
            data[2]["选手"] + '</td>';

        player_MiG15Bis += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_MiG15Bis += '</tr>';
      }

      player_MiG15Bis += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_MiG15bis').append(player_MiG15Bis);
  });

  // Podium MiG19P
  $.getJSON("/data/en/elodf_1v1_podium_MiG19P.json",
    function (data) {
      var player_MiG19P = '';

      player_MiG19P += '<tbody>';

      if (data[0]) {
        player_MiG19P += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_MiG19P += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_MiG19P += '<td>' +
            data[0]["国家"] + '</td>';

        player_MiG19P += '<td>' +
            data[0]["选手"] + '</td>';

        player_MiG19P += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_MiG19P += '</tr>';
      }

      if (data[1]) {
        player_MiG19P += '<tr class="text-center " style="vertical-align: middle">';
        player_MiG19P += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_MiG19P += '<td>' +
            data[1]["国家"] + '</td>';

        player_MiG19P += '<td>' +
            data[1]["选手"] + '</td>';

        player_MiG19P += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_MiG19P += '</tr>';
      }

      if (data[2]) {
        player_MiG19P += '<tr class="text-center " style="vertical-align: middle">';
        player_MiG19P += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_MiG19P += '<td>' +
            data[2]["国家"] + '</td>';

        player_MiG19P += '<td>' +
            data[2]["选手"] + '</td>';

        player_MiG19P += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_MiG19P += '</tr>';
      }

      player_MiG19P += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_MiG19P').append(player_MiG19P);
  });

  // Podium F86F
  $.getJSON("/data/en/elodf_1v1_podium_F86F.json",
    function (data) {
      var player_F86F = '';

      player_F86F += '<tbody>';

      if (data[0]) {
        player_F86F += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_F86F += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_F86F += '<td>' +
            data[0]["国家"] + '</td>';

        player_F86F += '<td>' +
            data[0]["选手"] + '</td>';

        player_F86F += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_F86F += '</tr>';
      }

      if (data[1]) {
        player_F86F += '<tr class="text-center " style="vertical-align: middle">';
        player_F86F += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F86F += '<td>' +
            data[1]["国家"] + '</td>';

        player_F86F += '<td>' +
            data[1]["选手"] + '</td>';

        player_F86F += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_F86F += '</tr>';
      }

      if (data[2]) {
        player_F86F += '<tr class="text-center " style="vertical-align: middle">';
        player_F86F += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F86F += '<td>' +
            data[2]["国家"] + '</td>';

        player_F86F += '<td>' +
            data[2]["选手"] + '</td>';

        player_F86F += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_F86F += '</tr>';
      }

      player_F86F += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F86F').append(player_F86F);
  });

  // Podium AJS37
  $.getJSON("/data/en/elodf_1v1_podium_AJS37.json",
    function (data) {
      var player_AJS37 = '';

      player_AJS37 += '<tbody>';

      if (data[0]) {
        player_AJS37 += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_AJS37 += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_AJS37 += '<td>' +
            data[0]["国家"] + '</td>';

        player_AJS37 += '<td>' +
            data[0]["选手"] + '</td>';

        player_AJS37 += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_AJS37 += '</tr>';
      }

      if (data[1]) {
        player_AJS37 += '<tr class="text-center " style="vertical-align: middle">';
        player_AJS37 += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_AJS37 += '<td>' +
            data[1]["国家"] + '</td>';

        player_AJS37 += '<td>' +
            data[1]["选手"] + '</td>';

        player_AJS37 += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_AJS37 += '</tr>';
      }

      if (data[2]) {
        player_AJS37 += '<tr class="text-center " style="vertical-align: middle">';
        player_AJS37 += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_AJS37 += '<td>' +
            data[2]["国家"] + '</td>';

        player_AJS37 += '<td>' +
            data[2]["选手"] + '</td>';

        player_AJS37 += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_AJS37 += '</tr>';
      }

      player_AJS37 += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_AJS37').append(player_AJS37);
  });

  // Podium F5E
  $.getJSON("/data/en/elodf_1v1_podium_F5E.json",
    function (data) {
      var player_F5E = '';

      player_F5E += '<tbody>';

      if (data[0]) {
        player_F5E += '<tr class="text-center " style="font-weight:bold; vertical-align: middle">';
        player_F5E += '<td><img src="/images/medal_gold.png" alt=""></td>';

        player_F5E += '<td>' +
            data[0]["国家"] + '</td>';

        player_F5E += '<td>' +
            data[0]["选手"] + '</td>';

        player_F5E += '<td>' +
            data[0]["埃洛"] + '</td>';
        player_F5E += '</tr>';
      }

      if (data[1]) {
        player_F5E += '<tr class="text-center " style="vertical-align: middle">';
        player_F5E += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F5E += '<td>' +
            data[1]["国家"] + '</td>';

        player_F5E += '<td>' +
            data[1]["选手"] + '</td>';

        player_F5E += '<td>' +
            data[1]["埃洛"] + '</td>';
        player_F5E += '</tr>';
      }

      if (data[2]) {
        player_F5E += '<tr class="text-center " style="vertical-align: middle">';
        player_F5E += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F5E += '<td>' +
            data[2]["国家"] + '</td>';

        player_F5E += '<td>' +
            data[2]["选手"] + '</td>';

        player_F5E += '<td>' +
            data[2]["埃洛"] + '</td>';
        player_F5E += '</tr>';
      }

      player_F5E += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F5E').append(player_F5E);
  });

});
