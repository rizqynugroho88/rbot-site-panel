import {
  json,
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix'
import type { MetaFunction } from 'remix'
import tailwindcssStyles from './styles/tailwind.css'
import { MainLayout } from './layouts'
import {
  NonFlashOfWrongThemeEls,
  Theme,
  ThemeProvider,
  useTheme,
} from './utils/theme-provider'
import clsx from 'clsx'
import { getThemeSession } from './utils/theme.server'

export type LoaderData = {
  ENV?: any
  requestInfo: {
    theme: Theme | null
  }
}

export const meta: MetaFunction = () => {
  return { title: 'New Remix App', 'theme-color': 'red' }
}

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwindcssStyles }]
}

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request)
  const data: LoaderData = {
    requestInfo: {
      theme: themeSession.getTheme(),
    },
  }
  return json(data)
}

function App() {
  const data = useLoaderData<LoaderData>()
  const [theme] = useTheme()

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.requestInfo.theme)} />
      </head>
      <body className="relative flex min-h-screen w-full flex-col bg-gray-900 text-white">
        <MainLayout>
          <Outlet />
        </MainLayout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>()
  return (
    <ThemeProvider specifiedTheme={data.requestInfo.theme}>
      <App />
    </ThemeProvider>
  )
}
