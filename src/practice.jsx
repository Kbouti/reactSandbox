import { useState, useEffect } from "react";

function Item({ name, isPacked }) {
    if (isPacked) {
        return null
        // return  <li className="item">{name}✔</li>;
    }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>"Sally Ride's Packing List"</h1>
      <ul>
        <Item isPacked={true} name="space suit" />
        <Item isPacked={true} name="Helmet with gold leaf" />
        <Item isPacked={true} name="Photo of Tam" />
      </ul>
    </section>
  );
}
