"use client";
import { useDarkMode } from "@/components/DarkModeContext";
import Divider from "@/components/Divider";
import { MyTrainings } from "@/components/education";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Trainings = () => {
  const { darkMode } = useDarkMode();

  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (key) => {
    setExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Row className="p-2 align-items-start">
        <h1 className="text-3xl font-bold mb-3">My Trainings</h1>
        {MyTrainings.map((training, key) => (
          <>
            <React.Fragment key={key}>
              <Col md={4} className="text-center mt-2 font-semibold">
                {training.end}
                {/* Training Image */}
                <Link href={training.certificate} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="block sm:hidden">
                      <Image
                        src={training.pic}
                        alt={`${training.name} certification picture`}
                        width={training.width}
                        height={training.height}
                        priority
                        className="mt-3 mx-auto"
                      />
                    </div>
                    <div className="hidden sm:block md:mx-auto">
                      <Image
                        src={training.pic}
                        alt={`${training.company} logo`}
                        width={training.width}
                        height={training.height}
                        priority
                        className="mt-3 mx-auto"
                      />
                    </div>
                  </a>
                </Link>
              </Col>

              <Col md={8} className="mt-2">
                <strong>{training.title}</strong>
                <div className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  <Link
                    href={training.vendorUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-cyan-600 dark:text-cyan-500 hover:text-cyan-800"
                  >
                    <strong> {training.vendor} </strong>
                  </Link>
                  - {training.place}
                </div>
                {/* Training Description */}
                <p className="mt-2 text-justify">
                  {expandedItems[key]
                    ? training.desc
                    : `${training.desc.substring(0, 150)}...`}
                </p>
                <button
                  onClick={() => toggleExpand(key)}
                  className="text-cyan-600 dark:text-cyan-500 hover:text-cyan-800"
                >
                  {expandedItems[key] ? "Read Less" : "Read More"}
                </button>
                {/* Certificate Link */}
                <div className="mt-2">
                  <Link
                    href={training.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 dark:text-cyan-500 hover:text-cyan-800"
                  >
                    Certificate Link
                  </Link>
                </div>
              </Col>
            </React.Fragment>
            <Divider />
          </>
        ))}
      </Row>
    </>
  );
};

export default Trainings;
