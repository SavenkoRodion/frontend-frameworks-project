import JsonApiEndpoitsEnum from "../Model/JsonApiEndpoitsEnum";

const jsonApiFetch = async <GenericType>(
  endpoint: JsonApiEndpoitsEnum,
  query: string = "",
  setter: React.Dispatch<React.SetStateAction<GenericType[]>>
): Promise<void> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/${endpoint}?${query}`
  );
  // .then((response) => response.json())
  // .then((data: GenericType[]) => {
  //   return data;
  // });
  const lol = await response.json();
  setter(lol);
  console.log("loading is over", lol);
};

export default jsonApiFetch;
