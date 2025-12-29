"use client";
import { useMemo, useState } from "react";
import { LoadMoreObserver } from "@/src/shared/ui/LoadMoreObserver/LoadMoreObserver";

export const Cards = () => {
  const [page, setPage] = useState(1);
  const perPage = 5;

  const listCards = useMemo(() => {
    const list = [];

    for (let i = 0; i < 250; i++) {
      list.push(i + 1);
    }

    return list;
  }, []);

  const changePage = () => setPage((prev) => prev + 1);

  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          minHeight: "1000px",
        }}
      >
        {listCards.slice(0, perPage * page).map((el) => (
          <li
            key={el}
            style={{
              backgroundColor: "#0075F2",
              height: "200px",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3em",
            }}
          >
            {el}
          </li>
        ))}
      </ul>
      <div style={{ backgroundColor: "red", height: "50px" }}>
        <LoadMoreObserver onIntersect={changePage} disabled={page === 50} />
      </div>
    </div>
  );
};
