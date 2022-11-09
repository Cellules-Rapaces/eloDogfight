var labels = [];
var data_m2000c_elos = [];

// Chargement des datas du pilote
$.ajax({
        async:false,
        url: '../../data/elodf_1v1_stats_CoubyStark.json',
        dataType: 'json',
        success: function(data_pilote)
        {
          // Data tableau ELOs M2000C
          if (data_pilote != "") {
            labels_m2000c_elos_Chart = data_pilote.M2000C.Match_date; // axe X
            data_m2000c_elos = data_pilote.M2000C.ELO;                // axe Y
          }
        }
        });

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
