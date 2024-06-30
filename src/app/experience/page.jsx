"use client";
import { Col, Row } from "react-bootstrap";
import { Experience as Exp } from "../../components/profile";
import { useDarkMode } from "../../components/DarkModeContext";
import React, { useState } from "react";

const Experience = () => {
  const { darkMode } = useDarkMode();
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (key) => {
    setExpandedItems(prev => ({...prev, [key]: !prev[key]}));
  };

  return (
    <>
      <Row className="p-2 align-items-start">
        <h1 className="text-3xl font-bold mb-3">My Experiences</h1>

        {Exp.map((exp, key) => (
          <React.Fragment key={key}>
            <Col md={4} className="text-start mt-2 font-semibold">
              {exp.start} - {exp.end}
            </Col>
            <Col md={8} className="mt-2">
              <strong>{exp.title}</strong>
              <div className={darkMode ? "text-gray-400" : "text-gray-500"}>
                <strong> {exp.company} </strong> - {exp.site}
              </div>
              <div className={darkMode ? "text-gray-400" : "text-gray-500"}>
                {exp.city}, {exp.country}
              </div>
              <p className="mt-2 text-justify">
                {expandedItems[key] ? exp.desc : `${exp.desc.substring(0, 150)}...`}
              </p>
              <button 
                onClick={() => toggleExpand(key)} 
                className="text-cyan-600 dark:text-cyan-500 hover:text-cyan-800"
              >
                {expandedItems[key] ? 'Read Less' : 'Read More'}
              </button>
            </Col>
            <div className="border-t border-gray-600 dark:border-gray-400 my-12"></div>
          </React.Fragment>
        ))}
      </Row>
    </>
  );
};

export default Experience;