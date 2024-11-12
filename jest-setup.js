/* eslint-disable no-undef */
import {configure} from 'reassure';

configure({
  testingLibrary: 'react-native',
  runs: 3,
  warmupRuns: 2,
  verbose: true,
  silent: true,
  outputFile: 'reassure2'
});
