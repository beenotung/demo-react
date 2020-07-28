export function open() {
  return { type: "open" as "open" };
}

export function close() {
  return { type: "close" as "close" };
}

export type IAction = ReturnType<typeof open> | ReturnType<typeof close>;
