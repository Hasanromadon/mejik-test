import { useQuery, gql } from '@apollo/client';

const GET_BOOK = gql`
  query getBook($id: String!) {
    book(id: $id) {
      name
      author {
        name
      }
      status
      code
      cover
      category {
        name
      }
      description
      rack {
        name
      }
    }
  }
`;

export const useBook = (id) => {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: {
      id,
    },
  });
  return {
    loading,
    error,
    data,
  };
};
