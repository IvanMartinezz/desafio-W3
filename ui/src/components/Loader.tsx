import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import styles from "../app/page.module.css";

export const Loader = () => {
  return (
    <Box className={styles.loaderContainer}>
      <LinearProgress />
    </Box>
  );
};
