let view = document.getElementById('view');
let nav = document.querySelector('.nav');
let spans = document.getElementsByClassName('sp');
let sidebar = document.querySelector('.sidebar');
let mainContent = document.querySelector('.main-content');
let open = document.getElementById('open');

const initialNavStyles = "width:60px; margin-left: 0; transition: width 0.5s ease-in-out, margin-left 0.5s ease-in-out;";
const initialSpanStyles = "opacity: 0; visibility: hidden; transition-delay: 0s;";
const expandedNavStyles = "width: 270px; margin-left: 210px; transition: width 0.5s ease-in-out, margin-left 0.5s ease-in-out;";
const expandedSpanStyles = "opacity: 1; visibility: visible; transition-delay: 0.3s;";
let isExpanded = false;

view.addEventListener("click", () => {
    if (isExpanded) {
        nav.style.cssText = initialNavStyles;
        Array.from(spans).forEach(span => {
            span.style.cssText = initialSpanStyles;
        });
    } else {
        nav.style.cssText = expandedNavStyles;
        Array.from(spans).forEach(span => {
            span.style.cssText = expandedSpanStyles;
        });
    }
    isExpanded = !isExpanded;
});

open.addEventListener("click", () => {
    if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        open.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        isExpanded = true; 
    } else {
        sidebar.classList.add('collapsed');
        open.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`;
        isExpanded = false; 
        nav.style.cssText = initialNavStyles;
        Array.from(spans).forEach(span => {
            span.style.cssText = initialSpanStyles;
        });
    }
    adjustMainContentWidth();
});

function adjustMainContentWidth() {
    if (sidebar.classList.contains('collapsed')) {
        mainContent.classList.add('expand');
    } else {
        mainContent.classList.remove('expand');
    }
}

function updateMainContentWidth() {
    if (window.getComputedStyle(sidebar).display === 'none' || sidebar.classList.contains('collapsed')) {
        mainContent.classList.add('expand');
        open.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`;
        nav.style.cssText = initialNavStyles;
        Array.from(spans).forEach(span => {
            span.style.cssText = initialSpanStyles;
        });
    } else {
        mainContent.classList.remove('expand');
        open.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
    }
}

window.addEventListener('load', () => {
    sidebar.classList.add('collapsed');
    updateMainContentWidth(); 
});
window.addEventListener('resize', updateMainContentWidth);

adjustMainContentWidth();
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Total Shipments',
            data: [60, 70, 90, 110, 80, 95, 100, 75, 85, 95, 105, 130],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#fff'
                }
            },
            x: {
                ticks: {
                    color: '#fff'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#333',
                titleColor: '#fff',
                bodyColor: '#fff',
                cornerRadius: 4
            }
        }
    }
});

const ctx2=document.getElementById('sec-chart1').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type:'line',
    data: {
        labels:['JUL','AUG','SEP','OCT','NOV','DEC'],
        datasets: [{
            label: 'Total Shipments',
            data:[80,100,70,75,120,60],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#fff'
                }
            },
            x: {
                ticks: {
                    color: '#fff'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#333',
                titleColor: '#fff',
                bodyColor: '#fff',
                cornerRadius: 4
            }
        }
    }

});

const ctx3=document.getElementById('sec-chart2').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type:'bar',
    data: {
        labels:['USA','GER','UK','AUS','RO','BR'],
        datasets: [{
            label: 'Daily Sales',
            data:[80,100,70,75,120,60],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#fff'
                }
            },
            x: {
                ticks: {
                    color: '#fff'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#333',
                titleColor: '#fff',
                bodyColor: '#fff',
                cornerRadius: 4
            }
        }
    }

});


const ctx4=document.getElementById('sec-chart3').getContext('2d');
const myChart4 = new Chart(ctx4, {
    type:'line',
    data: {
        labels:['JUL','AUG','SEP','OCT','NOV'],
        datasets: [{
            label: 'Completed Taskes',
            data:[30,155,70,75,180,60],
            fill: true,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#fff'
                }
            },
            x: {
                ticks: {
                    color: '#fff'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#333',
                titleColor: '#fff',
                bodyColor: '#fff',
                cornerRadius: 4
            }
        }
    }

});