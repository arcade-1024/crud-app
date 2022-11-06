import { useState, useEffect } from "react";
import Modal from "../../../../common/components/Modal/Modal";
import ModalActions from "../../../../common/components/Modal/ModalActions";
import ModalContent from "../../../../common/components/Modal/ModalContent";
import ModalTitle from "../../../../common/components/Modal/ModalTitle";
import useAddTodo from "../../hooks/useAddTodo";
import useEditTodo from "../../hooks/useEditTodo";
import axios from "axios";

export interface EditTodoInterface {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	id: number;
}
const EditTodo = ({ open, setOpen, id }: EditTodoInterface) => {
	const formik = useEditTodo();
	const { values, handleChange, handleSubmit, setFieldValue } = formik;
	useEffect(() => {
		const fetchAllTodo = async () => {
			try {
				const result = await axios(
					`https://jsonplaceholder.typicode.com/posts/${id}`
				);
				setFieldValue("title", result.data.title);
				setFieldValue("body", result.data.body);
				setFieldValue("id", result.data.id);
			} catch {}
		};
		if (open) {
			fetchAllTodo();
		}
	}, [open]);
	return (
		<Modal open={open} handleClose={() => setOpen(!open)}>
			<form
				onSubmit={(e) => {
					handleSubmit(e);
					setOpen(!open);
				}}
			>
				<ModalTitle title="Add Todo" />
				<ModalContent>
					<label htmlFor="title" className="mb-1">
						Title
					</label>
					<input
						name="title"
						onChange={handleChange}
						value={values.title}
						className="disabled:opacity-50 px-4 py-3 text-sm border border-gray-400 rounded focus:outline-none focus:ring-2 ring-indigo-500 mb-4 dark:bg-stone-800"
					/>
					<label htmlFor="title" className="mb-1">
						Description
					</label>
					<textarea
						name="body"
						onChange={handleChange}
						value={values.body}
						className="disabled:opacity-50 px-4 py-3 text-sm border border-gray-400 rounded focus:outline-none focus:ring-2 ring-indigo-500 dark:bg-stone-800"
						style={{ resize: "none" }}
					/>
				</ModalContent>
				<ModalActions>
					<button
						type="button"
						className="border transition-all dark:bg-opacity-70 text-white font-bold py-2 px-4 mr-4 rounded"
						onClick={() => {
							setOpen(!open);
							formik.resetForm();
						}}
					>
						Cancel
					</button>
					<button
						type="submit"
						className="bg-indigo-400 hover:bg-indigo-500 transition-all dark:bg-opacity-70 text-white font-bold py-2 px-4 rounded"
					>
						Save
					</button>
				</ModalActions>
			</form>
		</Modal>
	);
};

export default EditTodo;
