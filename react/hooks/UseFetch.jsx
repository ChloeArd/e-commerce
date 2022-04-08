import {useState, useEffect} from "react";

export const UseFetch = function(endpoint) {

  const [apiData, setApiData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch(endpoint);
      const data = await response.json();
      setApiData(data);
      setIsLoading(false);
    }

    if (endpoint) {
      fetchData().catch(() => {
        setIsLoading(false);
        setApiData({});
      });
    }
  }, [endpoint]);

  return {isLoading, apiData}
}