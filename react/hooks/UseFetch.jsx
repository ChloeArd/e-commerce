import {useState, useEffect} from "react";

export const UseFetch = function(endpoint = "", dependencies = [], onLoadEnd = () => {}) {

  const [apiData, setApiData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const[error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(endpoint);
        const data = await response.json();
        setApiData(data);
      }
      catch (e) {
        setError(true);
        setApiData({});
      }
      finally {
        setIsLoading(false);
        onLoadEnd();
      }

    }

    if (endpoint) {
      fetchData().catch(() => {
        setIsLoading(false);
        setApiData({});
        setError(true)
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

    try {
      const response = await fetch(endpoint + path, {
        ...init,
        body: JSON.stringify(body),
      });
      return await response.json();
    }
    catch (e) {
      setError(true);
    }
    finally {
      setIsLoading(false);
    }

  }

  return {isLoading, error, apiData, post};
}