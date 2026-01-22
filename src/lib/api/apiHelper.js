/**
 * Helper function to handle API promises.
 * Returns data on success or error object on failure.
 */
export const handleApi = async (promise) => {
  try {
    const res = await promise;
    return res.data;
  } catch (err) {
    return err.response?.data || err;
  }
};
