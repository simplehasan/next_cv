import Image from "next/image";
import { Col, Row, Stack } from "react-bootstrap";

import { About, Social, Skills, Hobbies } from "@/components/profile";
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
          <h1 className="text-center text-md-start text-3xl font-bold">
            Hello! My name is Abdullah.
          </h1>
          <strong className="text-secondary">{About.currentTitle}</strong>
          <Col md={12}>{About.address}</Col>
          <Row>
            <Col md={12}></Col>
          </Row>
          {/* About Me */}
          <Row className="text-left mt-3">
            <h3 className="text-2xl font-semibold">About Me</h3>
            <Col md={12} className="text-justify">{About.desc}</Col>
          </Row>

          {/* Skills */}
          <Row className="text-left mt-3">
            <h3 className="text-2xl font-semibold">My Skills</h3>
            {Skills.map((skill, key) => (
              <Col className="mt-2" key={key}>
                <div className="badge rounded-pill px-2 bg-slate-600 text-sm d-flex align-items-center justify-center font-semibold">
                  <skill.icon className="me-2 text-2xl" />
                  {skill.name}
                </div>
              </Col>
            ))}
          </Row>

          {/* Hobbies */}
          <Row className="text-left mt-3">
            <h3 className="text-2xl font-semibold mb2">My Hobbies</h3>

            {
              Hobbies.map((hobby, key) => (
                <Col className="mt-2" key={key}>
                  <div className="badge rounded-pill bg-slate-600 text-sm d-flex align-items-center justify-center font-semibold px-2">
                    <hobby.icon className="me-2 text-2xl" />
                    {hobby.name}
                  </div>
                </Col>
                )
              )
            }
          </Row>

          {/* Social Media */}
          <Row className="text-left mt-3">
            <h3 className="text-2xl font-semibold">Contacts</h3>
            {Social.map((social, key) => (
              <Col md={12} className="d-flex align-items-center" key={key}>
                <social.icon className="me-2 text-2xl" />
                <Link
                  href={social.url}
                  className="text-cyan-700 dark:text-cyan-500"
                  target="_blank"
                >
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
