import React, { useState } from "react";
import { Typography, Card, Row, Col, Tag, Button, Modal } from "antd";

const { Title } = Typography;
const { Meta } = Card;

// Define colors and labels for rarity
const rarityColors: { [key: number]: string } = {
  1: "green",
  2: "blue",
  3: "purple",
  4: "orange",
};

const rarityLabels: { [key: number]: string } = {
  1: "Common",
  2: "Uncommon",
  3: "Rare",
  4: "Super Rare",
};

// Define NFT type
type NFT = {
  id: number;
  owner: string;
  name: string;
  description: string;
  uri: string;
  price: number;
  for_sale: boolean;
  rarity: number;
};

// Truncate address helper function
const truncateAddress = (address: string) => `${address.slice(0, 6)}...${address.slice(-4)}`;

const MarketView: React.FC = () => {
  // State for buy modal visibility and selected NFT
  const [isBuyModalVisible, setIsBuyModalVisible] = useState(false);
  const [selectedNft, setSelectedNft] = useState<NFT | null>(null);

  // Mock NFTs for display
  const mockNfts: NFT[] = [
    { id: 1, owner: "0x123...abc", name: "NFT 1", description: "An awesome NFT", uri: "https://fastly.picsum.photos/id/802/200/200.jpg?hmac=alfo3M8Ps4XWmFJGIwuzLUqOrwxqkE5_f65vCtk6_Iw", price: 1.5, for_sale: true, rarity: 1 },
    { id: 2, owner: "0x456...def", name: "NFT 2", description: "Another great NFT", uri: "https://fastly.picsum.photos/id/186/200/200.jpg?hmac=bNtKzMZT8HFzZq8mbTSWaQvmkX8T7TE47fspKMfxVl8", price: 2.0, for_sale: true, rarity: 2 },
    { id: 2, owner: "0x456...def", name: "NFT 3", description: "Another great NFT", uri: "https://fastly.picsum.photos/id/255/200/200.jpg?hmac=IYQV36UT5-F1dbK_CQXF7PDfLfwcnwKijqeBCo3yMlc", price: 2.0, for_sale: true, rarity: 2 },
    { id: 2, owner: "0x456...def", name: "NFT 4", description: "Another great NFT", uri: "https://fastly.picsum.photos/id/522/200/200.jpg?hmac=-4K81k9CA5C9S2DWiH5kP8rMvaAPk2LByYZHP9ejTjA", price: 2.0, for_sale: true, rarity: 2 },
    { id: 2, owner: "0x456...def", name: "NFT 5", description: "Another great NFT", uri: "https://fastly.picsum.photos/id/501/200/200.jpg?hmac=tKXe69j4tHhkAA_Qc3XinkTuubEWwkFVhA9TR4TmCG8", price: 2.0, for_sale: true, rarity: 2 },
    { id: 2, owner: "0x456...def", name: "NFT 6", description: "Another great NFT", uri: "https://fastly.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk", price: 2.0, for_sale: true, rarity: 2 },
    { id: 2, owner: "0x456...def", name: "NFT 7", description: "Another great NFT", uri: "https://fastly.picsum.photos/id/891/200/200.jpg?hmac=J19K6yDbzNDUjkInb56-h-n_xM3i40GCfHWor0YKgyU", price: 2.0, for_sale: true, rarity: 2 },
    { id: 2, owner: "0x456...def", name: "NFT 8", description: "Another great NFT", uri: "https://fastly.picsum.photos/id/999/200/200.jpg?hmac=iwXALEStJtHL4Thxk_YbLNHNmjq9ZrIQYFUvtxndOaU", price: 2.0, for_sale: true, rarity: 2 },
  ];

  const handleBuyClick = (nft: NFT) => {
    setSelectedNft(nft);
    setIsBuyModalVisible(true);
  };

  const handleCancelBuy = () => {
    setIsBuyModalVisible(false);
    setSelectedNft(null);
  };

  return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Title level={2} style={{ marginBottom: "20px" }}>Marketplace</Title>
      <Row gutter={[24, 24]} style={{ marginTop: 20, marginBottom: 400, width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {mockNfts.map((nft) => (
          <Col
            key={nft.id}
            xs={24} sm={12} md={8} lg={6} xl={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              hoverable
              style={{
                width: "100%",
                maxWidth: "240px",
                margin: "0 auto",
              }}
              cover={<img alt={nft.name} src={nft.uri} />}
              actions={[
                <Button type="link" onClick={() => handleBuyClick(nft)}>
                  Buy
                </Button>
              ]}
            >
              <Tag
                color={rarityColors[nft.rarity]}
                style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "10px" }}
              >
                {rarityLabels[nft.rarity]}
              </Tag>
              <Meta title={nft.name} description={`Price: ${nft.price} APT`} />
              <p>{nft.description}</p>
              <p>ID: {nft.id}</p>
              <p>Owner: {truncateAddress(nft.owner)}</p>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal title="Purchase NFT" visible={isBuyModalVisible} onCancel={handleCancelBuy} footer={null}>
        {selectedNft && (
          <>
            <p><strong>Name:</strong> {selectedNft.name}</p>
            <p><strong>Description:</strong> {selectedNft.description}</p>
            <p><strong>Price:</strong> {selectedNft.price} APT</p>
          </>
        )}
      </Modal>
    </div>
  );
};

export default MarketView;
