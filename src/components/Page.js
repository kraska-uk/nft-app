import React from 'react';
import { hot } from 'react-hot-loader';
import Seo from './Seo';
import Header from './Header';
import Footer from './Footer';



function Page({ title, description, meta, children }) {
  return (
    <>
      <Seo
        title={title}
        description={description}
        meta={meta ? meta : []}
      />
      <Header />
      <main style={{ minHeight: '100vh', }} >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default hot(module)(Page);
