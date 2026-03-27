import React from "react"
import MySelect from './UI/Select/MySelect.jsx';
import MyInput from './UI/Input/MyInput.jsx';

export default function PostFilter({filter, setFilter}) {
    return (
        <div>
          <MyInput
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
            type="text"
          />
          <MySelect
            value={filter.sort}
            onChange={sortPosts => setFilter({...filter, sort: sortPosts})}
            defaultValue = "Сортировка"
            options={[
              { value: "title", name: "Название" }, 
              { value: "body", name: "Текст" },
            ]}
          />
        </div>
    )
}