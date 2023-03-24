import React, {useState, useEffect} from "react";
import millify from "millify";
import {Link} from "react-router-dom";
import {Card, Row, Col, Input} from "antd";
import {useGetCryptosQuery} from "../../services/cryptoApi";
import Spinner from "../Spinner";

const CryptoCurrencies = ({simplified}) => {
  const limit = simplified ? 10 : 100;

  const {data, isFetching} = useGetCryptosQuery(limit);
  const [cryptos, setCryptos] = useState(data?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(data?.data?.coins);
    const filteredData = data?.data?.coins.filter(coin =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setCryptos(filteredData);
  }, [data, searchTerm]);

  if (isFetching) return <Spinner />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search crypto currency"
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map(currency => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    alt={`${currency.name}`}
                  />
                }
                hoverable
              >
                <p>Price: ${millify(currency.price)}</p>
                <p>Market Cap: ${millify(currency.marketCap)}</p>
                <p>Daily Change: ${millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
