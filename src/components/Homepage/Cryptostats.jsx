import React from 'react';
import millify from 'millify';
import { Row, Col, Statistic } from 'antd';
import { useGetCryptosQuery } from '../../services/cryptoApi';

const Cryptostats = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  if (isFetching) return 'Loading...';

  const globalStats = data?.data?.stats;

  return (
    <Row>
      <Col span={12}>
        <Statistic title={'Total Cryptocurrencies'} value={globalStats.total} />
      </Col>
      <Col span={12}>
        <Statistic
          title={'Total Exchanges'}
          value={millify(globalStats.totalExchanges)}
        />
      </Col>
      <Col span={12}>
        <Statistic
          title={'Total Market Cap'}
          value={millify(globalStats.totalMarketCap)}
        />
      </Col>
      <Col span={12}>
        <Statistic
          title={'Total 24h Volume'}
          value={millify(globalStats.total24hVolume)}
        />
      </Col>
      <Col span={12}>
        <Statistic
          title={'Total Markets'}
          value={millify(globalStats.totalMarkets)}
        />
      </Col>
    </Row>
  );
};

export default Cryptostats;
