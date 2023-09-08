import '@styles/globals.css'
import { Children } from 'react/cjs/react.production.min'

export const metdata = {
    title: 'Promtopia',
    description: 'Discover & Share AI Prompts',
}

const RootLayout = () => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className= "gradient" />
            </div>
            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;