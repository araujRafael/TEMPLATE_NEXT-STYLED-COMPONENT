import { Dispatch, SetStateAction } from "react";

export interface ChangeThemeContextTypes {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
  onChangeTheme(val: boolean): void;
}
