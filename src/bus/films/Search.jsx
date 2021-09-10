import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchFilm, showError } from "../../init/actions";
import { Input } from "antd";
import { message } from "antd";

export const Search = () => {
  const loading = useSelector((state) => state.app.loading);
  const error = useSelector((state) => state.app.error);

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const search = (inputValue) => {
    if (inputValue.trim()) {
      dispatch(searchFilm(inputValue));
      setValue("");
    } else {
      !error && dispatch(showError("Введите название фильма!"));
      message.error(`Ошибка: ${error || "Введите название фильма!"}`);
    }
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search">
      <Input.Search
        placeholder="Введите название фильма..."
        onSearch={search}
        disabled={loading}
        loading={loading}
        size="large"
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};
