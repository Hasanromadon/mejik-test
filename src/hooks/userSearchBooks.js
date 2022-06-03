import { useQuery, gql } from '@apollo/client';

const SEARCH_BOOK = gql`
  query searchBook($name: String!) {
    books(where: { name_contains: $name }) {
      name
      author {
        name
      }
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

export const useSearchBook = (name) => {
  const { loading, error, data } = useQuery(SEARCH_BOOK, {
    variables: {
      name,
    },
  });
  return {
    loading,
    error,
    data,
  };
};
