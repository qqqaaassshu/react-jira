/*
 * @Author: 胡纯明
 * @LastEditors: 胡纯明
 * @Date: 2022-01-31 18:26:06
 * @LastEditTime: 2022-01-31 18:30:46
 * @Description: 工具方法集
 * @FilePath: /jira/src/utils/index.js
 */

export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
