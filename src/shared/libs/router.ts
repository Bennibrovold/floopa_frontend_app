const checkRouter = () => {
  if (String(process.env.ROUTER) === "false") return false;
  if (!process.env.ROUTER) return true;
  return true;
};

export const isRouter = checkRouter();
