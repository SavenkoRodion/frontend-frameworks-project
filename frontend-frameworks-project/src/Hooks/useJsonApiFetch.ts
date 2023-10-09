import { useState, useEffect } from "react";
import JsonApiEndpoitsEnum from "../Model/JsonApiEndpoitsEnum";

const useJsonApiFetch = <GenericType>(endpoint: JsonApiEndpoitsEnum) => {
  const [data, setData] = useState<GenericType[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then((response) => response.json())
      .then((data: GenericType[]) => setData(data));
  }, []);

  return data;
};

export default useJsonApiFetch;
