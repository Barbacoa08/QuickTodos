import { writable } from "svelte/store";
// import { get as getFromDB, set } from "idb-keyval";
import type { Todo } from "../types";

function createTodoStore() {
	const { subscribe, set: setStore, update } = writable<Todo[]>([]);

	return {
		subscribe,
		set: setStore,
		add: async (text: string) => {
			const todo: Todo = {
				id: crypto.randomUUID(),
				text,
				completed: false,
				createdAt: Date.now(),
			};

			update((todos) => {
				const newTodos = [...todos, todo];
				// set("todos", newTodos);
				return newTodos;
			});
		},
		toggle: async (id: string) => {
			update((todos) => {
				const newTodos = todos.map((todo) =>
					todo.id === id ? { ...todo, completed: !todo.completed } : todo,
				);
				// set("todos", newTodos);
				return newTodos;
			});
		},
		delete: async (id: string) => {
			update((todos) => {
				const newTodos = todos.filter((todo) => todo.id !== id);
				// set("todos", newTodos);
				return newTodos;
			});
		},
		load: async () => {
			// const storedTodos = await getFromDB("todos");
			// setStore(storedTodos || []);
		},
	};
}

export const todos = createTodoStore();
