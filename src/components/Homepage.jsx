import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';
import '../style/Homepage.css';

const { Title } = Typography;

const Homepage = () => {
  const { isFetching } = useGetCryptosQuery(10);

  if (isFetching) return <Loader />;

  return (
    <div className="home-heading">
      <div className="landing">
        <h1>Rhotex Exhange</h1>
        <h6>We buy all kinds of cryptocurrencies for trading</h6>
        <a href="http://www.rhotexexchange.com/" target="_blank" rel="noreferrer">SELL YOUR CRIPTOCURRENCY</a>
      </div>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified />
    </div>
  );
};

export default Homepage;
