<script>
import { onMount } from "svelte";
import TodoList from "$lib/components/TodoList.svelte";
import AddTodo from "$lib/components/AddTodo.svelte";
import { todos } from "$lib/stores/todoStore";

let mounted = false;

onMount(() => {
	mounted = true;
	const storedTodos = localStorage.getItem("todos");
	if (storedTodos) {
		todos.set(JSON.parse(storedTodos));
	}
});

$: if (mounted) {
	localStorage.setItem("todos", JSON.stringify($todos));
}
</script>

<div class="container">
  <h1>Todo App</h1>
  <AddTodo />
  <TodoList />
</div>

<style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
  }
</style>
