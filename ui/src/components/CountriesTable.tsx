import { Table } from "./Table";

type Props = {
  data: Country[];
};

const CountriesTable = ({ data }: Props) => {
  const columns = [
    {
      field: "name",
      headerName: "Nombre",
      width: 200,
    },
    {
      field: "population",
      headerName: "Población",
      width: 200,
    },
    {
      field: "percentage_population",
      headerName: "Porcentaje de población",
      width: 500,
    },
  ];

  return (
    <>
      <Table columns={columns} rows={data} />
    </>
  );
};

export default CountriesTable;
