import "./globals.css"
import { Poppins } from "next/font/google"
import Provider from "./providers/Provider"
import { ClientOnly } from "./components"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "👽 Devquiz",
  description: "Quiz application for developers",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ClientOnly>
          <Provider>
            <></>
          </Provider>
        </ClientOnly>

        <>{children}</>
      </body>
    </html>
  )
}
