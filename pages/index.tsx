import React from "react";
import { useRouter } from "next/router";
import { TestChain } from "../components/TestChain";

const Home = () => {
  const router = useRouter();
  const {
    query: { tab }
  } = router;
  return <TestChain />;
};

export default Home;
