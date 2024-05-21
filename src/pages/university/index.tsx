import { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import styled from "styled-components";
import { Card, Spin } from "antd";
import { IUniversity } from "./types.ts";

const LIMIT_UNIVERSITIES = 10;

const ListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BlockObserver = styled.div`
  height: 40px;
  background-color: transparent;
`;

const University: FC = () => {
  const [universities, setUniversities] = useState<Array<IUniversity>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUniversities();
  }, [currentPage]);

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [inView]);

  const fetchUniversities = async () => {
    try {
      setLoading(true);
      const offset = (currentPage - 1) * LIMIT_UNIVERSITIES;
      const response = await axios.get(
        `http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_UNIVERSITIES}`,
      );
      setUniversities((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.log("Error fetching univer...", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <ListStyled>
      <h1>List Universities</h1>
      {universities.map((university) => (
        <Card type="inner" title={university.country} key={university.name}>
          <p>{university.name}</p>
        </Card>
      ))}
      {loading && <Spin tip="Loading" size="large"></Spin>}
      {!loading && <BlockObserver ref={ref}></BlockObserver>}
    </ListStyled>
  );
};

export default University;
