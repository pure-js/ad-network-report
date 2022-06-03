import { useEffect, useState } from 'react';
import Table from '../../components/Table';

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
        console.log(data);
        setNetworks(data);
      });
  }, [])

  return (
    <>
      <h3>Network</h3>
      <Table data={networks?.Total} />
    </>
  )
}

export default Overview;
