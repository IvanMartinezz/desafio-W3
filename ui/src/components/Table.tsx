import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styles from "../app/page.module.css";

interface DataTable {
  rows: Country[];
  columns: GridColDef[];
}
export const Table = ({ columns, rows }: DataTable) => {
  return (
    <DataGrid
      className={styles.tableContainer}
      rows={rows}
      columns={columns}
      checkboxSelection
      disableColumnMenu
      disableRowSelectionOnClick
    />
  );
};
