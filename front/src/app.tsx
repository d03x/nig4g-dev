import { Route } from 'preact-router';

import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Feed from './routes/home/Feed';

export function App() {
  return (

    <>
      <Navbar />
      <Sidebar/>
      <div className="pt-12 bg-[#F0F2F5]">
      <Route path='/' component={Feed} />
      </div>
    </>

  );
}
