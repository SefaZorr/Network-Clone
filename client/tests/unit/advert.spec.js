import { mount } from '@vue/test-utils'
import AdvertCarousel from '@/components/HomePage/advertCarousel.vue'


describe('AdvertCarousel.vue', () => {
  it('first element should have active class name', async () => {
    const items = [{id:1,url:"https://img-network.mncdn.com/bannerimages/N_SLIDER_2021102207002572810.jpg"},
                   {id:2,url:"https://img-network.mncdn.com/bannerimages/Slider_2021111513254469867.jpg"}
                  ]
    const wrapper = mount(AdvertCarousel,{
        props:{items}
    })
    let dataTest = await wrapper.findAll('[data-test="carouselAdvert"]')
    expect(dataTest[0].classes()).toContain('active')
  }),

  it('others element should not have active class name', async () => {
    const items = [{id:1,url:"https://img-network.mncdn.com/bannerimages/N_SLIDER_2021102207002572810.jpg"},
                   {id:2,url:"https://img-network.mncdn.com/bannerimages/Slider_2021111513254469867.jpg"}
                  ]
    const wrapper = mount(AdvertCarousel,{
        props:{items}
    })
    let dataTest = await wrapper.findAll('[data-test="carouselAdvert"]')
    expect(dataTest[1].classes()).not.toContain('active')
  })
})
