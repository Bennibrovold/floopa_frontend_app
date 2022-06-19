export const HOST = "http://109.110.36.201:80";

interface AnyObject {
  [k: string]: any;
}

export const buildURLQuery = (obj: any) =>
  Object.entries(obj)
    .map((pair: any) => pair.map(encodeURIComponent).join("="))
    .join("&");

export const getUrl = (url: string) => {
  return HOST + url;
};

export const fetcher = (
  url: string,
  {
    method,
    body,
    headers,
  }: { method: "GET" | "POST"; body?: AnyObject; headers?: AnyObject }
) => {
  if (method === "GET") {
    const params = buildURLQuery(body);

    return fetch(getUrl(`${url}${params && "?" + params}`), {
      method,
      headers,
      credentials: "include",
    });
  }

  if (!body) {
    return fetch(getUrl(url), {
      method,
      headers,
      credentials: "include",
    });
  }

  return fetch(getUrl(url), {
    method,
    headers: headers
      ? headers
      : {
          "content-type": "application/json",
        },
    body: JSON.stringify(body),
    credentials: "include",
  });
};
