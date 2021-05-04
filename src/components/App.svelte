<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import TaskItem from "./TaskItem.svelte";
  import { v4 as uuid } from "uuid";
  import CheckIcon from "./CheckIcon.svelte";
  import TrashIcon from "./TrashIcon.svelte";
  import PlusIcon from "./PlusIcon.svelte";
  import Button from "./Button.svelte";
  import { haptic, HapticStore } from "haptic-util";

  const tasks = new HapticStore<{ name: string; complete: boolean; id: string }[]>("tasks", { default: [], sync: true });
  let newTaskName = "";

  $: incomplete = $tasks.filter((item) => !item.complete).length;

  const addTask = () => {
    if (!newTaskName) return;
    $tasks = [{ name: newTaskName, complete: false, id: uuid() }, ...$tasks];
    newTaskName = "";
    taskFormOpen = false;
  };

  const clearCompleted = () => {
    $tasks = $tasks.filter((item) => !item.complete);
  };

  const clearAll = () => {
    $tasks = [];
  };

  const removeTask = (task) => {
    $tasks = $tasks.filter((t) => t !== task);
  };

  const completeTask = (task) => {
    $tasks = $tasks.map((item) =>
      item === task ? { ...task, complete: !task.complete } : task
    );
  };

  let taskFormOpen = true;
  const openTaskForm = () => {
    taskFormOpen = true;
  };

  let width = null;
  let height = null;

  $: {
    width && height && haptic.setSize(600, height);
  }
</script>

<section class="tasks" bind:clientWidth={width} bind:clientHeight={height}>
  <div class="top">
    <h1>
      Tasks
      {#if incomplete}
        <small transition:fade>({incomplete})</small>
      {/if}
    </h1>
    {#if !taskFormOpen}
      <Button on:click={openTaskForm} Icon={PlusIcon}>New</Button>
    {/if}
  </div>
  {#if taskFormOpen}
    <div class="new-task-input" transition:slide>
      <input
        type="text"
        class="input-group-field"
        bind:value={newTaskName}
        placeholder="New task"
      />
      <Button on:click={addTask} Icon={PlusIcon}>Add</Button>
    </div>

    <div class="buttons" transition:slide>
      <Button on:click={clearCompleted} Icon={CheckIcon} warning group
        >Clear Completed</Button
      >
      <Button on:click={clearAll} Icon={TrashIcon} alert group>Clear All</Button
      >
    </div>
  {/if}

  <ul class="tasks__list">
    {#each $tasks as task (task.id)}
      <TaskItem
        on:remove={() => removeTask(task)}
        on:complete={() => completeTask(task)}
        {task}
      />
    {/each}
  </ul>
</section>

<style>
  small {
    color: #cacaca;
    font-size: 80%;
  }
  h1 {
    font-size: 1.2rem;
    margin-right: auto;
    height: 3rem;
  }
  .top {
    display: flex;
    margin-bottom: 1rem;
  }
  .new-task-input {
    display: flex;
    margin-bottom: 1rem;
  }

  .tasks {
    width: 100%;
    max-width: 45rem;
    padding: 1em;
    overflow: auto;
    background-color: #fff;
    box-shadow: 0px 0.25rem 1rem rgba(0, 0, 0, 0.25);
    height: min-content;
  }
  .tasks__list {
    clear: both;
  }

  input {
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #cacaca;
    font-family: inherit;
    font-size: 1rem;
    color: #0a0a0a;
    background-color: #fefefe;
    box-shadow: inset 0 1px 2px hsl(0deg 0% 4% / 10%);
    border-radius: 0;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
    height: 3rem;

    margin: 0;
    white-space: nowrap;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1em;
  }
</style>
