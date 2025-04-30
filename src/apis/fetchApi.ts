"use server";
export async function fetchApi<T>(url: string, options: RequestInit) {
  try {
    const headers = new Headers();
    headers.append("x-rapidapi-key", process.env["PUBLIC_RAPIDAPI_KEY"]!);
    headers.append("x-rapidapi-host", process.env["PUBLIC_RAPIDAPI_HOST"]!);

    const apiOptions: RequestInit = {
      ...options,
      headers,
      redirect: "follow",
    };

    // TODO: add auth token to options before passing it to fetch
    const response = await fetch(url, apiOptions);

    // TODO: error handing goes here (e.g. 401, 403, ...)
    return (await response.json()) as T;
  } catch (error) {
    throw new Error(error as string);
  }
}
