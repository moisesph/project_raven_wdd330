const getLocalCurrency = async () => {
  const ipapiLink = "https://ipapi.co/json/";
  const localCurrency = await fetch(ipapiLink);
  const data = await localCurrency.json();
  console.log(data);
  return data;
};

getLocalCurrency();
