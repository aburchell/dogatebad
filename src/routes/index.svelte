<script>
    import Search from "../search.svelte";
    import { DISCLAIMER } from "../db/copy";
</script>

<main>
    <h1 id="action-header">
        <span id="eponym">Dog ate</span>
        <Search></Search>
    </h1> 
    <footer id="disclaimer">
        {@html DISCLAIMER}
    </footer>
</main>