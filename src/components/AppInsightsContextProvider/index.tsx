/* eslint-disable consistent-return */
import React, { ReactChildren, ReactChild, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import {
  ReactPlugin,
  AppInsightsContext,
} from '@microsoft/applicationinsights-react-js';

let reactPlugin: ReactPlugin;
let appInsights: ApplicationInsights;

interface Props {
  children: ReactChild | ReactChildren;
}

const initialise = (instrumentationKey: string) => {
  if (!instrumentationKey) {
    throw new Error(
      'Could not initialise App Insights: `instrumentationKey` not provided',
    );
  }

  reactPlugin = new ReactPlugin();

  appInsights = new ApplicationInsights({
    config: {
      instrumentationKey,
      extensions: [reactPlugin],
    },
  });

  appInsights.loadAppInsights();
};

const handleRouteChange = (url: string) => {
  if (!reactPlugin) {
    return;
  }

  reactPlugin.trackPageView({
    uri: url,
  });
};

const AppInsightsContextProvider = ({ children }: Props) => {
  const [isInitialised, setInitialised] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const instrumentationKey =
      process.env.NEXT_PUBLIC_APPINSIGHTS_INSTRUMENTATIONKEY;

    if (!instrumentationKey || !!appInsights) {
      return;
    }

    if (!router.isReady) {
      return;
    }

    initialise(instrumentationKey);

    handleRouteChange(router.asPath);

    setInitialised(true);
  }, [router.asPath, router.isReady]);

  useEffect(() => {
    if (!isInitialised) {
      return;
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [isInitialised, router.events]);

  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      {children}
    </AppInsightsContext.Provider>
  );
};

export default AppInsightsContextProvider;
