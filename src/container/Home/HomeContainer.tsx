import { useEffect, useState, useContext } from "react";
import NavBar from "../../common/components/NavBar/NavBar";
import PageLayout from "../../common/layout/PageLayout/PageLayout";
import axios from "axios";
import { FixedTable } from "../../common/components/FixedTable/FixedTable";
import TableRow from "./components/TableRow/TableRow";
import Image from "next/image";
import SearchBar from "../../common/components/SearchBar/SearchBar";
import { StoreContext } from "../../contexts/StoreContext";
import { RootStore } from "../../stores/RootStore";
import { observer } from "mobx-react-lite";
import Card from "../../common/components/Card/Card";
import AddTodo from "./components/AddTodo/AddTodo";

export interface TableDataInterface {
	API: string;
	Description: string;
	Auth: string;
	HTTPS: boolean;
	Cors: string;
	Link: string;
	Category: string;
}

const HomeContainer = () => {
	const { userStore } = useContext<RootStore>(StoreContext);
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		const fetchAllTodo = async () => {
			try {
				const result = await axios(
					`https://jsonplaceholder.typicode.com/posts`
				);
				userStore.setAllTodo(result.data);
			} catch {}
		};
		fetchAllTodo();
	}, []);
	return (
		<PageLayout>
			<NavBar />
			<span className="mx-auto text-center w-1/3 text-gray-500 dark:text-gray-300 font-poppins font-light leading-7">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor.
			</span>

			<div className="flex items-center rounded-lg pb-5 px-6  pt-5 bg-white dark:bg-stone-600 shadow-md dark:shadow-zinc-900 mt-4 ">
				<div className="flex flex-col flex-1  justify-center">
					<div className="text-xl font-semibold text-gray-800 dark:text-gray-50">
						Todo List
					</div>
					<div className="text-sm font-medium text-gray-600 dark:text-gray-300">
						You can see all todo data.
					</div>
				</div>
				<button
					className="bg-indigo-400 hover:bg-indigo-500 transition-all dark:bg-opacity-70 text-white font-bold py-2 px-4 rounded "
					onClick={() => setIsOpen(!isOpen)}
				>
					Add
				</button>
			</div>
			{/* <pre>{JSON.stringify(userStore.todoList, null, 3)}</pre> */}
			<div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8  mt-6">
				{userStore.todoList &&
					userStore.todoList.map((todo) => (
						<Card
							cardBody={todo.body}
							cardTitle={todo.title}
							id={todo.id}
							key={todo.id}
						/>
					))}
			</div>
			<AddTodo open={isOpen} setOpen={() => setIsOpen(!isOpen)} />
		</PageLayout>
	);
};

export default observer(HomeContainer);
