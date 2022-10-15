import { useRouter } from 'next/router';

import { Field, Form, Formik, FormikHelpers } from 'formik';

interface Values {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        try {
          await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values, null, 2),
          });

          setSubmitting(false);

          router.push('/');
        } catch (error: unknown) {
          throw error;
        }
      }}
    >
      <div className="mx-auto w-full px-4 text-white sm:w-2/3 lg:px-0">
        <Form>
          <div className="pb-2 pt-4">
            <div className="text-left">Email</div>
            <Field
              autoFocus
              type="text"
              name="email"
              placeholder="Enter email..."
              className="block w-full rounded-sm bg-white p-1 text-black"
            />
          </div>
          <div className="pb-2 pt-4">
            <div className="text-left">Password</div>
            <Field
              name="password"
              className=" block w-full rounded-sm bg-white p-1 text-black"
              type="password"
              placeholder="Enter password..."
            />
          </div>
          <div className="cursor-pointer text-right text-gray-400 hover:underline">
            {/* <a onClick={() => modalInfo()}>Forgot your password?</a> */}
          </div>
          <div className="px-4 pb-2 pt-4">
            <button
              type="submit"
              className="mx-auto block w-1/2 rounded-md border-2 bg-brand-500 p-2 text-base text-white hover:bg-brand-800"
              // onClick={() => basicValidation(username, password)}
            >
              Sign In
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default LoginForm;
