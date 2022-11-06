import { action, computed, makeObservable, observable } from "mobx";
import { TodoListInterface } from "../common/constants/constant";
import { RootStore } from "./RootStore";

export class UserStore {
	private root: RootStore;
	@observable todoList: TodoListInterface[];
	@observable darkMode: boolean = false;

	constructor(root: RootStore) {
		this.root = root;
		makeObservable(this);
	}
	@action
	setAllTodo(todoList: TodoListInterface[]) {
		this.todoList = todoList;
	}

	@action
	switchDarkColorTheme() {
		this.darkMode = true;
	}

	@action
	switchLightColorTheme() {
		this.darkMode = false;
	}
}
