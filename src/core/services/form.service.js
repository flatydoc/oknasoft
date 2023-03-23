import base from "./base.service";

const send = (data) => {
  return base.post("/form/send", data);
};

export const FormService = {
  send,
};
