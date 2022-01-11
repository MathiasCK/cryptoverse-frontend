import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const CoinDescLink = ({ cryptoDetails }) => {
  return (
    <Col className='coin-desc-link'>
      <Row className='coin-desc'>
        <Title level={3} className='coin-details-heading'>
          What is {cryptoDetails.name}?
          {HTMLReactParser(cryptoDetails.description)}
        </Title>
      </Row>
      <Col className='coin-links'>
        <Title level={3} className='coin-details-heading'>
          {cryptoDetails.name} Links
        </Title>
        {cryptoDetails.links.map(link => (
          <Row className='coin-link' key={link.name}>
            <Title level={5} className='link-name'>
              {link.type}
            </Title>
            <a href={link.url} target='_blank' rel='noreferrer'>
              {link.name}
            </a>
          </Row>
        ))}
      </Col>
    </Col>
  );
};

export default CoinDescLink;
