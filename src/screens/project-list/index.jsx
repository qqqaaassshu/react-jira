/*
 * @Author: 胡纯明
 * @LastEditors: 胡纯明
 * @Date: 2022-01-31 16:10:04
 * @LastEditTime: 2022-01-31 18:31:40
 * @Description: 列表入口文件
 * @FilePath: /jira/src/screens/project-list/index.jsx
 */
import { useState, useEffect } from "react";
import SearchPanel from "./SearchPanel";
import List from "./List";
import { cleanObject } from "utils";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectList = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json());
        }
      }
    );
  }, [param]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, []);

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};

export default ProjectList;
