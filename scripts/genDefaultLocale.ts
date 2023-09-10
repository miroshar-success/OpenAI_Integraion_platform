import { consola } from 'consola';
import { colors } from 'consola/utils';

import i18nConfig from '../.i18nrc';
import { entryLocaleJsonFilepath, localesResourcesFilepath } from './const';
import { writeJSON } from './utils';

export const genDefaultLocale = () => {
  consola.info(`Default locale is ${i18nConfig.entryLocale}...`);

  const resources = require(localesResourcesFilepath(i18nConfig.entryLocale));
  const data = Object.entries(resources.default);
  consola.start(`Generate default locale json, found ${data.length} namespaces...`);

  for (const [ns, value] of data) {
    const filepath = entryLocaleJsonFilepath(`${ns}.json`);
    writeJSON(filepath, value);
    consola.success(colors.bgWhiteBright(colors.black(` ${ns} `)), colors.gray(filepath));
  }
};
