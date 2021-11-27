import React, { ReactNode, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { useOutSideRef } from "Hooks";

export interface Props {
  wrapperClass: string;
  inputClass: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  value: string;
  type: string;
  maxLength: number;
  disabled: boolean;
  allowClear: boolean;
  onChange: (e: any) => void;
  onPressEnter: (e: any) => void;
}

const SimpleText = (props: Props) => {
  const {
    value,
    wrapperClass,
    inputClass,
    allowClear,
    prefix,
    suffix,
    onChange,
  } = props;

  const [focused, setFocused] = useState(false);

  let wrapperRef = useRef<HTMLDivElement>(null);
  let inputRef = useRef<HTMLInputElement>(null);

  const showClearIcon = useMemo(() => {
    return value && allowClear;
  }, [value, allowClear]);

  const focusOut = () => {
    setFocused(false);
  };

  useOutSideRef(wrapperRef, focusOut);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleChange = (e: any) => {
    onChange && onChange(e);
  };

  const handleClear = () => {
    let event = {
      target: {
        value: "",
      },
    };
    handleChange(event);
    inputRef.current?.focus();
  };

  return (
    <div
      className={cx(
        "h-9 w-72 appearance-none border-2 rounded-md px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex items-center",
        { "border-blue-500": focused },
        { [wrapperClass]: wrapperClass }
      )}
      ref={wrapperRef}
      onClick={handleFocus}
      onFocus={handleFocus}
    >
      {prefix}
      <input
        className={cx("h-full w-auto border-0 focus:outline-none pl-1 flex-1", {
          [inputClass]: inputClass,
        })}
        value={value}
        onFocus={() => wrapperRef.current?.focus()}
        onChange={handleChange}
        ref={inputRef}
      />
      <div className="w-auto">
        {showClearIcon && (
          <div
            className="h-4 w-4 border bg-gray-700 text-white rounded-full text-center leading-11px transform rotate-45 cursor-pointer"
            onClick={handleClear}
          >
            +
          </div>
        )}
      </div>
      {suffix}
    </div>
  );
};

SimpleText.defaultProps = {
  wrapperClass: "",
  inputClass: "",
  allowClear: false,
  prefix: null,
  suffix: null,
};

export default SimpleText;
