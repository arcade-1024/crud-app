import React, { Fragment, ReactNode, useCallback, useContext } from "react";
import { X } from "react-feather";
import styles from "../../../../styles/modal.module.css";
import { Transition, Dialog } from "@headlessui/react";
import { observer } from "mobx-react-lite";
import { StoreContext } from "../../../contexts/StoreContext";
import { RootStore } from "../../../stores/RootStore";

interface PropTypes {
	open: boolean;
	handleClose: () => void;
	modalClassName?: string;
	overlayClassName?: string;
	showCloseButton?: boolean;
	children: ReactNode;
	closeButton?: ReactNode;
	overlayStyles?: string;
}

export default observer(function Modal(props: PropTypes) {
	const {
		open,
		handleClose,
		modalClassName = "",
		overlayClassName = "",
		showCloseButton = false,
		children,
		closeButton,
		overlayStyles,
	} = props;
	const { userStore } = useContext<RootStore>(StoreContext);
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				static
				className={`fixed ${styles.modalZIndex} inset-0 overflow-y-auto ${
					userStore.darkMode ? "dark" : ""
				}`}
				open={open}
				onClose={handleClose}
			>
				<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay
							className={`fixed inset-0 transition-opacity pointer-events-none 
                 ${
										overlayStyles
											? overlayStyles
											: "bg-gray-700 dark:bg-stone-900 bg-opacity-40 dark:bg-opacity-40"
									}`}
						/>
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className="hidden sm:inline-block sm:align-middle sm:h-screen"
						aria-hidden="true"
					>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<div
							className={`inline-block align-bottom bg-white dark:bg-stone-600 rounded-lg text-left ${
								styles.modalShadow
							} transform transition-all sm:my-8 sm:align-middle ${
								modalClassName !== ""
									? modalClassName
									: "sm:max-w-2xl sm:w-full"
							}`}
						>
							{showCloseButton && closeButton}
							{children}
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
});
