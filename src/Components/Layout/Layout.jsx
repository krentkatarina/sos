import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer';
import i18n from '../../i18n';
 
const Layout = () => {
  useEffect(() => {
    i18n.changeLanguage('en'); // Установить английский как язык по умолчанию
  }, []);
  return (
    <div>
         
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout