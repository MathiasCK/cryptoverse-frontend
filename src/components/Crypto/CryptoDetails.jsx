import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Typography, Select } from 'antd';
import millify from 'millify';

import LineChart from './LineChart';
import Spinner from '../Spinner';
import CoinStatistics from './CoinStatistics';
import OtherStatistics from './OtherStatistics';
import CoinDescLink from './CoinDescLink';
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from '../../services/cryptoDetailsApi';

const { Title } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory, isFetching: history } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = data?.data?.coin;

  if (isFetching || history) return <Spinner />;

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  return (
    <Col className='coin-detail-container'>
      <Col className='coin-heading-container'>
        <Title level={2} className='coin-name'>
          {cryptoDetails.name} ({cryptoDetails.slug}) Price
        </Title>
        <p>
          {cryptoDetails.name} live price in US dollars. View value statistics,
          market cap and supply
        </p>
      </Col>
      <Select
        defaultValue='7d'
        className='select-timeperiod'
        placeholder='Select time period'
        onChange={value => setTimePeriod(value)}
      >
        {time.map(date => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
      <LineChart
        coinHistory={coinHistory}
        currencPrice={millify(cryptoDetails.price)}
        coinName={cryptoDetails.name}
      />
      <Col className='stats-container'>
        <CoinStatistics cryptoDetails={cryptoDetails} />
        <OtherStatistics cryptoDetails={cryptoDetails} />
      </Col>
      <CoinDescLink cryptoDetails={cryptoDetails} />
    </Col>
  );
};

export default CryptoDetails;
