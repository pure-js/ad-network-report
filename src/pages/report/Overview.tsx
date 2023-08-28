import { useQuery } from '@tanstack/react-query';
import { Logger } from 'tslog';

import Table from '@/components/Table';
import ChartWrapper from '@/components/ChartWrapper';

const log = new Logger();

export interface NetworksType {
  [key: string]: {
    Applovin: {
      spend: number;
      daily_revenue: number;
    };
    Facebook: {
      spend: number;
      daily_revenue: number;
    };
    GoogleAds: {
      spend: number;
      daily_revenue: number;
    };
    total: {
      spend: number;
      installs: number;
    };
  };
}

async function fetchNetworks(): Promise<NetworksType | undefined> {
  try {
    const response = await fetch('/networks');
    const { data } = await response.json();
    return data;
  } catch (error) {
    log.error(error);
  }
}

function Overview() {
  const { isLoading, isError, data, error } = useQuery<
    unknown,
    unknown,
    NetworksType
  >({
    // queryKey: ['networks'],
    queryFn: fetchNetworks,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError && error instanceof Error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <h3>Network</h3>
      {data && <Table data={data.Total} />}
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
      {data && <ChartWrapper data={data} />}
    </>
  );
}

export default Overview;
