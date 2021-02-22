/* eslint-disable max-len */
export const isValidEmail = (email: string): email is string => {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

  
export const sanitizeEmail = (email: string): string|null => {
  if (!isValidEmail(email)) return null;
  const str = email.toLowerCase();
  if (str.split('.').length === 2) return str;
  const rtn = str.split('@'); 
  rtn[0] = rtn[0].split('.').join('');
  return rtn.join('@');
};

export const strRandom = (val: number): string => {
  let str = "";
  const possible = "BCDFGHIJKLMNPQRSTUVWXYZ0123456789";
  for (let i = 0; i < val; i++) str += possible.charAt(Math.floor(Math.random() * possible.length));
  return str;
};
