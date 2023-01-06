import React from 'react'
import scss from "./index.module.scss"

export const Header = ({ todo }) => {
  return (
    <>
      {todo.length ? (
        <h1 className={scss.h1L}>{todo.length}</h1>
      ) : (
        <h1>To Do List</h1>
      )}

    </>
  )
}
