import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

export function EthWallet({ mnemonic }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addresses, setAddresses] = useState([]);

  return (
    <div>
      <h2>Ethereum Wallets</h2>
      <button onClick={async function() {
        const seed = await mnemonicToSeed(mnemonic);
        const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
        const hdNode = HDNodeWallet.fromSeed(seed);
        const child = hdNode.derivePath(derivationPath);
        const wallet = new Wallet(child.privateKey);
        setCurrentIndex(currentIndex + 1);
        setAddresses([...addresses, wallet.address]);
      }}>
        Add ETH Wallet
      </button>

      {/* Display list of ETH addresses */}
      {addresses.map((address, index) => <div key={index}>Eth - {address}</div>)}
    </div>
  );
}
