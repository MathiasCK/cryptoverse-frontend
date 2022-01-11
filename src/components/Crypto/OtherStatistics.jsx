import React from 'react';
import { Col, Typography } from 'antd';
import {
  MoneyCollectOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import millify from 'millify';

const { Text, Title } = Typography;

const OtherStatistics = ({ cryptoDetails }) => {
  const genericStats = [
    {
      title: 'Number Of Markets',
      value: cryptoDetails.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: 'Number Of Exchanges',
      value: cryptoDetails.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: 'Aprroved Supply',
      value: cryptoDetails.approvedSupply ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Total Supply',
      value: `$ ${millify(cryptoDetails.totalSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${millify(cryptoDetails.circulatingSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];
  return (
    <Col className='other-stats-info'>
      <Col className='coin-value-statistics-heading'>
        <Title level={3} className='coin-details-heading'>
          Other Statistics:
        </Title>
        <p>An overview showing the stats of all cryptocurrencies</p>
      </Col>
      {genericStats.map(({ icon, title, value }) => (
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

export default OtherStatistics;
