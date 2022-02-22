<script lang="ts">
    import Fuse from 'fuse.js';
    import { records as foods } from "./db/foods";
    import type { FoodSummary, FoodRecord } from "./db/dabTypes";
    export let placeholder="...";

    const searchTerms = [];
    const foodSummaries = foods.map(f => {return {name: f.name, verdict: f.verdict, aka: f.aka} as FoodSummary});
    foodSummaries.forEach(food => {
        const terms = [food.name, ...food.aka];
        terms.forEach(term => searchTerms.push({name: term, summary: food}))});

    const fuseOptions = {
        findAllMatches: true,
        keys: ["name"]
    };
    const fuse = new Fuse(searchTerms, fuseOptions);
    console.log("searchTerms", searchTerms);
    const getSearchSuggestions = (e: any):any[] => {
        const query = e.target.value;
        const results =  fuse.search(query).map(result => result.item.summary);
        const uniqueResults = [...new Set(results.map(r => r.name))].map(name => foodSummaries.find(f => f.name === name));
        const suggestionsList = document.querySelector("#search-suggestions");
        suggestionsList.innerHTML="";
        uniqueResults.forEach(summary => {
            const suggestion = document.createElement("option");
            suggestion.innerText = summary.name;
            suggestion.setAttribute("goodness", summary.verdict);
            suggestionsList.appendChild(suggestion);
        });
        return results;
    }
</script>

<datalist id="search-suggestions"></datalist>
<input 
    type="text" 
    id="searchbar" 
    placeholder={placeholder} 
    on:input={getSearchSuggestions}
    list="search-suggestions"
    autocomplete="off"
>