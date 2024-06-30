import Image from "next/image";
import { Col, Row } from "react-bootstrap";

import { About, Social } from "@/components/profile";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Row className="p-2 align-items-start">
        <Col md={4} className="d-flex justify-content-center mt-3">
          <Image
            src="/abdullah.jpeg"
            height={256}
            width={256}
            alt="abdullah avatar"
            className="rounded-circle"
            priority
          />
        </Col>
        <Col md={8} className="mt-3">
          <h1 className="text-center text-md-start text-3xl font-bold">Hello! My name is Abdullah.</h1>
          <strong className="text-secondary">{About.currentTitle}</strong>
          <Col md={12}>{About.address}</Col>
          <Row>
            <Col md={12}></Col>
          </Row>
          {/* About Me */}
          <Row className="text-left mt-3">
            <h3 className="text-2xl font-semibold">About Me</h3>
            <Col md={12}>{About.desc}</Col>
          </Row>

          {/* Social Media */}
          <Row className="text-left mt-3">
            <h3 className="text-2xl font-semibold">Contacts</h3>
            {Social.map((social, key) => (
              <Col md={12} className="d-flex align-items-center">
                <social.icon className="me-2 text-xl"/>
                <Link href={social.url} className="text-cyan-700 dark:text-cyan-500" target="_blank">
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
