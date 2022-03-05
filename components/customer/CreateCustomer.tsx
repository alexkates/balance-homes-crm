import React, { useState } from "react";
import Router from "next/router";

export default function () {
  const [name, setName] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { name };
      await fetch("/api/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/customer");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitData}>
      <input
        autoFocus
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        type="text"
        value={name}
      />
      <input disabled={!name} type="submit" value="Create" />
      <a className="back" href="#" onClick={() => Router.push("/customer")}>
        Cancel
      </a>
    </form>
  );
}
