import Link from "next/link";
import { Container } from "react-bootstrap";

const MFooter = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer p-3">
        <Container fluid className="text-center">
          Copyright &copy; {year} | {" "}
          <Link
            href="mailto:simplehasan.au@gmail.com"
            className="text-decoration-none text-cyan-600 dark:text-cyan-500"
          >
            <strong>abdullah.</strong>
          </Link>
        </Container>
      </footer>
    </>
  );
};

export default MFooter;
