import * as React from 'react';
import { useRouter } from 'next/router';
import { Container, GradientBox } from '@/styles/pages/Home';

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
        <h1>{tenant}</h1>
        <pre>{env}</pre>
      </header>

      <GradientBox />
    </Container>
  );
};

export default Tenant;