     var data = null
      var array = null
      const myForm = document.getElementById('myForm')
      const csvFile = document.getElementById('csvFemme')
      const csvFile = document.getElementById('csvhomme')
      const csvFile = document.getElementById('csvtotal')

      myForm.addEventListener('submit', function (e) {
        e.preventDefault()
        const input = csvFile.files[0]
        const reader = new FileReader()

        reader.onload = function (e) {
          const text = e.target.result
          data = e.target.result
          array = $.csv.toObjects(data)

          var ctx = document.getElementById('lineChart').getContext('2d')
          var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
              ],
              datasets: [
                {
                  label: 'covid-19',
                  data: [
                    array[0]['Covid-19'],
                    array[1]['Covid-19'],
                    array[2]['Covid-19'],
                    array[3]['Covid-19'],
                    array[4]['Covid-19'],
                    array[5]['Covid-19'],
                    array[6]['Covid-19'],
                    array[7]['Covid-19'],
                    array[8]['Covid-19'],
                    array[9]['Covid-19'],
                    array[10]['Covid-19'],
                    array[11]['Covid-19']
                  ],
                  backgroundColor: ['red'],
                  borderColor: 'rgb(41, 155, 99)',

                  borderWidth: 1
                },
                {
                  label: 'Maladies infectieuses',
                  data: [
                    array[0]['Maladies infectieuses'],
                    array[1]['Maladies infectieuses'],
                    array[2]['Maladies infectieuses'],
                    array[3]['Maladies infectieuses'],
                    array[4]['Maladies infectieuses'],
                    array[5]['Maladies infectieuses'],
                    array[6]['Maladies infectieuses'],
                    array[7]['Maladies infectieuses'],
                    array[8]['Maladies infectieuses'],
                    array[9]['Maladies infectieuses'],
                    array[10]['Maladies infectieuses'],
                    array[11]['Maladies infectieuses']
                  ],
                  backgroundColor: ['blue'],
                  borderColor: 'rgb(41, 155, 99)',

                  borderWidth: 1
                },
               
               
                {
                  label: 'Tumeurs malignes',
                  data: [
                    array[0]['Tumeurs malignes'],
                    array[1]['Tumeurs malignes'],
                    array[2]['Tumeurs malignes'],
                    array[3]['Tumeurs malignes'],
                    array[4]['Tumeurs malignes'],
                    array[5]['Tumeurs malignes'],
                    array[6]['Tumeurs malignes'],
                    array[7]['Tumeurs malignes'],
                    array[8]['Tumeurs malignes'],
                    array[9]['Tumeurs malignes'],
                    array[10]['Tumeurs malignes'],
                    array[11]['Tumeurs malignes']
                  ],
                  backgroundColor: ['green'],
                  borderColor: 'rgb(41, 155, 99)',

                  borderWidth: 1
                },
               
               
               
               
                
                {
                  label: 'Diab??te sucr??',
                  data: [
                    array[0]['Diab??te sucr??'],
                    array[1]['Diab??te sucr??'],
                    array[2]['Diab??te sucr??'],
                    array[3]['Diab??te sucr??'],
                    array[4]['Diab??te sucr??'],
                    array[5]['Diab??te sucr??'],
                    array[6]['Diab??te sucr??'],
                    array[7]['Diab??te sucr??'],
                    array[8]['Diab??te sucr??'],
                    array[9]['Diab??te sucr??'],
                    array[10]['Diab??te sucr??'],
                    array[11]['Diab??te sucr??']
                  ],
                  backgroundColor: ['yellow'],
                  borderColor: 'rgb(41, 155, 99)',

                  borderWidth: 1
                },
                {
                  label: 'D??mence',
                  data: [
                    array[0]['D??mence'],
                    array[1]['D??mence'],
                    array[2]['D??mence'],
                    array[3]['D??mence'],
                    array[4]['D??mence'],
                    array[5]['D??mence'],
                    array[6]['D??mence'],
                    array[7]['D??mence'],
                    array[8]['D??mence'],
                    array[9]['D??mence'],
                    array[10]['D??mence'],
                    array[11]['D??mence']
                  ],
                  backgroundColor: ['pink'],
                  borderColor: 'rgb(41, 155, 99)',

                  borderWidth: 1
                },
                {
                  label: 'Appareil circulatoire',
                  data: [
                    array[0]['Appareil circulatoire'],
                    array[1]['Appareil circulatoire'],
                    array[2]['Appareil circulatoire'],
                    array[3]['Appareil circulatoire'],
                    array[4]['Appareil circulatoire'],
                    array[5]['Appareil circulatoire'],
                    array[6]['Appareil circulatoire'],
                    array[7]['Appareil circulatoire'],
                    array[8]['Appareil circulatoire'],
                    array[9]['Appareil circulatoire'],
                    array[10]['Appareil circulatoire'],
                    array[11]['Appareil circulatoire']
                  ],
                  backgroundColor: ['navy'],
                  borderColor: 'rgb(41, 155, 99)',

                  borderWidth: 1
                },
        
               
                
               
                {
                  label: 'Appareil respiratoire',
                  data: [
                    array[0]['Appareil respiratoire'],
                    array[1]['Appareil respiratoire'],
                    array[2]['Appareil respiratoire'],
                    array[3]['Appareil respiratoire'],
                    array[4]['Appareil respiratoire'],
                    array[5]['Appareil respiratoire'],
                    array[6]['Appareil respiratoire'],
                    array[7]['Appareil respiratoire'],
                    array[8]['Appareil respiratoire'],
                    array[9]['Appareil respiratoire'],
                    array[10]['Appareil respiratoire'],
                    array[11]['Appareil respiratoire']
                  ],
                  backgroundColor: ['brown'],
                  borderColor: 'rgb(41, 155, 99)',

                  borderWidth: 1
                },
                
               
                
              
                {
                  label: 'Cirrhose du foie alcoolique',
                  data: [
                    array[0]['Cirrhose du foie alcoolique'],
                    array[1]['Cirrhose du foie alcoolique'],
                    array[2]['Cirrhose du foie alcoolique'],
                    array[3]['Cirrhose du foie alcoolique'],
                    array[4]['Cirrhose du foie alcoolique'],
                    array[5]['Cirrhose du foie alcoolique'],
                    array[6]['Cirrhose du foie alcoolique'],
                    array[7]['Cirrhose du foie alcoolique'],
                    array[8]['Cirrhose du foie alcoolique'],
                    array[9]['Cirrhose du foie alcoolique'],
                    array[10]['Cirrhose du foie alcoolique'],
                    array[11]['Cirrhose du foie alcoolique']
                  ],
                  backgroundColor: ['orange'],
                  borderColor: 'rgb(41, 155, 99)',

                  borderWidth: 1
                },
                {
                  label: 'Organes urinaires',
                  data: [
                    array[0]['Organes urinaires'],
                    array[1]['Organes urinaires'],
                    array[2]['Organes urinaires'],
                    array[3]['Organes urinaires'],
                    array[4]['Organes urinaires'],
                    array[5]['Organes urinaires'],
                    array[6]['Organes urinaires'],
                    array[7]['Organes urinaires'],
                    array[8]['Organes urinaires'],
                    array[9]['Organes urinaires'],
                    array[10]['Organes urinaires'],
                    array[11]['Organes urinaires']
                  ],
                  backgroundColor: ['purple'],
                  borderColor: 'rgb(41, 155, 99)',

                  borderWidth: 1
                },
                {
                  label: 'Anomalies cong??nitales',
                  data: [
                    array[0]['Anomalies cong??nitales'],
                    array[1]['Anomalies cong??nitales'],
                    array[2]['Anomalies cong??nitales'],
                    array[3]['Anomalies cong??nitales'],
                    array[4]['Anomalies cong??nitales'],
                    array[5]['Anomalies cong??nitales'],
                    array[6]['Anomalies cong??nitales'],
                    array[7]['Anomalies cong??nitales'],
                    array[8]['Anomalies cong??nitales'],
                    array[9]['Anomalies cong??nitales'],
                    array[10]['Anomalies cong??nitales'],
                    array[11]['Anomalies cong??nitales']
                  ],
                  backgroundColor: ['khaki'],
                  borderColor: 'rgb(41, 155, 99)',

                  borderWidth: 1
                },
                {
                  label: 'Causes de mortalit?? p??rinatale',
                  data: [
                    array[0]['Causes de mortalit?? p??rinatale'],
                    array[1]['Causes de mortalit?? p??rinatale'],
                    array[2]['Causes de mortalit?? p??rinatale'],
                    array[3]['Causes de mortalit?? p??rinatale'],
                    array[4]['Causes de mortalit?? p??rinatale'],
                    array[5]['Causes de mortalit?? p??rinatale'],
                    array[6]['Causes de mortalit?? p??rinatale'],
                    array[7]['Causes de mortalit?? p??rinatale'],
                    array[8]['Causes de mortalit?? p??rinatale'],
                    array[9]['Causes de mortalit?? p??rinatale'],
                    array[10]['Causes de mortalit?? p??rinatale'],
                    array[11]['Causes de mortalit?? p??rinatale']
                  ],
                  backgroundColor: ['magenta'],
                  borderColor: 'rgb(41, 155, 99)',

                  borderWidth: 1
                },
                {
                  label: 'Accidents et traumatismes',
                  data: [
                    array[0]['Accidents et traumatismes'],
                    array[1]['Accidents et traumatismes'],
                    array[2]['Accidents et traumatismes'],
                    array[3]['Accidents et traumatismes'],
                    array[4]['Accidents et traumatismes'],
                    array[5]['Accidents et traumatismes'],
                    array[6]['Accidents et traumatismes'],
                    array[7]['Accidents et traumatismes'],
                    array[8]['Accidents et traumatismes'],
                    array[9]['Accidents et traumatismes'],
                    array[10]['Accidents et traumatismes'],
                    array[11]['Accidents et traumatismes']
                  ],
                  backgroundColor: ['peru'],
                  borderColor: 'rgb(41, 155, 99)',

                  borderWidth: 1
                },
               
               
                
              ]
            },
            options: {
              responsive: true
            }
          })
        }

        reader.readAsText(input)
      })