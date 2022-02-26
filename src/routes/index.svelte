<script>
    import Search from "../search.svelte";
    import { DISCLAIMER } from "../db/copy";
import FoodCard from "../foodCard.svelte";
</script>

<main>
    <h1 id="action-header">
        <span id="eponym">Dog ate</span>
        <Search></Search>
    </h1> 
    <FoodCard></FoodCard>
    <footer id="disclaimer">
        {@html DISCLAIMER}
    </footer>
</main>

<style>
    main{
        padding: 10%;
        max-width: 900;
    }
</style>