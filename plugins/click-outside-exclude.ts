/**
 * Click Outside Directive with excluded list
 * Reference: https://tahazsh.com/detect-outside-click-in-vue
 */
import { DirectiveOptions } from 'vue';

let handleOutsideClick: any;
const directive: DirectiveOptions = {
  bind(el, binding, vnode) {
    handleOutsideClick = (e: any) => {
      e.stopPropagation();
      let $nodeContext = vnode.context as Vue;

      interface directiveInput {
        handler: keyof typeof $nodeContext;
        exclude: Array<string>;
      }

      let { handler, exclude }: directiveInput = binding.value; 
      
			let clickedOnExcludedEl = false;
			exclude.forEach((refName: string) => {
				if (!clickedOnExcludedEl) {
          const excludedEl = vnode.context!.$refs[refName] as HTMLElement;
          if (excludedEl) clickedOnExcludedEl = excludedEl.contains(e.target)
				}
      });
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        vnode.context![handler]()
      }
    }
    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
  },

  unbind() {
    document.removeEventListener('click', handleOutsideClick)
    document.removeEventListener('touchstart', handleOutsideClick)
  }
};

export default directive;