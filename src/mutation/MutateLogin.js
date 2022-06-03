import { useMutation, gql } from '@apollo/client';

const AUTH_LOGIN = gql`
  mutation login($email: EmailAddress!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      user {
        id
        lastName
        firstName
        phoneNumber
        email
        role
      }
      token
    }
  }
`;

export const MutateLogin = (email, password) => {
  const [login, { loading, error, data }] = useMutation(AUTH_LOGIN, {
    variables: {
      email,
      password,
    },
  });
  return {
    loading,
    error,
    data,
    login,
  };
};
