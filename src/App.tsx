import { AppRouter } from "./routes/app-router"
import { ThemeProvider } from "./components/theme-provider"

export function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <AppRouter />
    </ThemeProvider>
  )
}