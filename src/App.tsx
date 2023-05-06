import React, { useState } from "react";
import { api } from "./services";
import { Address } from "./models/address";

function App() {
  const [inputAddress, setInputAddress] = useState("");
  const [resultAddress, setResultAddress] = useState<Address | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputAddress(e.currentTarget.value);
  };

  const handleClick = () => {
    api.addresses
      .getAddress(inputAddress)
      .then((result) => {
        console.log("Address:", result);
        setResultAddress(result);
      })
      .catch((error) => console.error(error));
  };

  const getRichestBalances = (amount?: number) => {
    if (!resultAddress) return;

    const balances = resultAddress.data.balances;

    const sortedByRich = balances.sort(
      (x, y) => parseFloat(y.bip_amount) - parseFloat(x.bip_amount)
    );

    return sortedByRich.slice(0, amount).map((balance) => (
      <p>
        <b>{balance.coin.symbol}</b>: {balance.bip_amount}
      </p>
    ));
  };

  return (
    <div className="App">
      <input value={inputAddress} onChange={handleChange} />
      <button onClick={handleClick}>Get</button>
      {resultAddress && getRichestBalances()}
    </div>
  );
}

export default App;
