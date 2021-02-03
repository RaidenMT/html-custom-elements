import { WcWebComponent } from '../../js/WcWebComponent.js';

const transformFunc = (wcElement, template) => {

    if (wcElement.hasAttribute('wc-title')) {
        template.content.querySelector('.wc-title').innerText = wcElement.getAttribute('wc-title');
    }

    if (wcElement.hasAttribute('wc-chart-id')) {
        template.content.querySelector('canvas').setAttribute('id', wcElement.getAttribute('wc-chart-id'));

        if (wcElement.hasAttribute('wc-chart-type')) {
            template.content.querySelector('canvas').classList.remove('donut');
            template.content.querySelector('canvas').classList.remove('bar');
            template.content.querySelector('canvas').classList.remove('line');
            template.content.querySelector('canvas').classList.add(wcElement.getAttribute('wc-chart-type'));
        }
    }

    return template;
}

const initFunc = (shadow) => {
    const canvas = shadow.querySelector('canvas');
    if (canvas.classList.contains('line')) {
        chartLine(canvas);
    }
    else if (canvas.classList.contains('bar')) {
        chartBar(canvas);
    }
}

let chart = new WcWebComponent('chart', transformFunc, initFunc);
chart.registerComponent();

function chartLine(chart, chartData) {
    let data;
    if (chartData) {
        data = chartData;
    }
    else {
        data = {
            labels: ["S", "M", "T", "W", "T", "F", "S"],
            datasets: [{
                data: [589, 445, 483, 503, 689, 692, 634],
            },
            {
                data: [639, 465, 493, 478, 589, 632, 674],
            }]
        };
    }

    if (chart) {
        new Chart(chart, {
            type: 'line',
            data: data,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        });
    }
}

function chartBar(chart, chartData) {
    const colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];
    
    let data;
    if (chartData) {
        data = chartData;
    }
    else {
        data = {
            labels: ["S", "M", "T", "W", "T", "F", "S"],
            datasets: [{
                data: [589, 445, 483, 503, 689, 692, 634],
                backgroundColor: colors[0]
            },
            {
                data: [209, 245, 383, 403, 589, 692, 580],
                backgroundColor: colors[1]
            },
            {
                data: [489, 135, 483, 290, 189, 603, 600],
                backgroundColor: colors[2]
            },
            {
                data: [639, 465, 493, 478, 589, 632, 674],
                backgroundColor: colors[4]
            }]
        };
    }
    
    if (chart) {
        new Chart(chart, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    xAxes: [{
                        barPercentage: 0.4,
                        categoryPercentage: 0.5
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        });
    }
}