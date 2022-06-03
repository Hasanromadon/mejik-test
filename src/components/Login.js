import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import Button from './Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MutateLogin } from '../mutation/MutateLogin';
import Cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { userLogin } from '../features/userReducer';
import toast from 'react-hot-toast';

const Login = ({ isLoginOpen, setIsLoginOpen }) => {
  const { login } = MutateLogin();
  const dispatch = useDispatch();

  const closeModal = () => {
    setIsLoginOpen(false);
  };

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Sorry the email is required')
        .email('This is invalid email'),
      password: Yup.string().required('Sorry the password is required'),
    }),
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = async (formValue) => {
    const toastId = toast.loading('Loading...');

    const { email, password } = formValue;
    await login({
      variables: {
        email,
        password,
      },
    })
      .then((data) => {
        toast.success('Login success!', {
          id: toastId,
        });
        formik.resetForm();
        Cookie.set('token', data.data.login.token);
        console.log(data.data.login.token);
        dispatch(userLogin(data.data.login.user));
      })
      .catch(() => {
        toast.error('Login failed! check your email and password', {
          id: toastId,
        });
      });
  };

  return (
    <>
      <Transition appear show={isLoginOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="text-right">
                    <button onClick={closeModal}>
                      <XCircleIcon color="#374151" width={24} />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center font-medium leading-6 text-blue-500 mb-5"
                  >
                    LOGIN MICROBOOK
                  </Dialog.Title>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mt-2">
                      <div className="mb-3">
                        <label className="font-medium">Email</label>
                        <input
                          type="email"
                          className={`border
                          block rounded w-full ${
                            formik.errors.email
                              ? 'border-red-400'
                              : 'border-gray-300 '
                          }`}
                          {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email ? (
                          <small className="text-xs text-red-600">
                            {formik.errors.email}
                          </small>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <label className="font-medium">Password</label>
                        <input
                          type="password"
                          className={`border
                          block rounded w-full ${
                            formik.errors.password
                              ? 'border-red-400'
                              : 'border-gray-300 '
                          }`}
                          {...formik.getFieldProps('password')}
                        />
                        {formik.errors.password ? (
                          <small className="text-xs text-red-600">
                            {formik.errors.password}
                          </small>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-4 text-right">
                      <Button primary type="submit" onClick={closeModal}>
                        Login
                      </Button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Login;
