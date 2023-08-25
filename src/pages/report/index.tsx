import { Outlet } from 'react-router-dom';

function Report() {
  return (
    <div className='container'>
      <h2>Report</h2>
      <Outlet />
    </div>
  )
}

export default Report;
