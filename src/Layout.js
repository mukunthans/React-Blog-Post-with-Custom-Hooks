import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';
import { useEffect } from 'react';

const Layout = ({search,setSearch,width}) => {
  
  return (
    <div className="App">
      <Header title="Mukunthan's Blogs" width={width}/>
      <Nav search={search} setSearch={setSearch}/>
      <Outlet/>
      <Footer/>
    </div>  
  )

}

export default Layout