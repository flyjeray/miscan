type Balance = {
  coin: {
    id: number;
    type: string;
    symbol: string;
  };
  amount: string;
  bip_amount: string;
};

export type Address = {
  data: {
    address: string;
    balances: Balance[];
    total_balance_sum: string;
    total_balance_sum_usd: string;
    stake_balance_sum: string;
    stake_balance_sum_usd: string;
  };
  latest_block_time: string;
};
