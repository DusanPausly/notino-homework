import { useRouter } from "next/router";
import { useContext } from "react";
import styled from "styled-components";
import TodoContext from "../../providers/context/todoContext";

const H1 = styled.h1`
  margin: 2rem;
`;

const Details = () => {
  const router = useRouter();

  const { getTodoDetails } = useContext(TodoContext);
  const item = getTodoDetails(router.query.id as string);
  return <>{item && <H1>{item.title}</H1>}</>;
};

export default Details;
