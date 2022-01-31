/*
 * @Author: 胡纯明
 * @LastEditors: 胡纯明
 * @Date: 2022-01-31 16:10:51
 * @LastEditTime: 2022-01-31 18:18:44
 * @Description: 用户列表组件
 * @FilePath: /jira/src/screens/project-list/list.jsx
 */

const List = ({ users, list }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => {
          return (
            <tr>
              <td>{project.name}</td>
              <td>
                {users.find((user) => user.id === project.personId)?.name}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
