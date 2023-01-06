import React, { useState } from 'react'
import scss from "./index.module.scss"

export const InpitTask = ({ id, title, onDelete, onEdite }) => {
  const [value, setValue] = useState(title);
  const [check, setCheck] = useState(false);
  const [isEditMode, setEditMode] = useState(false);

  return (
    <>
      <article className={scss.inpitTask}>
        <input type="checkbox"
          checked={check}
          onChange={(e) => {
            setCheck(e.target.checked)
          }}
        />
        {
          isEditMode ? (
            <form onSubmit={() => {
              onEdite(id, value);
              setEditMode(false)
            }}>
              <input type="text"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)
                }}
              />
            </form>
          ) : (
            <div className={check ? scss.checked : null}>{title}</div>
          )
        }
        {isEditMode ? (
          <button
            onClick={() => {
              onEdite(id, value)
              setEditMode(false)
            }}
            aria-label="edit"
          >
            edite
          </button>
        ) : (
          <button
            onClick={() => {
              setEditMode(true)
            }}
            aria-label="edit"
          >
            edite
          </button>
        )}
        <button
          onClick={() => {
            onDelete(id)
          }}
          aria-label="delete"
        >
          delete
        </button>
      </article>
    </>
  )
}
