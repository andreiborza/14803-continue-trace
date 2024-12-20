import * as Sentry from '@sentry/node'

// Ensure to call this before requiring any other modules!
Sentry.init({
  dsn: "https://2d9ab053ee90aa2e40ad55094c940343@o447951.ingest.us.sentry.io/4508245640282112",

  // Add Tracing by setting tracesSampleRate
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

