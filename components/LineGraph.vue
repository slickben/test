<template>
    <div class="flex flex-col justify-between h-full bg-white">
        <div class="flex items-end justify-between px-6">
            <div class="flex items-center px-6 pt-4 border-b">
                <input class="w-36 text-tertiary-400" type="date" placeholder="20-12-2020" value="2017-06-01" name="" id="">
                
                <input class="w-36 text-tertiary-400" type="date" value="2017-06-01" name="" id="">
            </div>
            <div class="flex items-center text-xs text-tertiary-400">
                <p class="pr-4">Total Tax</p>
                <p>Vahicle Tax</p>
            </div>
        </div>
        <div class="">
            <canvas id="myChart" width="1025" height="400"></canvas>
        </div>
    </div>
</template>

<script>
 import {  Chart,  ArcElement,  LineElement,  BarElement,  PointElement,  BarController,  BubbleController,
  DoughnutController,  LineController,  PieController,  PolarAreaController,  RadarController,  ScatterController,
    CategoryScale,  LinearScale,  LogarithmicScale,  RadialLinearScale,  TimeScale,  TimeSeriesScale,  Decimation,
      Filler,  Legend,  Title,  Tooltip,  SubTitle
} from 'chart.js'

Chart.register(  ArcElement,  LineElement,  BarElement,  PointElement,  BarController,  BubbleController,
  DoughnutController,  LineController,  PieController,  PolarAreaController,  RadarController,  ScatterController,
    CategoryScale,  LinearScale,  LogarithmicScale,  RadialLinearScale,  TimeScale,  TimeSeriesScale,  Decimation,
      Filler,  Legend,  Title,  Tooltip,  SubTitle
);



export default {
    name: "LineGraph",
    data() {
        return {
            chartId: "myChart",
            chartData: {
                type: "line",
                height: "366px",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July", "Aug", "Sep", "Nov", "Dec"],
                    datasets: [
                        {
                            label: "16 Mar 2018",
                            borderColor: "#4A5568",
                            data: [600, 400, 620, 300, 200, 600, 230, 300, 200, 200, 100, 1200],
                            fill: false,
                            pointBackgroundColor: "#4A5568",
                            borderWidth: "3",
                            pointBorderWidth: "4",
                            pointHoverRadius: "6",
                            pointHoverBorderWidth: "8",
                            pointHoverBorderColor: "rgb(74,85,104,0.2)",
                        },
                    ],
                },
                options: {
                    legend: {
                        position: false,
                    },
                },
            },
        };
    },
    mounted() {
        this.createChart(this.chartId, this.chartData);
    },
    methods: {
        createChart(chartId, chartData) {

            // Chart.register(LineElement)

            const ctx = document.getElementById(chartId);
            new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        },
    }
};
</script>