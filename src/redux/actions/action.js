// 액션 생성함수

import { CREATE, DONE } from "../types/types";

export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}
