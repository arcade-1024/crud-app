import React, { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  className?: string;
}

export default function ModalActions(props: PropTypes) {
  return (
    <div
      className={`${
        props.className
          ? props.className
          : "mt-5 sm:mt-4 px-6 pb-6 flex justify-end"
      }`}
    >
      {props.children}
    </div>
  );
}
