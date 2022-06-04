import { useEffect, useState } from 'react';
import Table from '@/components/Table';
import ChartWrapper from '@/components/ChartWrapper';

function Overview() {
  const [networks, setNetworks] = useState(null);

  useEffect(() => {
    fetch('/networks')
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((jsonData) => {
        const { data } = jsonData;
        setNetworks(data);
      });
  }, [])

  return (
    <>
      <h3>Network</h3>
      <Table data={networks?.Total} />
      <h3>Daily Revenue</h3>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
      </div>
      { networks && (<ChartWrapper data={networks} />) }
    </>
  )
}

export default Overview;
