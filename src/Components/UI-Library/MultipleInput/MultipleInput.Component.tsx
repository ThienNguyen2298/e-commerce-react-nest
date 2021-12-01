import React from "react";
import cx from "classnames";
import useMultipleInput from "./MultipleInput.Hook";

export type SeparatorType = "ENTER" | "SPACE" | "BOTH";

export interface Props {
  className?: string;
  separatorType: SeparatorType;
  values: string[];
}

const MultipleInput = ({
  className = "",
  separatorType = "ENTER",
  values = [],
}: Props) => {
  const {
    selections,
    focused,
    inputRef,
    wrapperRef,

    handleKeyPress,
    handleKeyDown,
    handleFocus,
    handleItemRemove,
  } = useMultipleInput(values, separatorType);

  return (
    <div
      className={cx(
        "h-auto w-72 appearance-none border-2 rounded-md py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        { "border-blue-500": focused },
        { className }
      )}
      ref={wrapperRef}
    >
      <div className="flex w-full overflow-x-auto no-scrollbar">
        <div className="min-w-max flex">
          {selections.map((item, index) => (
            <span
              key={index}
              className="flex items-center mr-1 h-6 border border-blue-200 text-blue-400 rounded-md text-sm pl-2"
              onClick={handleFocus}
            >
              <span>{item}</span>
              <div
                className="w-4 h-4 mx-1 border border-blue-400 text-blue-400 rounded-full cursor-pointer transform rotate-45 text-base text-center font-bold leading-11px"
                onClick={() => handleItemRemove(index)}
              >
                +
              </div>
            </span>
          ))}
        </div>
        <input
          ref={inputRef}
          className=" h-6 min-w-max w-full outline-none text-base"
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
        />
      </div>
    </div>
  );
};

export default MultipleInput;
