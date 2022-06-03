import { useQuery, gql } from '@apollo/client';

const SEARCH_BOOK = gql`
  query searchBook($name: String!) {
    books(where: { name_contains: $name }) {
      name
      id
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
const SEARCH_BOOK_BY_CATEGORY = gql`
  query searchBook($name: String!) {
    books(where: { category: { name_contains: $name } }) {
      name
      id
      status
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

export const useSearchBook = ({ name, by }) => {
  const FILTER_BY = by === 'title' ? SEARCH_BOOK : SEARCH_BOOK_BY_CATEGORY;
  const { loading, error, data } = useQuery(FILTER_BY, {
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
