import { Link } from 'react-router-dom';

function Home() {
  return(
    <div className='container'>
      <h1>Home</h1>
      <Link to="/report/overview">Report overview</Link>
    </div>
  )
}

export default Home;
