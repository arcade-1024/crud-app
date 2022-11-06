import React, { ReactNode } from "react";

interface PropTypes {
  content?: string;
  children?: ReactNode;
  containerClassName?: string;
}

export default function ModalContent(props: PropTypes) {
  const { content, children, containerClassName } = props;
  return (
    <div
      className={`${
        containerClassName ? containerClassName : "flex flex-col px-6 mt-4"
      }`}
    >
      <div className="font-normal">{content}</div>
      {children}
    </div>
  );
}
