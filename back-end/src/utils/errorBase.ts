export type ErrorBase = {
  status: number;
  message: string;
};

export const errorBase = (status: number, message: string) => ({
  status,
  message,
});
