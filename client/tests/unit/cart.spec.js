import { mount } from '@vue/test-utils'
import CartPageTotal from '@/components/CartPage/cartPageTotal.vue'
import CartPageItems from '@/components/CartPage/cartPageItems.vue'
import CartModule from '@/components/Shared/Cart/appCart.vue'

describe('CartPageTotal.vue', () => {
    it('initial first price should be zero ', async () => {
    
        const $store = {
            state: jest.fn(),
            commit: jest.fn(),
            getters:{
                finalCartPrice:0,
                shippingCartPrice:30,
                discountCartPrice:0,
                totalCartPrice:0,
            }
          }
        
          const wrapper = mount(CartPageTotal, {
            global: {
              mocks: {
                $store
              }
            }
          })
        let dataTest = await wrapper.get('[data-test="totalCartPrice"]')
        expect(dataTest.text()).toBe('Ödenecek Tutar 0₺')
      })
      
 

})

describe('CartPageItems.vue', () => {
    it('render item count truely', async () => {
        const wrapper = mount(CartPageItems, {
            props:{
                items:[
                    {
                        content:{
                            id:1,
                            description:'test',
                            colorCode:'#000000',
                            color:'Black',
                            size:'M',
                            price:10,
                            totalPrice:10,
                            count:1,
                        },
                        Image:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        
                    }
                ]
            }
        })
        expect(wrapper.get("[data-test='item-count']").text()).toBe("1")
    
    }),
    it('render item count when increase it', async () => {
      const wrapper = mount(CartPageItems, {
          props:{
              items:[
                  {
                      content:{
                          id:1,
                          description:'test',
                          colorCode:'#000000',
                          color:'Black',
                          size:'M',
                          price:10,
                          totalPrice:10,
                          count:1,
                      },
                      Image:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      
                  }
              ]
          }
      })
      let count = parseInt(wrapper.get("[data-test='item-count']").text());
      await wrapper.setProps({
        items:[
            {
                content:{
                    count:count+1,
                },
            }
          ]
      })

      expect(wrapper.get("[data-test='item-count']").text()).toBe((count + 1).toString())
  
    }),
    it('render item count when decrease it', async () => {
      const wrapper = mount(CartPageItems, {
          props:{
              items:[
                  {
                      content:{
                          id:1,
                          description:'test',
                          colorCode:'#000000',
                          color:'Black',
                          size:'M',
                          price:10,
                          totalPrice:10,
                          count:2,
                      },
                      Image:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      
                  }
              ]
          }
      })
      let count = parseInt(wrapper.get("[data-test='item-count']").text());
      await wrapper.setProps({
        items:[
            {
                content:{
                    count:count-1,
                },
            }
          ]
      })

      expect(wrapper.get("[data-test='item-count']").text()).toBe((count - 1).toString())
  
    })
}
);


describe('CartModule.vue', () => {
    it('render not blank component', async () => {
        const $store = {
            state: {
                cart: {
                    items: [
                    ],
                    total: 0,
                    shipping: 0,
                    discount: 0,
            },
            getters:{
                finalCartPrice:0,
                shippingCartPrice:30,
                discountCartPrice:0,
                totalCartPrice:0,

            }
           
          }
        }
        
          const wrapper = mount(CartModule, {
            global: {
              mocks: {
                $store
              }
            }
          })
    
        expect(wrapper.find("#cart-item").exists()).toBe(false)
    
    })
}
);