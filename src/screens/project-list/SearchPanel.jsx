/*
 * @Author: 胡纯明
 * @LastEditors: 胡纯明
 * @Date: 2022-01-31 16:11:14
 * @LastEditTime: 2022-01-31 18:19:06
 * @Description: 搜索栏组件
 * @FilePath: /jira/src/screens/project-list/SearchPanel.jsx
 */

const SearchPanel = ({ users, param, setParam }) => {
  return (
    <form action="">
      <input
        type="text"
        value={param.name}
        onChange={(e) =>
          setParam({
            ...param,
            name: e.target.value,
          })
        }
      />
      <select
        name=""
        id=""
        value={param.personId}
        onChange={(e) => setParam({ ...param, personId: e.target.value })}
      >
        <option value="">负责人</option>
        {users.map((item) => {
          return <option value={item.id}>{item.name}</option>;
        })}
      </select>
    </form>
  );
};

export default SearchPanel;
