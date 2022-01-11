import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

import Cryptostats from './Cryptostats';
import { CryptoCurrencies, News } from '../../components';

const { Title } = Typography;

const Homepage = () => {
  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>
      <Cryptostats />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={2} className='show-more'>
          <Link to='/cryptocurrencies'>Show more</Link>
        </Title>
      </div>
      <CryptoCurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Latest Crypto News
        </Title>
        <Title level={2} className='show-more'>
          <Link to='/news'>Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
