<script lang="ts">
import { haptic, HapticStore } from "haptic-util";

  import { draw, fade } from "svelte/transition";
  
  const states = ["triangle", "circle", "octagon"] as const;

  const state = new HapticStore<typeof states[number]>("state", {default: "circle", sync: true});

  const handleClick = () => {
    $state = states[(states.indexOf($state) + 1) % states.length];
  };

  haptic.setSize(200,200);
</script>

<div class="outer">
  <div class="button {$state}">
    <div class="inner">
      <svg width="100%" height="100%" viewBox="0 0 106 106">
        {#if $state === "triangle"}
          <polygon
            on:click={handleClick}
            points="3,96 103,96 53,10"
            in:draw={{ duration: 200, delay: 200 }}
            out:draw={{ duration: 200 }}
            style="stroke: yellow"
          />

          <polygon
            on:click={handleClick}
            points="3,96 103,96 53,10"
            in:fade={{ duration: 200, delay: 400 }}
            out:fade={{ duration: 200, delay: 200 }}
            style="fill: yellow"
          />
        {:else if $state === "octagon"}
          <polygon
            on:click={handleClick}
            points="99,34 72,7 34,7 7,34 7,72 34,99 72,99 99,72"
            in:draw={{ duration: 200, delay: 200 }}
            out:draw={{ duration: 200 }}
            style="stroke: red"
          />
          <polygon
            on:click={handleClick}
            points="99,34 72,7 34,7 7,34 7,72 34,99 72,99 99,72"
            in:fade={{ duration: 200, delay: 400 }}
            out:fade={{ duration: 200, delay: 200 }}
            style="fill: red"
          />
        {:else if $state === "circle"}
          <circle
            on:click={handleClick}
            cx="53"
            cy="53"
            r="50"
            in:draw={{ duration: 200, delay: 200 }}
            out:draw={{ duration: 200 }}
            style="stroke: green"
          />
          <circle
            on:click={handleClick}
            cx="53"
            cy="53"
            r="50"
            in:fade={{ duration: 200, delay: 400 }}
            out:fade={{ duration: 200, delay: 200 }}
            style="fill: green"
          />
        {/if}
      </svg>
    </div>
  </div>
</div>

<style>
  * {
    border: 0px !important;
    outline: 0px !important;
  }
  .inner {
    width: 100%;
    height: 100%;
  }
  div.button {
    margin: auto;
    width: 100%;
    height: 100%;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    outline: 0;
    height: 100%;
  }

  .outer {
    height: 100%;
    width: 100%;
  }

  div.button svg * {
    fill: transparent;
    stroke-width: 2px;
  }
</style>
