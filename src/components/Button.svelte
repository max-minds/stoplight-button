<script>
  import { fade } from "svelte/transition";
  export let Icon;
  export let warning = false;
  export let alert = false;
  export let group = false;
  export let style = "";
</script>

<button
  class:warning
  class:alert
  on:click
  class:group
  class:icon-only={!$$slots.default}
  transition:fade
  {style}
>
  <div class="icon">
    <svelte:component this={Icon} />
  </div>
  {#if $$slots.default}
    <div class="text">
      <slot />
    </div>
  {/if}
</button>

<style>
  button {
    display: flex;
    text-align: center;
    line-height: 1;
    cursor: pointer;
    transition: background-color 0.25s ease-out, color 0.25s ease-out;
    vertical-align: middle;
    border: 1px solid transparent;
    border-radius: 0;
    padding: 0.85em 1em;
    font-size: 0.9rem;
    background-color: #2199e8;
    color: #fefefe;
    align-items: center;
    justify-content: center;
    height: 3rem;
  }

  button:hover,
  button:focus {
    box-shadow: inset 0 0 0px 1000000px rgb(0 0 0 / 10%);
  }

  button.group {
    margin-right: 2px;
  }

  button.group:last-child {
    margin-right: 0px;
  }

  .warning {
    background-color: #ffae00;
  }

  .alert {
    background-color: #da3116;
  }

  .icon {
    height: 100%;
    width: 14px;
    margin-right: 5px;
  }

  .icon-only .icon {
    margin-right: 0px;
  }
</style>
