<script>
import { onMount } from "svelte";
import { focusedFood } from "./state";
$: $focusedFood, drawFocusedFoodCard();

let cardElem;
let mounted=false
function drawFocusedFoodCard() {
    if (mounted) {
        console.log("drawing focused card!", $focusedFood)
        if ($focusedFood.name) cardElem.style.display = "block";
    } else {
        console.log("not mounted")
    }
}
onMount(() => {
    mounted=true
    cardElem = document.getElementById("wrapper")
    console.log("foodCard onMount", $focusedFood.name)
})
</script>

<div id="wrapper">
    <div id="name-and-verdict">
        <h2 id="food-name" class="name">NAME</h2>
        <h1 id="food-verdict" class="verdict">VERDICT</h1>
    </div>
    <p id="verdict-message" class="verdict-blurb">BLURB</p>
    <!-- TODO create an evidence.svelte -->
</div>

<style>
    #wrapper{
        display:none;
        border-radius: 2%;
        aspect-ratio: 1.69;
        border-width: 15;
        border: solid;
        margin-left: 20%;
    }    
    #name-and-verdict{
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        width: 100%;
    }
    #food-name{
        color: red;
        background-color: darkcyan;
        width: 100%;
        font-size: 1rem;
    }
    #food-verdict{
        font-size: 2rem;
    }
</style>
