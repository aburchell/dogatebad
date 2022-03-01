<script>
import { onMount } from "svelte";
import { focusedFood } from "./state";
import { colors } from "./db/colors"
import { messages } from "./db/copy"
$: $focusedFood, drawFocusedFoodCard();

let cardElem, cardVerdict
let mounted=false
onMount(() => {
    mounted=true
    cardElem = document.getElementById("wrapper")
    console.log("foodCard onMount", $focusedFood.name)
})

const drawFocusedFoodCard = () => {
    if (mounted && $focusedFood.name) {
        cardElem.style.display = "block"
        cardVerdict = $focusedFood.verdict

        document.getElementById("food-name").innerText = $focusedFood.name
        document.getElementById("food-verdict").innerText = cardVerdict
        document.getElementById("food-message").innerText = messages[cardVerdict]

    } else {
        console.log("not mounted or food not selected")
    }
}
</script>

<div id="wrapper">
    <div id="name-and-verdict">
        <h2 id="food-name" class="name">NAME</h2>
        <h1 id="food-verdict" class="verdict">VERDICT</h1>
    </div>
    <p id="food-message" class="verdict-blurb">BLURB</p>
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
        width: 100%;
        font-size: 2rem;
    }
    #food-verdict{
        font-size: 4rem;
    }
</style>
