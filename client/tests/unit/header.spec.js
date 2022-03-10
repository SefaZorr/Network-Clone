import { mount } from "@vue/test-utils";
import Header from "@/components/Shared/Header/appHeader.vue"


describe('Header.vue', () => {
    it('Header width should be 80% percent', () => {
        const $store = {
            state: jest.fn(),
            commit: jest.fn(),
            getters:{
                cartItemsQuantity: 0
            }
          }
        
        const wrapper = mount(Header, {
            global: {
              mocks: {
                $store
              }
            }
          });
        expect(wrapper.get('#header-top').attributes().style).toBe('width: 80%;');
    });
    
});