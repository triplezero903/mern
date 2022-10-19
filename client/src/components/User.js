import React from "react";
import "../App.css";

export default function User({ user }) {
  return (
    <div>
      <div className="list">
        <h3>
          이름: {user.name}, 나이: {user.age}, 유저 이름: {user.username}
        </h3>
      </div>
    </div>
  );
}
