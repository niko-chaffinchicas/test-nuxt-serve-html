import fs from 'node:fs';

export default defineEventHandler(() => {
  return fs.readFileSync('./public/test-page.html');
});