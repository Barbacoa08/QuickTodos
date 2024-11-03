<script lang="ts">
import { todos } from "$lib/stores/todoStore";
import type { Todo } from "$lib/types";

export let todo: Todo;

const toggleTodo = () => {
	todos.update((items) =>
		items.map((t) =>
			t.id === todo.id ? { ...t, completed: !t.completed } : t,
		),
	);
};

const deleteTodo = () => {
	todos.update((items) => items.filter((t) => t.id !== todo.id));
};
</script>

<div class="todo-item">
  <input
    type="checkbox"
    checked={todo.completed}
    on:change={toggleTodo}
  />
  <span class:completed={todo.completed}>{todo.text}</span>
  <button on:click={deleteTodo}>Delete</button>
</div>

<style>
  .todo-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .completed {
    text-decoration: line-through;
    color: #888;
  }
  
  button {
    margin-left: auto;
    padding: 0.5rem 1rem;
    background: #ff3e00;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background: #ff2d00;
  }
</style>
