import React, { useState } from "react";
import { changeTheme } from "./helpers/changeTheme";
import { AddCategory, GifGrid } from "./components";

import "./GifApp.css";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  };

  const handleRemoveOne = (ind) => {
    let list = [...categories];
    list.splice(ind, 1);
    setCategories(list);
  };

  const handleRemoveAll = () => {
    setCategories([]);
  };

  return (
    <>
      <button id="dmode" onClick={changeTheme}>
        Modo oscuro
      </button>
      {/* Titulo */}
      <h1>GifApp</h1>

      {/* Input */}
      <AddCategory addCategory={handleAddCategory} />
      {/* Listado de Gif */}
      <button className="reset" onClick={handleRemoveAll}>
        Reset
      </button>
      {categories.map((category) => (
        <>
          <button className="delete-category" onClick={handleRemoveOne}>
            Eliminar
          </button>
          <GifGrid key={category} category={category} />
        </>
      ))}
    </>
  );
};
