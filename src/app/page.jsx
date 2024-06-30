import Image from "next/image";
import { Col, Row } from "react-bootstrap";

import { About, Social } from "@/components/profile";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Row className="p-3 align-items-start">
        <Col md={4} className="d-flex justify-content-center mt-3">
          <Image
            src="/abdullah.jpeg"
            height={256}
            width={256}
            alt="Abdullah"
            className="rounded-circle"
          />
        </Col>
        <Col md={8} className="mt-3">
          <h1>{About.name}</h1>
          <strong className="text-secondary">{About.currentTitle}</strong>
          <Col md={12}>{About.address}</Col>
          <Row>
            <Col md={12}></Col>
          </Row>
          {/* About Me */}
          <Row className="text-left mt-3">
            <h3>About Me</h3>
            <Col md={12}>{About.desc}</Col>
          </Row>

          {/* Social Media */}
          <Row className="text-left mt-3">
            <h3>Contacts</h3>
            {Social.map((social, key) => (
              <Col md={12}>
                <social.icon />{" "}
                <Link href={social.url} className="text-decoration-none">
                  {social.platform}
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
}
