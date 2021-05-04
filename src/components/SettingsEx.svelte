<script type="ts">
  import WidgetSwitch from "./WidgetSwitch.svelte";

  export let value: { alive: boolean; active: boolean };
</script>

<div>
  <div class="row">
    <p>Alive</p>
    <WidgetSwitch bind:value={value.alive} />
  </div>
  <div class="row">
    <p>Active</p>
    <WidgetSwitch bind:value={value.active} />
  </div>
</div>
