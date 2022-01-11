import React from 'react';
import { Col, Typography } from 'antd';
import millify from 'millify';
import {
  DollarCircleOutlined,
  TrophyOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const CoinStatistics = ({ cryptoDetails }) => {
  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
    {
      title: '24h Volume',
      value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: 'Market Cap',
      value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'All-time-high(daily avg.)',
      value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ];
  return (
    <Col className='coin-value-statistics'>
      <Col className='coin-value-statistics-heading'>
        <Title level={3} className='coin-details-heading'>
          {cryptoDetails.name} Value Statistics:
        </Title>
        <p>An overview showing the stats of {cryptoDetails.name}</p>
      </Col>
      {stats.map(({ icon, title, value }) => (
        <Col className='coin-stats'>
          <Col className='coin-stats-name'>
            <Text>{icon}</Text>
            <Text>{title}</Text>
          </Col>
          <Text className='stats'>{value}</Text>
        </Col>
      ))}
    </Col>
  );
};

export default CoinStatistics;
