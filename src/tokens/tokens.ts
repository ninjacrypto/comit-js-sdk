import { definitions } from "./definitions";

export type Type = "ERC20";

export interface Token {
  symbol: string;
  type: Type;
  address: string;
  decimals: number;
}
export function getToken(symbol: string): Token | undefined {
  const defs = definitions as Token[];
  return defs.find((token: Token) => {
    return token.symbol === symbol;
  });
}