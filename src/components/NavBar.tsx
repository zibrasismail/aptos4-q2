import React, { useState } from "react";
import { Layout, Typography, Menu, Space, Button, Dropdown, message } from "antd";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;
const { Text } = Typography;

interface NavBarProps {
  onMintNFTClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onMintNFTClick }) => {
  const [connected, setConnected] = useState(false);
  const [balance] = useState<number | null>(100); // Mock balance data
  const [account] = useState({ address: "0xa1b2c3d4e5f67890123456789abcdef01234567890123456789abcdef01234567" }); // Mock account data
  const network = { name: "Testnet" }; // Mock network data

  const handleLogin = () => {
    setConnected(true);
    message.success("Connected to wallet");
  };

  const handleLogout = () => {
    setConnected(false);
    message.success("Disconnected from wallet");
  };

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#001529",
        padding: "0 20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src="/Aptos_Primary_WHT.png" alt="Aptos Logo" style={{ height: "30px", marginRight: 16 }} />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["marketplace"]} style={{ backgroundColor: "#001529" }}>
          <Menu.Item key="marketplace">
            <Link to="/" style={{ color: "#fff" }}>Marketplace</Link>
          </Menu.Item>
          <Menu.Item key="my-collection">
            <Link to="/my-nfts" style={{ color: "#fff" }}>My Collection</Link>
          </Menu.Item>
          <Menu.Item key="mint-nft" onClick={onMintNFTClick}>
            <span style={{ color: "#fff" }}>Mint NFT</span>
          </Menu.Item>
        </Menu>
      </div>

      <Space style={{ alignItems: "center" }}>
        {connected ? (
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="address">
                  <Text strong>Address:</Text> <br />
                  <Text copyable>{account.address}</Text>
                </Menu.Item>
                <Menu.Item key="network">
                  <Text strong>Network:</Text> {network.name}
                </Menu.Item>
                <Menu.Item key="balance">
                  <Text strong>Balance:</Text> {balance !== null ? `${balance} APT` : "Loading..."}
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
                  Log Out
                </Menu.Item>
              </Menu>
            }
            trigger={['click']}
          >
            <Button type="primary">
              Connected <DownOutlined />
            </Button>
          </Dropdown>
        ) : (
          <Button type="primary" onClick={handleLogin}>
            Connect Wallet
          </Button>
        )}
      </Space>
    </Header>
  );
};

export default NavBar;
