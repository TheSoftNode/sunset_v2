import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js';
import 'chartjs-adapter-date-fns';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const Charts = ({ data }) => {

  console.log(data, "data")

    const parseDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:00`;
    };

    const renderGraphs = () => {
        // Get variables from the backend response data (excluding 'date')
        const variableKeys = Object.keys(data.variables);
        const dates = data.date.map(parseDate);

        return variableKeys.map((variable) => {
            const variableData = data.variables[variable];
            const values = variableData.values;
            const moderateValue = variableData.moderate_value;
            const workingHours = variableData.working_hours;

            // Data for the line chart
            const chartData = {
                labels: dates,
                datasets: [
                    {
                        label: variable,
                        data: values,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 2,
                        fill: false,
                    },
                    {
                        label: 'Moderate Value',
                        data: new Array(dates.length).fill(moderateValue),
                        borderColor: 'rgba(255, 99, 132, 0.8)',
                        borderWidth: 2,
                        borderDash: [5, 5], // Dashed line for moderate value
                        fill: false,
                        pointRadius: 0, // No points for moderate value line
                    },
                ],
            };

            // Chart options including the y-axis label
            const options = {
                scales: {
                    x: {
                        type: 'category',
                        title: {
                            display: true,
                            text: 'Date',
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: variable.replace(/_/g, ' '),
                        },
                        suggestedMin: Math.min(...values) - 5, // Adding padding for better visibility
                        suggestedMax: Math.max(...values) + 5, // Adding padding for better visibility
                    },
                },
            };

            return (
                <div key={variable} className="mb-8">
                    <h2 className="text-xl font-bold mb-4">{variable.replace(/_/g, ' ')}</h2>
                    <Line data={chartData} options={options} />
                    <div className="mt-4 text-lg">
                        <strong>Total Working Hours:</strong> {workingHours}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="flex flex-col">
            {renderGraphs()}
        </div>
    );
}

export default Charts;
