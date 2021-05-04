<script lang="ts">
  import { HapticStore } from "haptic-util";

  export let id: string;
  export let component: any;
  export let defaultValue: unknown;

  const value1 = new HapticStore<typeof defaultValue>(`${id}-1`, {
    sync: false,
    default: defaultValue,
  });
  const value2 = new HapticStore<typeof defaultValue>(`${id}-2`, {
    sync: false,
    default: defaultValue,
  });
  const valueLogging = new HapticStore<typeof defaultValue>(`${id}-Logging`, {
    log: true,
    default: defaultValue,
  });
  const valueSync = new HapticStore<typeof defaultValue>(`${id}-Sync`, {
    sync: true,
    default: defaultValue,
  });
  const valueSync2 = new HapticStore<typeof defaultValue>(`${id}-Sync2`, {
    sync: true,
    default: defaultValue,
  });
  const valueSyncLog = new HapticStore<typeof defaultValue>(`${id}-SyncLog`, {
    log: true,
    sync: true,
    default: defaultValue,
  });
</script>

<table>
  <tr>
    <td>Name</td>
    <td>Purpose</td>
    <td>Ex1</td>
    <td>Ex2 = Ex1</td>
  </tr>

  <tr>
    <td>One</td>
    <td>data</td>
    <td><svelte:component this={component} bind:value={$value2} /></td>
    <td><svelte:component this={component} bind:value={$value2} /></td>
  </tr>

  <tr>
    <td>Two</td>
    <td>Multiple fields</td>
    <td><svelte:component this={component} bind:value={$value1} /></td>
    <td><svelte:component this={component} bind:value={$value1} /></td>
  </tr>

  <tr>
    <td>Logging</td>
    <td>Test logging</td>
    <td><svelte:component this={component} bind:value={$valueLogging} /></td>
    <td><svelte:component this={component} bind:value={$valueLogging} /></td>
  </tr>

  <tr>
    <td>Sync</td>
    <td>Using Sync</td>
    <td><svelte:component this={component} bind:value={$valueSync} /></td>
    <td><svelte:component this={component} bind:value={$valueSync} /></td>
  </tr>

  <tr>
    <td>Sync Two</td>
    <td>Multiple synced Fields</td>
    <td><svelte:component this={component} bind:value={$valueSync2} /></td>
    <td><svelte:component this={component} bind:value={$valueSync2} /></td>
  </tr>

  <tr>
    <td>Sync Log</td>
    <td>Sync and Log</td>
    <td><svelte:component this={component} bind:value={$valueSyncLog} /></td>
    <td><svelte:component this={component} bind:value={$valueSyncLog} /></td>
  </tr>
</table>

<style>
  table {
    border: 1px solid grey;
    box-shadow: 2px 2px 12px 0px grey;
  }

  td {
    border-bottom: 1px solid grey;
    border-left: 1px solid grey;
    margin: 0;
    padding: 0.3em;
  }

  tr:last-of-type td {
    border-bottom-width: 0px;
  }
  td:first-of-type {
    border-left-width: 0px;
  }
</style>
