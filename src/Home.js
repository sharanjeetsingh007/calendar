import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="" />
      <Container>
        <main>
          <Content />
        </main>
      </Container>
      <Footer title="Roster APP" description="" />
    </React.Fragment>
  );
}