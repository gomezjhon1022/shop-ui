import React from 'react';
import { Header } from '../Header';

function  Layout({ children }){
  return (
    <>
      <Header />
        <div className="layout-container">
          {children}
        </div>
    </>
  );
};

export  { Layout };