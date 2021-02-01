export type ParsedLineType = string[];

export const isNum = (item: string): boolean => {
  return item !== null && !isNaN(Number(item));
};

export const parser = (line: string): ParsedLineType => {
  const stack = line.split(" ");
  return stack;
};
