"use client";
import { useDarkMode } from "@/components/DarkModeContext";
import { MyEducation } from "@/components/education";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Education = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <Head>
        <title>Abdullah | Educations</title>
        <meta name="description" content="Educations of Abdullah Ibnu Hasan"/>
      </Head>
      <Row className="p-2 align-items-start">
        <h1 className="text-3xl font-bold mb-3">My Educations</h1>
        {MyEducation.map((edu, key) => (
          <React.Fragment key={key}>
            <Col md={4} className="text-center mt-2 font-semibold">
              {edu.start} - {edu.end}
              <Link href={edu.uniUrl} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <div className="block sm:hidden">
                    <Image
                      src={edu.pic}
                      alt={`${edu.company} logo`}
                      width={edu.width}
                      height={edu.height}
                      priority
                      className="mt-3 mx-auto"
                    />
                  </div>
                  <div className="hidden sm:block md:mx-auto">
                    <Image
                      src={edu.pic}
                      alt={`${edu.company} logo`}
                      width={edu.width}
                      height={edu.height}
                      priority
                      className="mt-3 mx-auto"
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col md={8} className="mt-2">
              <Link
                href={edu.majorUrl}
                className="font text-cyan-600 dark:text-cyan-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>
                  {edu.degree} of {edu.major}
                </strong>
              </Link>
              <div className={darkMode ? "text-gray-400" : "text-gray-600"}>
                <strong> {edu.university} </strong>
              </div>
              <div className={darkMode ? "text-gray-400" : "text-gray-500"}>
                {edu.city}, {edu.country}
              </div>
            </Col>
            <div className="border-t border-gray-600 dark:border-gray-400 my-12"></div>
          </React.Fragment>
        ))}
      </Row>
      <Row></Row>
    </>
  );
};

export default Education;
