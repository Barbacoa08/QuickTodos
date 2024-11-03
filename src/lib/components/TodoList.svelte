<script lang="ts">
import { todos } from "$lib/stores/todoStore";
import TodoItem from "./TodoItem.svelte";
</script>

<div class="todo-list">
  {#each $todos as todo (todo.id)}
    <TodoItem {todo} />
  {/each}
</div>

<style>
  .todo-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
