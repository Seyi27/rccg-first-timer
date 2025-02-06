export type CustomButtonType = {
  label: string;
  height?: number;
  handleClick?: () => void;
};

export type CustomTextInputType = {
  name: string;
  value: string;
  label: string;
  errorMessage?: string;
  handleTextInput: (key: string, e: string) => void;
};
