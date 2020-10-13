const isWebsiteAlive = async (network) => {
  const result = await network.fetchUrlText("http://example.com");
  if (result.ok) {
    const text = result.text;
    return onFetchSuccess(text);
  }
  onFetchError(result.text);
  return false;
};

//Entry Point
const onFetchSuccess = (text) => {
  return text.includes("illustrative");
};

//Entry Point
const onFetchError = (err) => {
  console.log(err);
  //more behaviors
};

module.exports = {
  isWebsiteAlive,
  onFetchSuccess,
  onFetchError,
};