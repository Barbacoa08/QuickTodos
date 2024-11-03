<script lang="ts">
import { todos } from "$lib/stores/todoStore";

let todoText = "";

const addTodo = (
	e: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement },
) => {
	e.preventDefault();

	if (todoText.trim()) {
		todos.update((items) => [
			...items,
			{
				id: crypto.randomUUID(),
				text: todoText,
				completed: false,
				createdAt: Date.now(),
			},
		]);
		todoText = "";
	}
};
</script>

<form onsubmit={addTodo} class="add-todo">
  <input
    type="text"
    bind:value={todoText}
    placeholder="Add a new todo..."
  />

  <button type="submit">Add</button>
</form>

<style>
  .add-todo {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 0.5rem 1rem;
    background: #0070f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background: #0051cc;
  }
</style>
