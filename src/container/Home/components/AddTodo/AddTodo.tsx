import React, { useState } from "react";
import Modal from "../../../../common/components/Modal/Modal";
import ModalActions from "../../../../common/components/Modal/ModalActions";
import ModalContent from "../../../../common/components/Modal/ModalContent";
import ModalTitle from "../../../../common/components/Modal/ModalTitle";
import useAddTodo from "../../hooks/useAddTodo";

export interface AddTodoInterface {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddTodo = ({ open, setOpen }: AddTodoInterface) => {
	const formik = useAddTodo();
	const { values, handleChange, handleSubmit } = formik;
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

export default AddTodo;
