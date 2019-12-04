import { BitcoinWallet } from "./bitcoinWallet";
import { Cnd } from "./cnd";
import { ComitClient } from "./comitClient";
import { EthereumWallet } from "./ethereumWallet";

export interface Actor {
  name?: string;
  comitClient: ComitClient;
  peerId: string;
  addressHint: string;
  bitcoinWallet: BitcoinWallet;
  ethereumWallet: EthereumWallet;
}

export async function createActor(
  bitcoinWallet: BitcoinWallet,
  ethereumWallet: EthereumWallet,
  cndUrl: string,
  name?: string
): Promise<Actor> {
  const cnd = new Cnd(cndUrl!);
  const peerId = await cnd.getPeerId();
  const addressHint = await cnd
    .getPeerListenAddresses()
    .then(addresses => addresses[0]);

  const comitClient = new ComitClient(bitcoinWallet, ethereumWallet, cnd);

  return {
    name,
    comitClient,
    peerId,
    addressHint,
    bitcoinWallet,
    ethereumWallet
  };
}
