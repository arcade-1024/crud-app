import { ReactNode, useEffect, useState, useContext } from "react";
import { useTheme } from "next-themes";
import { StoreContext } from "../../../contexts/StoreContext";
import { RootStore } from "../../../stores/RootStore";

export interface RootLayoutInterface {
	children: ReactNode;
}
const RootLayout = ({ children }: RootLayoutInterface) => {
	const { userStore } = useContext<RootStore>(StoreContext);

	const { theme, systemTheme, setTheme } = useTheme();
	const [themes, setThemes] = useState("");
	useEffect(() => {
		const currentTheme = theme === "system" ? systemTheme : theme;

		if (currentTheme === "dark") {
			setThemes("dark");
			userStore.switchDarkColorTheme();
		}
		if (currentTheme === "light") {
			setThemes("light");
			userStore.switchLightColorTheme();
		}
	}, [theme, systemTheme]);

	return <div className={`${themes}`}>{children}</div>;
};

export default RootLayout;
