import React from 'react';
import { useRouter } from 'next/router';

export const BASE_CSS_VARS_URI = 'https://linxcheckoutdevstorage.blob.core.windows.net/nx-ds-files/css/variables.css';

const BaseGlobalStyle: React.FC = () => {
  const router = useRouter();

  const { tenant } = router.query;

  return <>
    <link href={BASE_CSS_VARS_URI} rel="stylesheet" as="style" />
  </>;
};

export default BaseGlobalStyle;
