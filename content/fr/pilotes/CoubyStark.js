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

const myChart = new Chart(
  document.getElementById('m2000c_elos'),
  config
);
