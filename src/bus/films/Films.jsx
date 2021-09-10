import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "../../components/Loader";
import { Film } from "./Film";
import { Empty } from "antd";

export const Films = () => {
  const film = useSelector((state) => state.films.film);
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="films">
      {Object.keys(film).length ? (
        <Film title={film.Title} year={film.Year} poster={film.Poster} />
      ) : (
        <Empty
          imageStyle={{ marginBottom: 15 }}
          description={<span className="films__not">Нет фильма!</span>}
        />
      )}
    </div>
  );
};
