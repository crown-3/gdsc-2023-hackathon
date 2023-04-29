import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { themeConfig } from "./customConfig";

export const theme: MantineThemeOverride = {
  components : {
    Stack : {
        defaultProps : {
          color : themeConfig.color.font,
          bg : themeConfig.color.primary,
          mih : "100vh",
          align: "center",
        }
    },
    Title : {
        defaultProps : {
          mt : "30px",
        }
    }
  }
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      {children}
    </MantineProvider>
  );
}
