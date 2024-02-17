import { Plugin } from '@nuxt/types';
import MobileDetect from 'mobile-detect';
import browser from 'browser-detect';

interface BrowserDetails {
  isTablet: boolean;
  isMobile: boolean;
  browser: string;
}

declare module 'vue/types/vue' {
  interface Vue {
    $util: {
      browserDetails(): BrowserDetails;
    };
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $util: {
      browserDetails(): BrowserDetails;
    };
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $util: {
      browserDetails(): BrowserDetails;
    };
  }
}

let md = new MobileDetect(window.navigator.userAgent);
let browserDetails = browser();

const helperPlugins: Plugin = (context, inject) => {
  inject('util', {
    browserDetails(): BrowserDetails {
      return {
        isTablet: !!md.tablet(),
        isMobile: !!md.mobile() && !md.tablet(),
        browser: (md.userAgent() || browserDetails.name!).toLowerCase()
      };
    }
  });
};
export default helperPlugins;
