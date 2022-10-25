import { AuthLayoutProps } from './AuthLayout.types';

const AuthLayout: AuthLayoutProps = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="text-center font-light">
        <section className="flex min-h-screen items-stretch bg-brand-700 ">
          <div className="lg:flex w-1/2 hidden bg-asphalt bg-no-repeat bg-cover relative items-center bg-[url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=905&q=80')]">
            <div className="absolute inset-0 z-0 opacity-50"></div>
            <div className="z-10 w-full px-24">
              <p className="my-4 text-3xl font-medium text-white">Content Management System</p>
            </div>
          </div>
          <div className="z-0 flex w-full items-center justify-center bg-brand-700 px-8 md:px-16 lg:px-24 xl:px-64 text-center lg:w-1/2">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AuthLayout;
