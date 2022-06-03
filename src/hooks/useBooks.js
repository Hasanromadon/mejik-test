import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
  query {
    books {
      id
      name
      cover
      description
      status
      category {
        name
      }
      rack {
        name
      }
    }
  }
`;

export const useBooks = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  return {
    loading,
    error,
    data,
  };
};
