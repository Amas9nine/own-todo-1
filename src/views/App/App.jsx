import React, { useLayoutEffect, useState } from 'react'
import scss from "./app.module.scss"
import { InputPlus } from '../components/InputPlus'
import { InpitTask } from '../components/InputTask'
import { Header } from '../components/Header';

export const generateId = () => (
  Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);

export const App = () => {
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("own-todo-blue")) || []);
  const [download, setDownload] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setDownload(false)
    }, 3000)
  }, [])

  useLayoutEffect(() => {
    localStorage.setItem("own-todo-blue", JSON.stringify(todo))
  }, [todo])

  const onAdd = (title) => {
    if (title) {
      setTodo([{ id: generateId(), title }, ...todo])
    }
  }

  const onDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id))
  }

  const onEdite = (id, value) => {
    setTodo(todo.map(item => item.id === id ? {
      ...item,
      title: value
    } : item))
  }

  if (download) {
    return <div className={scss.loader}>
      <img src='https://i.imgur.com/uf7Nf7T.gif' alt='loader' />
    </div>
  }

  return (
    <article className={scss.article}>
      <Header todo={todo} />
      <section>
        <InputPlus
          onAdd={onAdd}
        />
      </section>
      <section>
        {todo.length ? (null) : (<p className={scss.p}>没有任务瓦夏</p>)}
        {todo.map((item) => (
          <InpitTask
            id={item.id}
            key={item.id}
            title={item.title}
            onDelete={onDelete}
            onEdite={onEdite}
          />
        ))}
      </section>
    </article>
  )
}
