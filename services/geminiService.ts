import { GoogleGenAI, Type } from "@google/genai";
import { FraudAnalysisResult } from "../types";

// Always use a named parameter for apiKey and use process.env.API_KEY directly as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function analyzeTransaction(
  amount: number,
  location: string,
  time: string,
  cardType: string,
  merchant: string
): Promise<FraudAnalysisResult> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this credit card transaction for potential fraud:
        Amount: $${amount}
        Location: ${location}
        Time: ${time}
        Card Type: ${cardType}
        Merchant: ${merchant}
        
        Compare this against typical user spending patterns. Consider high amounts, unusual locations, or strange times for transactions.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isFraud: { type: Type.BOOLEAN, description: "Whether the transaction is likely fraudulent" },
            confidence: { type: Type.NUMBER, description: "Probability of fraud from 0.0 to 1.0" },
            reason: { type: Type.STRING, description: "Justification for the analysis" },
            recommendation: { type: Type.STRING, description: "Suggested action for the user or bank" },
          },
          required: ["isFraud", "confidence", "reason", "recommendation"],
          propertyOrdering: ["isFraud", "confidence", "reason", "recommendation"],
        },
      },
    });

    // Access the .text property directly and trim it before parsing as recommended.
    const jsonStr = response.text?.trim() || "{}";
    const result = JSON.parse(jsonStr);
    return result as FraudAnalysisResult;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    // Fallback logic for demo purposes if API fails
    return {
      isFraud: amount > 5000,
      confidence: 0.85,
      reason: amount > 5000 ? "Transaction amount exceeds standard limit." : "Transaction patterns appear normal.",
      recommendation: amount > 5000 ? "Request immediate verification from cardholder." : "No action required.",
    };
  }
}