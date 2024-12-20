import * as _crypto from 'node:crypto';
import * as Sentry from '@sentry/node';


// Simulates the traceId obtained from the outside world
function getRandomSentryTraceData() {
    const sentryTrace = _crypto.randomBytes(16).toString('hex') + '-' + _crypto.randomBytes(8).toString('hex');
    return { sentryTrace, baggage: 'environment=dev' };
}

const main = () => {
    const traceData = getRandomSentryTraceData();
    const traceId = traceData.sentryTrace.split('-')[0];	

    Sentry.continueTrace(traceData, async () => {
      await Sentry.startSpan({ name: 'hello span' }, (span) => {
	  const spanTraceId = span.spanContext().traceId;
          console.log(`trace data traceId = ${traceId}`);
	  console.log(`span       traceId = ${spanTraceId}`);
          process.exit(spanTraceId === traceId ? 0 : 1);
      })
    })
}

main()
