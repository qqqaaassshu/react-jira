/*
 * @Author: 胡纯明
 * @LastEditors: 胡纯明
 * @Date: 2022-01-31 14:31:47
 * @LastEditTime: 2022-01-31 15:21:42
 * @Description: 入口文件
 * @FilePath: /jira/src/index.tsx
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
