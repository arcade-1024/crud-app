import React, { ReactNode } from "react";

interface PropTypes {
  title: ReactNode;
  secondaryTitle?: string;
  containerClassName?: string;
  titleClassName?: string;
  secondaryTitleClassName?: string;
  imageUrl?: string;
  modalIcon?: ReactNode;
  modalIconClassName?: string;
}

export default function ModalTitle(props: PropTypes) {
  const {
    title,
    secondaryTitle,
    containerClassName,
    titleClassName,
    secondaryTitleClassName,
    imageUrl,
    modalIcon,
    modalIconClassName,
  } = props;
  return (
    <div className={`flex flex-col px-6 pt-6 rounded ${containerClassName}`}>
      <div className="flex flex-row items-center">
        {imageUrl && (
          <div className="mr-4">
            <img className="w-16 h-16" src={imageUrl} alt={imageUrl} />
          </div>
        )}
        <div className="flex flex-col">
          <div className="flex items-center">
            {modalIcon && (
              <div
                className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full  sm:mx-0 sm:h-10 sm:w-10  ${modalIconClassName}`}
              >
                {modalIcon}
              </div>
            )}
            <div
              className={`text-xl font-semibold text-gray-900 dark:text-white ${
                modalIcon && "ml-3"
              } ${titleClassName ? titleClassName : " leading-6 "}`}
            >
              {title}
            </div>
          </div>
          {secondaryTitle && (
            <div
              className={`text-sm ${
                secondaryTitleClassName
                  ? secondaryTitleClassName
                  : "text-gray-700 font-medium"
              }`}
            >
              {secondaryTitle}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
