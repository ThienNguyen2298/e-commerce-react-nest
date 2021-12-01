import { RefObject, useEffect, useMemo, useRef, useState } from "react";

import { useOutSideRef } from "Hooks";
import { SeparatorType } from "./MultipleInput.Component";

const useMultipleInput = (values: string[], separatorType: SeparatorType) => {
  const [selections, setSelections] = useState<string[]>([]);
  const [focused, setFocused] = useState(false);

  let inputRef = useRef(null) as RefObject<HTMLInputElement>;
  let wrapperRef = useRef(null) as RefObject<HTMLDivElement>;

  const focusOut = () => {
    setFocused(false);
  };

  useOutSideRef(wrapperRef, focusOut);

  useEffect(() => {
    values.length && setSelections(values);
  }, [values]);

  const separator = useMemo(() => {
    if (separatorType === "ENTER") {
      return [13];
    }
    if (separatorType === "SPACE") {
      return [32];
    }
    return [13, 32];
  }, [separatorType]);

  const handleKeyPress = (e: any) => {
    if (separator.includes(e.charCode)) {
      setSelections([...selections, e.target.value]);
      inputRef.current.value = "";
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 8 && !inputRef.current.value) {
      selections.pop();
      setSelections([...selections]);
    }
  };

  const handleFocus = (e: any) => {
    if (e.type === "click" && !focused && e.target.tagName === "SPAN") {
      setFocused(true);
    }
    if (e.type === "focus" && !focused && e.target.tagName === "INPUT") {
      setFocused(true);
    }
  };

  const handleItemRemove = (index: number) => {
    selections.splice(index, 1);
    setSelections([...selections]);
  };

  return {
    selections,
    focused,
    inputRef,
    wrapperRef,

    handleKeyPress,
    handleKeyDown,
    handleFocus,
    handleItemRemove,
  };
};

export default useMultipleInput;
