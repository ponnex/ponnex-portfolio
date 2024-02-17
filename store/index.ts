import { getAccessorType } from 'nuxt-typed-vuex';

import * as testimonies from './testimonies';

export const accessorType = getAccessorType({
  modules: {
    testimonies
  }
});
