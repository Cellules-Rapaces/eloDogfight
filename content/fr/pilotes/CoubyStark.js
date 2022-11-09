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
              var ac_key = elodf_aircraft_keys[j];
              if (data_pilote[ac_key]) {
                labels_all_elos_Chart.push(ac_key);
                data_all_elos.push(data_pilote[ac_key].ELO[0]);
              };
            };

            // Data tableau ELOs M2000C
            labels_m2000c_elos_Chart = data_pilote.M2000C.Match_date;
            data_m2000c_elos = data_pilote.M2000C.ELO;
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

const data_m2000c_elos_Chart = {
  labels: labels_m2000c_elos_Chart,
  datasets: [{
    label: 'M-2000C ELOs',
    backgroundColor: 'rgb(19, 64, 206)',
    borderColor: 'rgb(19, 64, 206)',
    data: data_m2000c_elos,
  }]
};

const config_m2000c_elos_Chart = {
  type: 'line',
  data: data_m2000c_elos_Chart,
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

const m2000c_elos_Chart = new Chart(
  document.getElementById('m2000c_elos'),
  config_m2000c_elos_Chart
);
