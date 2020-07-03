export function Win() {
  return { type: 'win' as 'win' };
}

export function Lose() {
  return { type: 'lose' as 'lose' };
}

export type RootAction = ReturnType<typeof Win | typeof Lose>;
