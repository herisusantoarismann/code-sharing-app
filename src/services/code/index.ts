import axios from "axios";

const getData = async (uuid: string) => {
  const { data } = await axios(`api/${uuid}`);

  return data?.data;
};

export { getData };
