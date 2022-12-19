import { Children } from "react"
import "../styles/globals.css"
import LeftSidebar from "./components/LeftSidebar"
import RightSidebar from "./components/RightSidebar"
import Messages from "./components/Messages"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head />
            <body className="flex justify-center">
                <LeftSidebar />
                {children}
                <RightSidebar />
                <Messages />
            </body>
        </html>
    )
}
