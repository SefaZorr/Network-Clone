import { mount } from "@vue/test-utils";
import Footer from "@/components/Shared/Footer/FooterCopyright.vue"


describe('Footer.vue', () => {
    it('footer should contain copyright area', () => {
        const wrapper = mount(Footer);
        expect(wrapper.get("[data-test='copyright']").text()).toContain("©2021 Network | tüm hakları saklıdır.");
    });
    it('footer should contain brand area', () => {
        const wrapper = mount(Footer);
        expect(wrapper.text()).toContain("Network bir Aymarka markasıdır")
    });
});