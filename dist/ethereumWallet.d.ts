import { ethers } from "ethers";
import { Arrayish, BigNumber, SigningKey } from "ethers/utils";
import { HDNode } from "ethers/utils/hdnode";
export declare class EthereumWallet {
    private readonly wallet;
    constructor(jsonRpcUrl: string, key?: SigningKey | HDNode | Arrayish);
    getAccount(): string;
    getBalance(): Promise<ethers.utils.BigNumber>;
    deployContract(data: string, value: BigNumber, gasLimit: string): Promise<string | undefined>;
    callContract(data: string, contractAddress: string, gasLimit: string): Promise<string | undefined>;
}
