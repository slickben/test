<template>
    <div class="flex flex-col justify-between h-full bg-white">
        <div>
            <div class="lg:flex w-full justify-between">
                <h3 class="text-gray-600 dark:text-gray-400 leading-5 text-base md:text-xl font-bold">Selling Overview</h3>
                <div class="flex items-center justify-between lg:justify-start mt-2 md:mt-4 lg:mt-0">
                    <div class="flex items-center">
                        <button class="py-2 px-4 bg-gray-100 dark:bg-gray-700 focus:outline-none ease-in duration-150 text-xs text-gray-600 dark:text-gray-400 hover:bg-gray-200">Dollars</button>
                        <button class="py-2 px-4 bg-indigo-500 focus:outline-none text-white ease-in duration-150 text-xs hover:bg-indigo-600">Tickets</button>
                    </div>
                    <div class="lg:ml-14">
                        <div class="bg-gray-100 dark:bg-gray-700 ease-in duration-150 hover:bg-gray-200 pb-2 pt-1 px-3 rounded-sm">
                            <select class="text-xs text-gray-600 dark:text-gray-400 bg-transparent focus:outline-none">
                                <option class="leading-1">Year</option>
                                <option class="leading-1">2020</option>
                                <option class="leading-1">2019</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6">
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