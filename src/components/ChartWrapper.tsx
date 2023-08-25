import {
  Chart,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import type { NetworksType } from '@/pages/report/Overview';

Chart.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

function ChartWrapper({ data }: NetworksType) {
  const labels = Object.keys(data).slice(0, -1);
  const ApplovinLabel = [] as number[];
  const FacebookLabel = [] as number[];
  const GoogleAdsLabel = [] as number[];
  labels.map((date) => {
    ApplovinLabel.push(data[date].Applovin.daily_revenue);
    FacebookLabel.push(data[date].Facebook.daily_revenue);
    GoogleAdsLabel.push(data[date].GoogleAds.daily_revenue);
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Applovin',
        data: ApplovinLabel,
        borderColor: '#d63964',
      },
      {
        label: 'Facebook',
        data: FacebookLabel,
        borderColor: '#46a3e8',
      },
      {
        label: 'GoogleAds',
        data: GoogleAdsLabel,
        borderColor: '#f6c244',
      },
    ],
  };

  return <Line options={options} data={chartData} />;
}

export default ChartWrapper;
