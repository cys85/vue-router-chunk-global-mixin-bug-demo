import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GlobalMix extends Vue {
  public created() {
    // tslint:disable-next-line:no-console
    console.log('GlobalMix->', this.$options.name);
  }
}
