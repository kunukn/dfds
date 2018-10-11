import getJsonAsync from './getJsonAsync';
import postJsonAsync from './postJsonAsync';

const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

const getUrl = (pathBase, path) => pathBase + path;

export { getJsonAsync, postJsonAsync, sleep, getUrl };
