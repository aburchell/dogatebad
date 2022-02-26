import { records as foods } from "./db/foods";
import type { FoodRecord, FoodSummary } from "./db/dabTypes";

export const enumerateLevel = (goodnessLevel) => {
    return foods.filter(f => f.verdict === goodnessLevel)
};

export const getAllSummaries = () => {
    return foods.map(f => {return {
        name: f.name,
        verdict: f.verdict,
        aka: f.aka
    } as FoodSummary})
};

export const getFood = (targetFoodName: string): FoodRecord => {
    if (foods.map(f => f.name).includes(targetFoodName)) return foods.find(f => f.name === targetFoodName);
    return createUnknownFood(targetFoodName);

};

export const getSearchTerms = () => {
    const searchTerms = [];
    const foodSummaries = getAllSummaries();
    foodSummaries.forEach(food => {
        const terms = [food.name, ...food.aka];
        terms.forEach(term => searchTerms.push({name: term, summary: food}))});
    return searchTerms;
};

const createUnknownFood = (unrecognizedName: string): FoodRecord => {
    return {
        name: unrecognizedName,
        verdict: "idk",
        evidence: [],
    }
}