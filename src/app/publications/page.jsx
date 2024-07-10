"use client";
import { publications } from "@/components/publications";
import Link from "next/link";
import React from "react";
import { Row } from "react-bootstrap";

const pubications = () => {
  return (
    <>
      <Row className="p-2 align-items-start">
        <h1 className="text-3xl font-bold mb-4">My Publications</h1>
        {publications.map((publication, key) => (
          <React.Fragment key={key}>
            <span className="font-semibold mb-1">Title:</span>
            <Link
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-cyan-500 hover:text-cyan-800"
            >
              <h3 className="text-lg mb-3 text-justify">{publication.title}</h3>
            </Link>

            <span className="font-semibold mb-1">Author(s):</span>
            <h3 className="mb-3 text-justify">{publication.authors}</h3>

            <span className="font-semibold mb-1">Year:</span>
            <h3 className="mb-3 text-justify">{publication.year}</h3>

            <span className="font-semibold mb-1">Conference:</span>
            <h3 className="mb-3 text-justify">{publication.conference}</h3>

            <span className="font-semibold mb-1">Publisher:</span>
            <h3 className="mb-3 text-justify">{publication.publisher}</h3>

            <span className="font-semibold mb-1">Abstract:</span>
            <p className="text-justify">{publication.abstract}</p>
          </React.Fragment>
        ))}
      </Row>
    </>
  );
};

export default pubications;
