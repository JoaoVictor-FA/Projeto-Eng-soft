import { TextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  type: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField(props: InputFieldProps) {
  return (
    <TextField
      {...props}
      fullWidth
      className="border-2 rounded focus:outline-none p-2 text-white"
      inputProps={{
        className: "h-10 border-blue-main ",
        style: {
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "2px solid #2028EB",
          height: "50px",
          padding: "0 10px",
          borderRadius: "5px",
        },
      }}
      InputLabelProps={{
        style: {
          color: "white",
        },
      }}
      focused={props.type === "date"}
    />
  );
}
