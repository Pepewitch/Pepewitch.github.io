import React from "react";
import { useRouter } from "next/router";
import { Tabs } from "antd";
import styled from "styled-components";
import { SwipableDiv } from "../components/SwipableDiv";

const { TabPane } = Tabs;

const StyledTabs = styled(Tabs)`
  height: 100%;
  display: flex;
  flex-direction: column;
  .ant-tabs-content {
    flex: 1;
  }
`;
const StyledTabPane = styled(TabPane)``;

const Home = () => {
  const router = useRouter();
  const {
    query: { tab = "tab1" }
  } = router;
  if (!(global as any).window) return null;
  return (
    <StyledTabs
      activeKey={tab}
      onChange={tab => router.push({ pathname: "/", query: { tab } })}
      tabPosition="bottom"
    >
      <StyledTabPane tab="Tab 1" key="tab1">
        <SwipableDiv />
      </StyledTabPane>
      <StyledTabPane tab="Tab 2" key="tab2">
        Content of Tab Pane 2
      </StyledTabPane>
      <StyledTabPane tab="Tab 3" key="tab3">
        Content of Tab Pane 3
      </StyledTabPane>
    </StyledTabs>
  );
};

export default Home;
