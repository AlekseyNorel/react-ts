import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent';
import { FooterComponent } from '../../components/FooterComponent/FooterComponent';

const MainLayout = () => {
 return (
  <div>
         <HeaderComponent/>
         <Outlet/>
         <FooterComponent/>
      <h1>AAAAAAAAA</h1>
  </div>
 );
};

export {MainLayout};