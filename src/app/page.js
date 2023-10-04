'use client';
import FirstLanding from './components/landing/first/first';
import SecondLanding from './components/landing/second/second';
import ThirdLanding from './components/landing/third/third';
import FourthLanding from './components/landing/fourth/fourth';
import FifthLanding from './components/landing/fifth/fifth';

import './globals.css';

export default function Home() {
  return (
    <>
      <FirstLanding style={{ marginLeft: '30px', marginRight: '30px' }} />
      <SecondLanding style={{ marginLeft: '30px', marginRight: '30px' }} />
      <ThirdLanding />
      <FourthLanding />
      {/* <FifthLanding /> */}
    </>
  );
}
