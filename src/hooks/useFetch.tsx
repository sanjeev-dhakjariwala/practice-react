import { useEffect, useState } from "react";
import type { useFetchProps } from "../types/type";

export function useFetch<T>({ url }: useFetchProps) {
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        console.log("Data", res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return data;
}

// Arrow function version:
// export const useFetch = <T,>({ url }: useFetchProps) => {
//   const [data, setData] = useState<T | undefined>(undefined);
//
//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((res) => {
//         console.log("Data", res);
//         setData(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [url]);
//
//   return data;
// };