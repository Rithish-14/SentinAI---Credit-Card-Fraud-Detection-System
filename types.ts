
export interface Transaction {
  id: string;
  amount: number;
  location: string;
  time: string;
  cardType: string;
  merchant: string;
  status: 'Legitimate' | 'Fraudulent' | 'Pending';
  timestamp: Date;
}

export interface FraudAnalysisResult {
  isFraud: boolean;
  confidence: number;
  reason: string;
  recommendation: string;
}

export interface Stats {
  totalChecked: number;
  fraudDetected: number;
  avgConfidence: number;
}
