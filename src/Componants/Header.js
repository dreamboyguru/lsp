// src/Header.js
import React from 'react';
import AdminTabs from './admin/AdminTabs';

const Header = () => {
    localStorage.setItem('type', 'Component3'); 
    return (    
        <AdminTabs />
    );
}

export default Header;
