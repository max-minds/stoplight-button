<script lang="ts">
    export let value: number[];
</script>

<div>
    <h3>{value.length}</h3>
    <div class="buttons">
        <button on:click={() => value = [...value,Math.random()]}>New</button>
        <button on:click={() => value = []}>Clear</button>
    </div>
    <ul>
        {#each value as num}
            <li>{num.toFixed(2)}</li>
        {/each}
    </ul>
</div>