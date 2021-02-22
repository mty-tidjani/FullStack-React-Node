export type Project = {
  _id: string;
  crtBy: /* CREATED_BY */ string;
  scd: /* STATUS_CODE */ string;
  ttle: /* Title */ string;
  desc: /* Description */ string;
  lstUpdt: /* Last Update */ string;
  cntr: /* COUNTER */ {
    todo: number;
    mber: number;
  };
};

export type User = {
  _id: string;
  usrNM: string;
};

export type Todo = {
  _id: string;
  nm: string;
};
