import React from 'react';
import Header from './/Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

const Main = () => {
  return (
      <div className='wrapper'>
          <Header />
          <Content name='Andrey!'/>
          <Footer />
      </div>
  )
}

export default Main;
