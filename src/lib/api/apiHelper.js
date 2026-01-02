export const handleApi = async (promise) => {
  try {
    const res = await promise;
    return res.data;
  } catch (err) {
    return err.response?.data || err;
  }
};
