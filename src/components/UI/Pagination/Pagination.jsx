import React, {useMemo} from "react"
import MyButton from "../Button/MyButton.jsx";
import cl from "../Button/MyButton.module.css";
import {getPagesArray} from "../../../utils/pages";

export default function Pagination({page, totalPages, changePage}) {
    let pages = useMemo(() => getPagesArray(totalPages), [totalPages]);

    return (
        <div>
  {pages.map(p => (
    <MyButton
      key={`page-${p}`}
      className={[
        cl.small,
        p === page ? cl.active : ""
      ].join(" ")}
      onClick={() => changePage(p)}
    >
      {p}
    </MyButton>
  ))}
</div>
    )
}