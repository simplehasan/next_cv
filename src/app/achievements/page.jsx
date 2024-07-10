"use client";
import { useDarkMode } from "@/components/DarkModeContext";
import Divider from "@/components/Divider";
import { MyAwards } from "@/components/awards";
import Image from "next/image";
import React, { useState } from "react";
import { Col, Modal, ModalBody, ModalHeader, Row } from "react-bootstrap";

const Achievemnets = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { darkMode } = useDarkMode();

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const [expandedItems, setExpandedItems] = useState({});
  const toggleExpand = (key) => {
    setExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Row className="p-2 align-items-start">
        <h1 className="text-3xl font-bold mb-3">My Awards</h1>
        {MyAwards.map((award, key) => (
          <React.Fragment key={key}>
            <Col key={key} md={4} className="text-center mt-2 font-semibold">
              {award.date}
              {/* Clickable Award Image */}
              <div
                onClick={() => handleImageClick(award)}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image
                  src={award.pic}
                  alt={`${award.title} certification picture`}
                  width={award.width}
                  height={award.height}
                  priority
                  className="mt-3 mx-auto"
                />
              </div>
            </Col>
            <Col md={8} className="mt-2">
              <strong>{award.title}</strong>
              <div className={darkMode ? "text-gray-400" : "text-gray-600"}>
                <strong> {award.organizer} </strong>
              </div>
              {/* Awards Description */}
              <p className="mt-2 text-justify">
                {expandedItems[key]
                  ? award.desc
                  : `${award.desc.substring(0, 150)}...`}
              </p>
              <button
                onClick={() => toggleExpand(key)}
                className="text-cyan-600 dark:text-cyan-500 hover:text-cyan-800"
              >
                {expandedItems[key] ? "Read Less" : "Read More"}
              </button>
            </Col>
            <Divider />
          </React.Fragment>
        ))}
      </Row>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        contentClassName={
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }
      >
        <ModalHeader closeButton>
          <div
            className={`modal-title text-xl font-semibold text-center ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            {selectedImage?.title}
          </div>
        </ModalHeader>
        <ModalBody className="flex justify-center items-center p-0">
          {selectedImage && (
            <div className="relative w-full h-[50vh]">
              <Image
                src={selectedImage.pic}
                alt={`${selectedImage.title} certification picture`}
                layout="fill"
                objectFit="contain"
                className="p-4"
              />
            </div>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Achievemnets;