import { useMutation, gql } from '@apollo/client';

const AUTH_REGISTER = gql`
  mutation register(
    $firstName: String!
    $lastName: String
    $phoneNumber: PhoneNumber
    $email: EmailAddress!
    $password: String!
  ) {
    register(
      input: {
        firstName: $firstName
        lastName: $lastName
        phoneNumber: $phoneNumber
        email: $email
        password: $password
      }
    ) {
      user {
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

export const MutateRegister = (
  firstName,
  lastName,
  phoneNumber,
  email,
  password
) => {
  const [register, { loading, error, data }] = useMutation(AUTH_REGISTER, {
    variables: {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    },
  });
  return {
    loading,
    error,
    data,
    register,
  };
};
