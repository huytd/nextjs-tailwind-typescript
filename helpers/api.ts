export const getAPIBaseURL = (req: any) => {
  const host = req.headers.host;
  const protocol = host.match(/localhost/) ? 'http' : 'https';
  return `${protocol}://${host}`;
};
