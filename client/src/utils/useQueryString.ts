import { useLocation } from 'react-router-dom';

const useQueryString = <T>(): T => {
  let rtn: any = {};
  try {
    const { search } = useLocation();

    const entries = search
      .replace('?', '')
      .split('&')
      .map((query) => {
        const querySplit = query.split('=');
        if (querySplit.length !== 2) return null;

        return [querySplit];
      })
      .filter((object) => object !== null)
      .flat(1);
    // @ts-ignore
    rtn = Object.fromEntries(entries);
  } catch (err) {
    // console.log(err); // Needless
  }
  return rtn;
};

export { useQueryString };
