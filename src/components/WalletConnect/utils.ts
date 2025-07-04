export const shortenAddress = (address: string, chars = 4): string =>
  address ? `${address.slice(0, chars + 2)}...${address.slice(-chars)}` : "";
