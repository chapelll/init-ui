const expect = chai.expect
import Vue from 'vue'
import Row from '../src/Row'
import Col from '../src/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', (done) => {
  ``
  it('存在', () => {
    expect(Row).to.be.exist
  })

  it('接收 gutter 属性', () => {
    Vue.component('i-row', Row)
    Vue.component('i-col', Col)
    const div = document.createElement('div')
    div.innerHTML = `
      <i-row gutter="20">
        <i-col span="12"></i-col>
        <i-col span="12"></i-col>
      </i-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft.to.eq('-10px'))
      expect(getComputedStyle(row).marginRight.to.eq('-10px'))
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0].paddingLeft).to.eq('10px'))
      expect(getComputedStyle(cols[1].paddingRight).to.eq('10px'))
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })

  it('接收 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
    vm.remove()
    vm.$destroy()
  })

})