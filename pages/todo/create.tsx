import React, { useState } from "react";
import Router from "next/router";

const CreateTodo: React.FC = () => {
  const [content, setContent] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { content };
      await fetch("/api/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/todo");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={submitData}>
        <h1>New Todo</h1>
        <input
          autoFocus
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          type="text"
          value={content}
        />
        <input disabled={!content} type="submit" value="Create" />
        <a className="back" href="#" onClick={() => Router.push("/")}>
          Cancel
        </a>
      </form>
    </div>
  );
};

export default CreateTodo;
