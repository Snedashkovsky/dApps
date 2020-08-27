import { useAccount } from "@cosmicdapp/logic";
import { Typography } from "antd";
import React, { useState } from "react";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import YourAccount from "../../components/YourAccount";
import FormSearchName from "./components/FormSearchName";
import TokenList from "./components/TokenList";
import "./Tokens.less";

const { Title } = Typography;

function Tokens(): JSX.Element {
  const { account } = useAccount();
  const [currentAddress, setCurrentAddress] = useState(account.address);

  return (
    <Center tag="main" className="Tokens">
      <Stack className="MainStack">
        <Title>Tokens</Title>
        <FormSearchName currentAddress={currentAddress} setCurrentAddress={setCurrentAddress} />
        <TokenList currentAddress={currentAddress} />
        <YourAccount />
      </Stack>
    </Center>
  );
}

export default Tokens;