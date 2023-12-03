import JsonApiEndpoitsEnum from "../Model/JsonApiEndpoitsEnum";

const jsonApiFetch = async <GenericType>(
  endpoint: JsonApiEndpoitsEnum,
  query: string = "",
  setter: React.Dispatch<React.SetStateAction<GenericType[]>>
): Promise<void> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/${endpoint}?${query}`
  );

  const responseData = await response.json();
  setter(responseData);

  console.log("loading is over", responseData);
};

export default jsonApiFetch;