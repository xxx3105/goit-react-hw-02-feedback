import 'modern-normalize';
import React from 'react';
import { Layout } from './Layout';
import { FeedbackHandler } from './FeedbackHandler/FeedbackHandler';
import { Container } from 'styles/GlobalStyle';

export const App = () => {
  return (
    <Layout>
      <Container>
        <FeedbackHandler />
      </Container>
    </Layout>
  );
};
