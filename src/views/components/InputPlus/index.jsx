import React, { useCallback, useState } from 'react'
import scss from "./index.module.scss"

export const InputPlus = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const memoCallback = useCallback(() => {
    onAdd(value);
    setValue("")
  }, [value]);

  return (
    <div className={scss.inputPlus}>
      <input
        value={value}
        type="text"
        placeholder="write here"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          e.key === "Enter" ? (
            memoCallback()
          ) : (
            null
          )
        }}
      />
      <button
        onClick={() => {
          memoCallback()
        }}
      >
        +
      </button>
    </div >
  )
}
