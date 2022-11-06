import { ReactNode, useContext, useState } from "react";
import { Edit2, X } from "react-feather";
import EditTodo from "../../../container/Home/components/EditTodo/EditTodo";
import { StoreContext } from "../../../contexts/StoreContext";
import { RootStore } from "../../../stores/RootStore";
export interface CardInterface {
	id: number;
	cardTitle: ReactNode;
	cardBody: string;
	// setUserData: React.Dispatch<React.SetStateAction<UserDataInterface[]>>;
}
export default function Card({
	id,
	cardBody,
	cardTitle,
}: // setUserData,
CardInterface) {
	const { userStore } = useContext<RootStore>(StoreContext);
	const [isOpen, setIsOpen] = useState(false);

	// const onDeleteClick = (id: number) => {
	// 	setUserData(userData.filter((user) => user.id !== id));
	// };
	return (
		<>
			<div className="w-full overflow-hidden shadow-lg bg-white dark:bg-stone-600 rounded-lg relative">
				<button
					className="absolute right-2 top-2 text-gray-600 dark:text-gray-300"
					onClick={() => setIsOpen(!isOpen)}
				>
					<Edit2 size={18} />
				</button>
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">{cardTitle}</div>
					<p className="text-gray-700 text-base dark:text-gray-300">
						{cardBody}
					</p>
				</div>
			</div>
			<EditTodo open={isOpen} setOpen={() => setIsOpen(!isOpen)} id={id} />
		</>
	);
}
