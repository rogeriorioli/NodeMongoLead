import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

// import { Container } from './styles';

export default function Layouts({children}) {
  return (
    <>
      <Header />
        <main>
            {children}
        </main>
        <Footer/>
    </>
  );
}
