import React from "react";
import { Card, Skeleton, Image } from "antd";
import { POSTER_NOT_FOUND, queries } from "../../consts";
import Media from "react-media";

const { Meta } = Card;

export const Film = ({ title, year, poster }) => {
  return (
    <div className="film">
      <Media queries={queries}>
        {(match) => (
          <Card
            hoverable
            style={{
              width: match.small_medium ? 205 : 240,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: match.small_medium ? 15 : 20,
              borderRadius: 5,
            }}
            cover={
              poster !== POSTER_NOT_FOUND ? (
                <Image
                  width={match.small_medium ? 165 : 200}
                  src={poster}
                  style={{ borderRadius: 5 }}
                />
              ) : (
                <Skeleton.Image
                  style={{ borderRadius: 5, width: 200, height: 300 }}
                />
              )
            }
          >
            <Meta
              title={title}
              description={year}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            />
          </Card>
        )}
      </Media>
    </div>
  );
};
