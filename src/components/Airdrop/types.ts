export interface AirdropStatusType {
  eligible: boolean;
  claimed: boolean;
  amount: number;
}

export interface AirdropHistoryItem {
  date: string;
  amount: number;
  status: "success" | "failed";
}
