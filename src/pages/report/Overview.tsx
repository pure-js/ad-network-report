import { useEffect, useState } from 'react';
import Table from '@/components/Table';
import ChartWrapper from '@/components/ChartWrapper';

export interface NetworksType {
  data: {
    [key : string] : {
      Applovin: {
        spend: number
        daily_revenue: number
      }
      Facebook: {
        spend: number
        daily_revenue: number
      }
      GoogleAds: {
        spend: number
        daily_revenue: number
      }
      total: {
        spend: number;
        installs: number;
      };
    }
  }
}

function Overview() {
  const [networks, setNetworks] = useState<NetworksType["data"] | null>(null);

  useEffect(() => {
    fetch('/networks')
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((jsonData) => {
        const { data }: NetworksType = jsonData;
        setNetworks(data);
      });
  }, []);

  return (
    <>
      <h3>Network</h3>
      {networks && <Table data={networks.Total} />}
      <h3>Daily Revenue</h3>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Default switch checkbox input
        </label>
      </div>
      {networks && <ChartWrapper data={networks} />}
    </>
  );
}

export default Overview;
