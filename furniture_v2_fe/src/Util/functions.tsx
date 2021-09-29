import { Saga } from "@redux-saga/types";
import { message, notification } from "antd";
import { Action } from "redux";
import queryString from "query-string";

export const NavigateWithPath = (code = "", query = "", history: History) => {};

export const generateDataToTree = (data: any, isRoot: boolean) => {
  const newTree = data.map((item: any) => {
    return {
      key: item.key || 0,
      title: item.title || "",
      childNode: (item.select && item.select.length > 0 && generateDataToTree(item.select, false)) || []
    };
  });
  return newTree;
};

export const getNodePath = async (keys: any) => {
  let path = "";
  if (keys) {
    keys.map((i: any, k: any) => {
      if(i.title) {
        if (k < keys.length - 1) {
        path += `${i.title} -> `;
        } else {
          path += i.title;
        }
      }
    });
  }
  return path;
};

export function hasPath(root: any, selectNode: any, arr: any, founded = false) {
  if (!root) {
    return false;
  } else {
    if (root) {
      if (root.key !== 0) {
        arr.push({
          key: root.key,
          title: root.title,
        });
      }
      if (selectNode.key === root.key) {
        founded = true;
        return true;
      }
      if (root.children.length > 0 && !founded) {
        root.children.forEach((node: any) => {
          hasPath(node, selectNode, arr, founded);
        });
      } else if (!founded) {
        arr.pop();
      }
      // console.log(founded,root.key,founded && getNodePath(arr))
      return founded && getNodePath(arr);
    }
  }
}

interface childRoot {
  key: any,
  title: any
}

export function* generateChildrenNodes(node: any, r: Object[]): Generator {
  if(node) {
    if (node.children.length === 0) {
      r.push({ 
        key: node.key || 0, title: node.title || "" })
      yield r;
    }
    else {
      for (const q of node.children) {
        yield* generateChildrenNodes(q, [...r, { key: node.key || 0, title: node.title || "" }]);
      }
    }
  }
}

export function* endingAt(t: any, loc: any): Generator {
  let r: any
  for (r of generateChildrenNodes(t, [])) {
      if (r[r.length - 1].key === loc) {
      yield getNodePath(r);
    }
  }
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getPathWithParams = (path = '', params = {}) => {
  if(params) {
    Object.keys(params).forEach(p => {
      const searchStrParam = `\/:${p}`;
      if (searchStrParam.length > 2) {
          path = path.replace(searchStrParam, `\/${(params as any)[p]}`);
      } else {
          path = `${path}${queryString.stringify(params).length > 0 ? "/" + queryString.stringify(params) : ""}`
      }
    });
  }
  return path;
};


export interface getRestProps {
  [restProps: string]: any
}

export function withPayloadType<T>(t: T) {
  return ({ payload: t })
}

/**
 * Wrapper every saga process async function* to by pass try catch block.
 * @param {function} [saga] - saga process async function*.
 * @param {function} [errorHandle] - error handle async function*.
 */
 export function sagaWrapper(saga: Saga, errorHandle: any) {
  return function* (action: Action) {
      try {
          yield saga(action);
      } catch (e) {
          yield errorHandle(e)
      }
  };
}

/**
* Handle displaying errors in saga processes.
* @param {function} callback - callback asyn function* after show error message.
* @param {string} itemStringKey - item string key to get item error message: (Ex: hotel, tour, order, group,...).
*/
export function sagaErrorHandler(callback: any) {
  return function* (e: any) {
      if (e.status === 403) {
          message.error("Bạn không thể vào trang này!");
      } else if (e.status === 400 && e?.errors?.file) {
          message.error("Tập tin đính kèm không đúng định dạng");
      } else if (e.status === 200) {
          message.error(e.message);
      } else {
          message.error("Hệ thống đang quá tải. Vui lòng quay lại sau!");
      }
      console.log(e);
      if (callback) {
          yield callback(e);
      }
  };
}

/**
* Display success notifications in saga processes
* @param {Object} [action] - saga action object.
* @param {string} [message] - message to display.
* @param {string} description - description to display as sub text bellow the message.
*/
export function sagaSuccessMessage(action: any, message: string, description: string) {
  return notification.success({message, description})
}

export const checkUndefined = (val: string) => {
  if (Array.isArray(val)) {
      return val.length > 0 ? val : []
  } else {
      return val || val !== undefined || val !== "" || val !== null ? val : "";
  }
};
