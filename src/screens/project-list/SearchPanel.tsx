/*
 * @Author: 胡纯明
 * @LastEditors: 胡纯明
 * @Date: 2022-01-31 16:11:14
 * @LastEditTime: 2022-02-01 15:06:04
 * @Description: 搜索栏组件
 * @FilePath: /jira/src/screens/project-list/SearchPanel.tsx
 */

export interface User {
  id: string;
  name: string;
  email: string;
  organization: string;
  title: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
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
