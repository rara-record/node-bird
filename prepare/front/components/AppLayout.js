import React, { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";

import styled, { createGlobalStyle } from "styled-components";
import { Layout, Menu, Input, Row, Col } from "antd";

const Global = createGlobalStyle`
.ant-row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.ant-col:first-child {
  margin-left: 0 !important;
}
.ant-col:last-child {
  margin-right: 0 !important;
}
.ant-form-item-explain-error {
  font-size: 11px;
}
`;

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const menuItems = [
  {
    label: (
      <Link href="/">
        <a>노드버드</a>
      </Link>
    ),
    key: "home",
  },
  {
    label: (
      <Link href="/">
        <a>프로필</a>
      </Link>
    ),
    key: "profile",
  },
  {
    label: <SearchInput enterButton />,
    key: "search",
  },
];

const AppLayout = ({ children }) => {
  const { Header, Content } = Layout;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [current, setCurrent] = useState("home");
  const onMenu = (e) => {
    setCurrent(e.key);
  };

  return (
    <Layout className="layout">
      <Global />
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          background: "#f0f2f5",
        }}
      >
        <Menu
          onClick={onMenu}
          selectedKeys={[current]}
          items={menuItems}
          mode="horizontal"
        />
      </Header>

      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <div
          style={{
            minHeight: "400px",
            padding: "24px",
            backgroundColor: "#FFF",
          }}
        >
          <Row gutter={8}>
            <Col xs={24} md={6}>
              {isLoggedIn ? (
                <UserProfile setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <LoginForm setIsLoggedIn={setIsLoggedIn} />
              )}
            </Col>
            <Col xs={24} md={12}>
              {children}
            </Col>
            <Col xs={24} md={6}>
              오른쪽메뉴
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
