import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';
import './Dashboard_Tickets.css';

const DashboardTickets = () => {
  const chartRef = useRef(null);
  const [totalTickets, setTotalTickets] = useState(0);
  const [openTickets, setOpenTickets] = useState(0);
  const [resolvedTickets, setResolvedTickets] = useState(0);
  const [pendingTickets, setPendingTickets] = useState(0);

  // Animation function with smooth easing
  const animateNumber = (start, end, duration, callback) => {
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * easeOut);
      
      callback(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        callback(end);
      }
    };
    
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Animate numbers on component mount
    animateNumber(0, 125, 2000, setTotalTickets);
    animateNumber(0, 42, 2000, setOpenTickets);
    animateNumber(0, 78, 2000, setResolvedTickets);
    animateNumber(0, 5, 2000, setPendingTickets);
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const options = {
        series: [44, 55, 41, 17],
        chart: {
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10
          }
        },
        grid: {
          padding: {
            bottom: -100
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div className="dashboard-container">
      <div className="boxes-section">
        <div className="boxes-section-top">
        <div className="box">
          <div className="box-content">
            <div className="box-number">{totalTickets}</div>
            <div className="box-text">Total Tickets</div>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="box-number">{openTickets}</div>
            <div className="box-text">Open Tickets</div>
          </div>
        </div>
        </div>
        <div className="boxes-section-bottom">
        <div className="box">
          <div className="box-content">
            <div className="box-number">{resolvedTickets}</div>
            <div className="box-text">Resolved Tickets</div>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="box-number">{pendingTickets}</div>
            <div className="box-text">Pending Tickets</div>
          </div>
        </div>
        </div>
      </div>
      <div className="charts-section">
        <div id="chart" ref={chartRef}></div>
      </div>
    </div>
  );
};

export default DashboardTickets;