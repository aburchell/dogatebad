export interface FoodRecord {
    name: string;
    verdict: ("good" | "bad" | "ok" | "idk");
    evidence: Claim[];
    aka?: string[];
}
export interface FoodSummary {
    name: string;
    verdict: ("good" | "bad" | "ok" | "idk");
    aka?: string[];
}
export interface Claim {
    foodName: string;
    verdictSupported: ("good" | "bad" | "ok" | "idk");
    sourceName: string;
    sourceURL: URL;
    quote: string;
    caveats?: string[];
}