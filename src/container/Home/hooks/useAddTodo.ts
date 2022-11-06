import axios from "axios";
import { useFormik } from "formik";
export interface TodoListInterface {
	title: string;
	body: string;
}
const initialValues = {
	title: "",
	body: "",
};
const useAddTodo = () => {
	const formik = useFormik<TodoListInterface>({
		initialValues,
		onSubmit: async (value) => {
			const data = await axios.post(
				"https://jsonplaceholder.typicode.com/posts",
				{
					value,
					userId: 1,
				}
			);
			console.log(data);
		},
	});
	return formik;
};

export default useAddTodo;
