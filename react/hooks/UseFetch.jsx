import {useState, useEffect} from "react";

export const UseFetch = function(endpoint = "", dependencies = [], onLoadEnd = () => {}) {

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


  /**
   * Process to a post request
   * @param path
   * @param body
   * @param init
   * @returns {Promise<any>}
   */
  async function post(path, body, init = null) {
    setIsLoading(true);
    init = init ? init : {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    };

    const response = await fetch(endpoint + path, {
      ...init,
      body: JSON.stringify(body),
    });

    setIsLoading(false);
    return await response.json();
  }

  return {isLoading, apiData, post};
}