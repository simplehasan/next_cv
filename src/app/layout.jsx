import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import BootstrapClient from "../components/BootstrapClient";
import { Card, CardBody, CardFooter, Container } from "react-bootstrap";
import NavBar from "@/components/NavBar";
import { DarkModeProvider } from "../components/DarkModeContext";
import MFooter from "@/components/MFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "abdullah.",
  description: "Profile of Abdullah Ibnu Hasan",
};

<link rel="icon" href="/favicon.ico" sizes="any" />;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DarkModeProvider>
        <body className={`${inter.className} bg-light`}>
          <BootstrapClient />
          <Container className="p-3">
            <NavBar />
            <Card className="mt-3" id="Card">
              <CardBody>{children}</CardBody>
            </Card>
            <MFooter />
          </Container>
        </body>
      </DarkModeProvider>
    </html>
  );
}
