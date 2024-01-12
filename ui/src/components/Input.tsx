import { InputBase, Paper } from "@mui/material";
import styles from "../app/page.module.css";
import { ChangeEventHandler, ReactNode } from "react";

type Props = {
  variant?: VariantTypeInput;
  color?: ColorType;
  value: any;
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  placeholder?: string;
  children?: ReactNode;
};

export const StandardInput = ({
  value,
  onChange,
  color,
  placeholder,
  children,
}: Props) => {
  const handleOnChange = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <Paper className={styles.inputContainer}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        color={color}
      />
      {children}
    </Paper>
  );
};
