/*
 * @Author: 胡纯明
 * @LastEditors: 胡纯明
 * @Date: 2022-01-31 18:26:06
 * @LastEditTime: 2022-01-31 22:57:48
 * @Description: 工具方法集
 * @FilePath: /jira/src/utils/index.js
 */

import { useEffect, useState } from "react";

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

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
