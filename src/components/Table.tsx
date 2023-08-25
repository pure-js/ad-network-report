interface TableProps {
  data: {
    total: {
      spend: number;
      installs: number;
    }
  };
}

function Table({ data }: TableProps) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Network</th>
          <th scope="col">Spend</th>
          <th scope="col">CPI</th>
          <th scope="col">LTV90</th>
          <th scope="col">Installs</th>
          <th scope="col">ltv0u</th>
          <th scope="col">ltv1u</th>
          <th scope="col">ltv2u</th>
          <th scope="col">ltv3u</th>
          <th scope="col">ltv7u</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
      {data?.total && (
        <tfoot>
          <tr>
            <th scope="row">Total</th>
            <td>{data.total.spend}</td>
            <td>CPI ?</td>
            <td>LTV90 ?</td>
            <td>{data.total.installs}</td>
          </tr>
        </tfoot>
      )}
    </table>
  );
}

export default Table;
