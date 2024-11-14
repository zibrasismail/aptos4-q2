import React, { useState } from "react";
import { Typography, Card, Row, Col, Pagination, Button, Input, Modal } from "antd";

const { Title } = Typography;
const { Meta } = Card;

const MyNFTs: React.FC = () => {
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const mockNFTs = [
    { id: 1, name: "NFT 9", description: "My awesome NFT", uri: "https://fastly.picsum.photos/id/13/150/150.jpg?hmac=9Hs7x8EWUkoSin2iGPvg3BzaSRVCIsWBfJr9S9NL-3Q", rarity: 1, price: 1.5, for_sale: false },
    { id: 1, name: "NFT 10", description: "My awesome NFT", uri: "https://fastly.picsum.photos/id/338/200/200.jpg?hmac=5S5SeR5xW8mbN3Ml7wTTJPePX392JafhcFMGm7IFNy0", rarity: 1, price: 1.5, for_sale: false },
    { id: 1, name: "NFT 11", description: "My awesome NFT", uri: "https://fastly.picsum.photos/id/572/200/200.jpg?hmac=YFsNUCQc2Dfz_5O0HY8HmDfquz04XrdcpJ0P4Z7plRY", rarity: 1, price: 1.5, for_sale: false },
  ];

  const handleSellClick = (nft: any) => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Title level={2} style={{ marginBottom: "20px" }}>My Collection</Title>
      <Row gutter={[24, 24]} style={{ marginTop: 20, marginBottom: 400, width: "100%", maxWidth: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {mockNFTs.map((nft) => (
          <Col key={nft.id} xs={24} sm={12} md={8} lg={8} xl={6} style={{ display: "flex", justifyContent: "center" }}>
            <Card hoverable style={{ width: "100%", maxWidth: "280px", minWidth: "220px", margin: "0 auto" }} cover={<img alt={nft.name} src={nft.uri} />}>
              <Meta title={nft.name} description={`Rarity: ${nft.rarity}, Price: ${nft.price} APT`} />
              <Button type="link" onClick={() => handleSellClick(nft)}>Sell</Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal title="Sell NFT" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Input placeholder="Enter sale price in APT" />
      </Modal>
    </div>
  );
};

export default MyNFTs;
