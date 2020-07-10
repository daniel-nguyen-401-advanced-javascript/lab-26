import {useState, useEffect} from 'react';

function useFetch(initRequest) {
  //inputs
    // method
    // url
    // body
    // headers

  const [url, setUrl] = useState('');
  const [request, setRequest] = useState(initRequest);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  useEffect(() => {
    async function customFetch() {
      // clear settings of previous fetches, launches loading signifier
      await setIsLoading(true);
      await setError(null);
      await setResponse(null);

      let res = await fetch(request.url ? request.url : url, {
        method: request.method || 'GET',
        body: JSON.stringify(request.body) || null,
        headers: {
          ...request.headers,
          'content-type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (request.runGet)
        res = await fetch(request.runGet, {
          method: 'GET',
          headers: {
            ...request.headers,
            'content-type': 'application/json',
            Accept: 'application/json',
          },
        });

        await setIsLoading(false);

        if (res.status >= 300) {
          await setError(res);
          return;
        }

        await setResponse(await res.json());
    }

    if (request) customFetch();
  }, [request, url]);

  return {
    setUrl,
    setRequest,
    isLoading,
    error,
    response,
  };
}

export default useFetch;
