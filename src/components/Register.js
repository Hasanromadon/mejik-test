import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MutateRegister } from '../mutation/MutateRegister';

import Button from './Button';

const Register = ({ isRegisterOpen, setIsRegisterOpen }) => {
  const [loading, setLoading] = useState(false);

  const { register } = MutateRegister();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Firstname is required'),
      lastName: Yup.string(),
      phoneNumber: Yup.string().required('Phone number is required'),
      email: Yup.string()
        .required('Sorry the email is required')
        .email('This is invalid email'),
      password: Yup.string().required('Sorry the password is required'),
    }),
    onSubmit: (values) => {
      handleRegister(values);
    },
  });

  const handleRegister = async (formValue) => {
    const toastId = toast.loading('Loading...');
    const { firstName, lastName, phoneNumber, email, password } = formValue;
    await register({
      variables: {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      },
    })
      .then(() => {
        toast.success('Register success!', {
          id: toastId,
        });
        formik.resetForm();
      })
      .catch(() => {
        toast.error('Register failed!', {
          id: toastId,
        });
      });
  };

  function closeModal() {
    setIsRegisterOpen(false);
  }

  return (
    <>
      <Transition appear show={isRegisterOpen} as={Fragment}>
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
                    REGISTER MICROBOOK
                  </Dialog.Title>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mt-2">
                      <div className="mb-3">
                        <label className="font-medium">First Name</label>
                        <input
                          type="text"
                          className="border border-gray-300 block rounded w-full "
                          {...formik.getFieldProps('firstName')}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="font-medium">Last Name</label>
                        <input
                          type="text"
                          className="border border-gray-300 block rounded w-full"
                          {...formik.getFieldProps('lastName')}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="font-medium">Email</label>
                        <input
                          type="email"
                          className="border border-gray-300 block rounded w-full"
                          {...formik.getFieldProps('email')}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="font-medium">Phone Number</label>
                        <input
                          type="text"
                          className="border border-gray-300 block rounded w-full"
                          {...formik.getFieldProps('phoneNumber')}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="font-medium">Password</label>
                        <input
                          type="text"
                          className="border border-gray-300 block rounded w-full"
                          {...formik.getFieldProps('password')}
                        />
                      </div>
                    </div>
                    <div className="mt-4 text-right">
                      <Button primary type="submit" onClick={closeModal}>
                        Register
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

export default Register;
