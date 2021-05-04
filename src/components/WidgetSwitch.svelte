<script context="module" lang="ts">
  let num = 0;
</script>

<script lang="ts">
  import { haptic } from "haptic-util";

  let localNum = num++;
  let widgetId = haptic.widgetId;

  export let value: boolean;
</script>

<div class="widget-switch">
  <div class="group inp5 inp13">
    <input type="checkbox" id="{widgetId}-{localNum}" bind:checked={value} />
    <label for="{widgetId}-{localNum}">
      <span class="slider">
        <span class="on label">ON</span>
        <span class="knob ser"><span class="serrated" /></span>
        <span class="off label">OFF</span>
      </span>
    </label>
  </div>
</div>

<style>
  .widget-switch {
    background: #fff;
    padding: 0px;
    margin: 0px;
  }

  .widget-switch .group {
    padding: 30px;
    position: relative;
    display: inline-block;
    background: #fff;
    font-family: "Open Sans", sans-serif;
  }

  .widget-switch .group * {
    transition: all 0.3s ease;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .widget-switch label {
    cursor: pointer;
  }

  .widget-switch input {
    display: none;
  }

  .widget-switch span {
    display: inline-block;
    line-height: 30px;
    vertical-align: middle;
  }

  .widget-switch .slider {
    width: 100px;
    height: 20px;
    background: #e5e5e5;
    position: relative;
    border-radius: 4px;
  }

  .widget-switch .knob {
    width: 20%;
    height: 30px;
    margin-top: -7px;
    vertical-align: top;
    background: #c5c5c5;
    border-radius: 4px;
    border: 2px solid #fff;
  }

  .widget-switch .label {
    font-size: 13px;
    line-height: 13px;
    font-weight: bold;
    color: #999;
    letter-spacing: 1px;
    margin: 0 12px;
  }

  .widget-switch .inp1 .on,
  .widget-switch .inp2 .on,
  .widget-switch .inp5 .on,
  .widget-switch .inp6 .on {
    opacity: 0;
  }

  .widget-switch input:checked + label .knob {
    margin-left: 80%;
    background: green;
  }

  .widget-switch input:checked + label .slider {
    background: #5cab40;
  }

  .widget-switch input:checked + label .off {
    opacity: 0;
  }

  .widget-switch input:checked + label .on {
    color: #5cab40;
    opacity: 1;
  }

  .widget-switch .inp3 .label {
    margin: 15px 0 -8px;
    color: #ccc;
  }

  .widget-switch .inp3 .off {
    opacity: 1 !important;
    float: left;
  }

  .widget-switch .inp3 .on {
    float: right;
  }

  .widget-switch .inp4 .slider {
    width: 180px;
  }

  .widget-switch .inp5 .slider {
    height: 36px;
    width: 80px;
    border-radius: 100px;
    background: #ddd;
  }

  .widget-switch .inp5 .knob {
    height: 30px;
    width: 30px;
    margin: 3px 0 0 3px;
    border-radius: 100px;
    background: #fff;
    border: none;
    position: relative;
    z-index: 10;
  }

  .widget-switch .inp5 .label {
    position: absolute;
    top: 11px;
    z-index: 5;
  }

  .widget-switch .inp5 .off {
    right: 1px;
  }

  .widget-switch .inp5 .on {
    left: 3px;
  }

  .widget-switch .inp5 input:checked + label .knob {
    margin-left: 47px;
    background: white;
  }

  .widget-switch .inp5 input:checked + label .on {
    color: white;
  }

  .widget-switch .inp6 .slider {
    width: 140px;
  }

  .widget-switch .inp6 .off {
    right: 8px;
  }

  .widget-switch .inp6 .on {
    left: 12px;
  }

  .widget-switch .inp6 input:checked + label .knob {
    margin-left: 107px;
    background: white;
  }

  .widget-switch .inp7 label {
    font-size: 16px;
    background: #e5e5e5;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    position: relative;
    display: block;
    text-align: center;
  }

  .widget-switch .inp7 label span {
    display: block;
    color: #999;
    padding: 7px 24px 9px;
    min-width: 120px;
    box-sizing: border-box;
  }

  .widget-switch .inp7 .on {
    display: none;
  }

  .widget-switch .inp7 input:checked ~ label.on span {
    color: #fff;
    border-color: #da6844;
  }

  .widget-switch .inp8 label {
    background: transparent;
    border: none;
  }

  .widget-switch .inp9 .slider {
    height: 36px;
    width: 90px;
    border-radius: 100px;
    background: #ddd;
  }

  .widget-switch .inp9 .knob {
    height: 30px;
    width: 30px;
    margin: 3px 0 0 3px;
    border-radius: 100px;
    background: #fff;
    border: none;
    position: relative;
    z-index: 10;
  }

  .widget-switch .inp9 .on {
    padding-right: 5px;
  }

  .widget-switch .inp9 .off {
    padding-left: 3px;
  }

  .widget-switch .inp9 .label {
    margin: 10px 0 -5px;
  }

  .widget-switch .inp9 input:checked + label .knob {
    margin-left: 57px;
    background: white;
  }

  .widget-switch .inp10 .slider {
    border-radius: 4px;
  }

  .widget-switch .inp10 .knob {
    border-radius: 3px;
  }

  .widget-switch .inp11 .slider {
    height: 20px;
  }

  .widget-switch .inp11 .knob {
    height: 14px;
  }

  .widget-switch .inp11 .ser:before,
  .widget-switch .inp11 .ser:after {
    height: 8px;
    margin-top: 3px;
  }

  .widget-switch .inp12 .label {
    float: none;
    vertical-align: top;
    margin: 0 3px;
    border: 2px solid #ddd;
    text-align: center;
    padding: 1px 6px 1px;
    line-height: 14px;
    border-radius: 4px;
    font-weight: 400;
    font-size: 11px;
  }

  .widget-switch .inp12 .slider {
    display: inline-block;
    vertical-align: top;
  }

  .widget-switch .inp13 .slider {
    border-radius: 4px;
  }

  .widget-switch .inp13 .knob {
    border-radius: 3px;
  }

  .widget-switch .inp13 .label {
    margin: 0;
  }

  .widget-switch .inp13 .off {
    right: 10px;
  }

  .widget-switch .inp13 .on {
    left: 13px;
  }

  .widget-switch .inp14 .slider {
    height: 36px;
  }

  .widget-switch .inp14 .knob {
    height: 30px;
  }

  .widget-switch .inp14 .label {
    padding: 9px 9px;
    font-size: 13px;
    font-weight: bold;
    margin: 0 6px;
  }

  .widget-switch .inp14 .serrated,
  .widget-switch .inp14 .ser:before,
  .widget-switch .inp14 .ser:after {
    height: 20px;
    margin-top: 5px;
  }

  .widget-switch .inp15 .label {
    border: none;
    padding: 0;
    font-weight: bold;
    font-size: 14px;
    margin: 3px 6px 0;
  }

  .widget-switch .serrated,
  .widget-switch .ser:before,
  .widget-switch .ser:after {
    content: "";
    width: 2px;
    height: 20px;
    display: block;
    float: left;
    margin: 5px 0 0 4px;
    background: #eee;
  }

  .widget-switch .ser:before {
    margin-left: 7px;
  }

  .widget-switch .rou .serrated {
    height: 14px;
    margin-top: 8px;
  }

  .widget-switch .rou .serrated {
    height: 18px;
    margin-top: 6px;
  }

  .widget-switch .tight .serrated {
    margin-left: 3px;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.4);
  }

  .widget-switch .wide .serrated {
    height: 16px;
    margin-top: 7px;
    width: 2px;
    margin-left: 6px;
  }
</style>
