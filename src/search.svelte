<script lang="ts">
    import Fuse from 'fuse.js';
    import { onMount } from 'svelte';
    import { getAllSummaries, getFood, getSearchTerms } from './fn';
    import {focusedFood } from "./state"
    export let currentQuery="...";

    let searchTerms, foodSummaries, fuse;

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

    const changeFocusFood = (e: any):void => {
        const query = e.target.value;
        focusedFood.set(getFood(query))
    }

    onMount(() => {
        searchTerms = getSearchTerms();
        foodSummaries = getAllSummaries();
        const fuseOptions = {
            findAllMatches: true,
            keys: ["name"]
        };
         fuse = new Fuse(searchTerms, fuseOptions);


    })
</script>

<datalist id="search-suggestions"></datalist>
<input 
    type="text" 
    id="searchbar" 
    placeholder={currentQuery} 
    on:input={getSearchSuggestions}
    on:change={changeFocusFood}
    list="search-suggestions"
    autocomplete="off"
>