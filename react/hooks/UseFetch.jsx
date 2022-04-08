import {useState, useEffect} from "react";

export const UseFetch = function(endpoint, dependencies = [], onLoadEnd = () => {}) {

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

      onLoadEnd();
    }
  }, [endpoint, ...dependencies]);

  return {isLoading, apiData};
}