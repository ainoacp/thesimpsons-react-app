import React from "react";

export default function Paginator({page, setPage}) {
    return (
        <div>
            {page && <button onClick={() => setPage(page + 10)}>Ver más</button>}
        </div>
    )
}