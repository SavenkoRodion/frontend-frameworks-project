import JsonApiEndpointsEnum from "../Model/JsonApiEndpointsEnum";

const jsonApiFetch = async <GenericType>(
  endpoint: JsonApiEndpointsEnum,
  query: string = "",
  setter: React.Dispatch<React.SetStateAction<GenericType[]>>
): Promise<void> => {
  const response: Response = await fetch(
    `https://jsonplaceholder.typicode.com/${endpoint}?${query}`
  );

  const responseData: GenericType[] = await response.json();
  setter(responseData);
};

export default jsonApiFetch;
