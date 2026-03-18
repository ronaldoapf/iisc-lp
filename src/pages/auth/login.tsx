import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import { Github } from "lucide-react"

export function Login() {
  return (
    <div className="w-full relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 bg-zinc-950 text-white selection:bg-iisc-gold selection:text-white">
      <Link
        to="/cadastro"
        className="absolute right-4 top-4 md:right-8 md:top-8 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
      >
        Cadastro
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <img 
          src="/register.png" 
          alt="Worship" 
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link to="/">
            <img src="/logo-sem-fundo.png" alt="IISC" className="h-12 object-contain" />
          </Link>
        </div>
      </div>
      <div className="p-8 h-full flex items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-white font-display">
              Crie a sua conta
            </h1>
            <p className="text-sm text-zinc-400">
              Insira seu e-mail e acesse a sua igreja.
            </p>
          </div>
          <div className="grid gap-6">
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label className="sr-only" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="usuario@exemplo.com.br"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    className="bg-transparent border-zinc-800 focus-visible:border-zinc-700 focus-visible:ring-1 focus-visible:ring-zinc-700 focus-visible:ring-offset-0 text-white placeholder:text-zinc-500 rounded-md py-6"
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="sr-only" htmlFor="password">
                    Senha
                  </Label>
                  <Input
                    id="password"
                    placeholder="******"
                    type="password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    className="bg-transparent border-zinc-800 focus-visible:border-zinc-700 focus-visible:ring-1 focus-visible:ring-zinc-700 focus-visible:ring-offset-0 text-white placeholder:text-zinc-500 rounded-md py-6"
                  />
                </div>
                <Button className="bg-white text-black hover:bg-zinc-200 py-6 rounded-md font-medium cursor-pointer">
                  Acessar com e-mail
                </Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-zinc-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-zinc-950 px-2 text-zinc-500">
                  Ou com
                </span>
              </div>
            </div>
            <Button variant="outline" type="button" className="py-6 rounded-md bg-transparent border-zinc-800 text-white hover:bg-zinc-900 hover:text-white cursor-pointer">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
          </div>
          <p className="px-8 text-center text-sm text-zinc-500">
            Ao clicar em continuar, você concorda com nossos{" "}
            <Link
              to="/terms"
              className="underline underline-offset-4 hover:text-white transition-colors"
            >
              Termos de Serviço
            </Link>{" "}
            e{" "}
            <Link
              to="/privacy"
              className="underline underline-offset-4 hover:text-white transition-colors"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
