import axios from "axios";
import { useFormik } from "formik";
export interface TodoListInterface {
	title: string;
	body: string;
	id: number;
}
const initialValues = {
	title: "",
	body: "",
	id: -1,
};
const useEditTodo = () => {
	const formik = useFormik<TodoListInterface>({
		initialValues,
		onSubmit: async (value, { resetForm }) => {
			const data = await axios.put(
				`https://jsonplaceholder.typicode.com/posts/${value.id}`,
				{
					value,
					userId: 1,
				}
			);
			console.log(data);

			resetForm();
		},
	});
	return formik;
};

export default useEditTodo;
