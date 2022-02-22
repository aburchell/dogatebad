import type { FoodRecord } from "./dabTypes";

export const records: FoodRecord[] = [
    {
        name: "apple",
        verdict: "good",
        evidence: [
            {
                foodName: "apple",
                verdictSupported: "good",
                sourceName: "American Kennel Club",
                sourceURL: new URL("https://www.akc.org/expert-advice/nutrition/can-dogs-eat-apples/"),
                quote: "Yes, apples are good for dogs. Apples are a great source of vitamin C, vitamin A, potassium, and antioxidants. They’re chock full of fiber, especially in the peels, which helps dogs maintain a healthy weight while assisting with their digestion.",
                caveats: ["Eating an excess of apples can lead to your dog experiencing a bellyache or diarrhea, so always serve them in moderation."],
            },
            {
                foodName: "apple",
                verdictSupported: "good",
                sourceName: "Purina",
                sourceURL: new URL("https://www.purina.com/articles/dog/nutrition/can-dogs-eat-apples"),
                quote: "Dogs can have apples. They are a good fruit to include in your treating routine.",
                caveats: [
                    "Dogs should not eat the seeds in apples... That means you can’t serve your dog a whole apple.",
                    "[Apples should only make up] 10 percent of your dog's daily calories."]
            }
        ],
        aka: ["apples"]
    },
    {
        name: "grape",
        verdict: "bad",
        evidence: [
            {
                foodName: "grape",
                verdictSupported: "bad",
                sourceName: "American Kennel Club",
                sourceURL: new URL("https://www.akc.org/expert-advice/nutrition/can-dogs-eat-grapes/"),
                quote: "No, dogs should never eat grapes. Grapes and raisins are known to be highly toxic to dogs...",
            }
        ],
        aka: ["grapes", "raisin", "raisins"]
    }
];