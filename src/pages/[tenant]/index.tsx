import * as React from 'react';
import { useRouter } from 'next/router';
//import themeBuilder from '@/lib/themeBuilder';
//import { NextComponentType } from "next";
import { Container } from '@/styles/pages/Home';

const Tenant: React.FC<any> | null = () => {
  const router = useRouter();

  const { tenant } = router.query;

  const env = process.env.NODE_ENV;

  React.useEffect(() => {
    //document.title = `Você clicou ${count} vezes`;
  }, []);

  if (!tenant) {
    return (<Container>Carregando...</Container>);
  }

  return (
    <Container>
      <header>
        <h1 className="logo">{tenant}</h1>
        <pre>{env}</pre>
      </header>
    </Container>
  );
};

export default Tenant;