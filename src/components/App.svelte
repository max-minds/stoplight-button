<script lang="ts">
  import { haptic} from "haptic-util";
import ArrayEx from "./ArrayEx.svelte";
import Input from "./Input.svelte";
import SettingsEx from "./SettingsEx.svelte";
import StoreTable from "./StoreTable.svelte";
  import WidgetSwitch from "./WidgetSwitch.svelte";

  let width = 200;
  let height = 200;
  $: haptic.setSize(width, height);
</script>

<div bind:clientHeight={height} bind:clientWidth={width}>
  <h1>Haptic Template</h1>

  <h2>Boolean</h2>
  <StoreTable id="boolean" component={WidgetSwitch} defaultValue={false}/>

  <h2>String</h2>
  <StoreTable id="string" component={Input} defaultValue={''} />
  
  <h2>Object</h2>
  <StoreTable id="object" component={SettingsEx} defaultValue={{active: false,alive:false}} />

  <h2>Array</h2>
  <StoreTable id="array" component={ArrayEx} defaultValue={[]} />

</div>

<style>
    div {
        background: white;
        padding: 1em;
        width: min-content;
        height: max-content;
    }
</style>
