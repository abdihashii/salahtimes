import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <Layout>
      <main className="mx-auto w-10/12 text-center lg:w-5/12 lg:pb-10">
        <h1
          className="mt-10 mb-22px font-semibold tracking-widest
        text-green-dark lg:mt-6 lg:mb-30px lg:pt-16 lg:text-9xl"
        >
          404
        </h1>
        <h2 className="text-xl lg:mb-14">Oops!... Page not found!</h2>

        <Link
          className="rounded-full bg-green-dark py-4 px-12 font-semibold uppercase text-white hover:bg-green-secondary"
          to="/"
        >
          Go back home
        </Link>
      </main>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <Seo pageTitle="404 - Page Not Found" />;
