<template>
  <transition>
    <div class="soft-keyboard-wrapper" v-if="visible">
      <div class="soft-keyboard-row" v-for="(row,index) in keySet" :key="index">
        <span
          class="soft-keyboard-key"
          v-for="(key,index) in row"
          :key="index"
          :class="getClassesOfKey(key)"
          :style="getStyleOfKey(key)"
          v-text="getCaptionOfKey(key)"
        />
      </div>
    </div>
  </transition>
</template>
<script>
import Layout from '../global/keyboard';

export default {
  name: 'SoftKeyboard',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    layout: {
      type: [String, Object],
      default: 'normal',
    },
    defaultKeySet: {
      type: String,
      default: 'default',
    },
    input: [HTMLInputElement, HTMLTextAreaElement],
  },
  data() {
    return {
      currentKeySet: this.defaultKeySet,
    };
  },
  computed: {
    keySet() {
      const layout = this.getLayout();
      if (!layout) return null;
      const keySet = layout[this.currentKeySet];
      if (!keySet) return null;
      const res = [];
      const meta = layout.meta || {};
      keySet.forEach((line) => {
        const row = [];
        line.split(' ').forEach((item) => {
          if (typeof item === 'string') {
            if (
              item.length > 2
              && item[0] === '{'
              && item[item.length - 1] === '}'
            ) {
              const name = item.substring(1, item.length - 1);
              if (meta[name]) {
                row.push(meta[name]);
              } else {
                console.warn(`Missing named key from meta: ${name}`);
              }
            } else if (item === '') {
              row.push({
                placeholder: true,
              });
            } else {
              row.push({
                key: item,
                text: item,
              });
            }
          } else if (typeof item === 'object' && !Array.isArray(item)) {
            row.push(item);
          }
        });
        res.push(row);
      });
      return res;
    },
  },
  mounted() {
    console.log(this.input);
    if (this.input) {
      this.input.addEventListener('focus', this.inputFocus);
    }
  },
  methods: {
    getLayout() {
      if (typeof this.layout === 'string') {
        return Layout[this.layout];
      }
      return this.layout;
    },
    getCaptionOfKey(key) {
      return key.text || key.key || '';
    },
    getClassesOfKey(key) {
      if (key.placeholder) {
        return 'placeholder';
      }
      let classes = key.classes || '';
      if (key.keySet && this.currentKeySet === key.keySet) {
        classes += ' activated';
      }
      return classes;
    },
    getStyleOfKey(key) {
      const style = {};
      if (key.width) {
        style.width = key.width;
      }
      return style;
    },
    inputFocus() {
      document.activeElement.blur(); // 屏蔽默认键盘弹出；
    },
  },
  watch: {
    input(now, old) {
      console.log(now, old);
      if (old) {
        old.removeEventListener('focus', this.inputFocus);
      }
      if (now) {
        now.addEventListener('focus', this.inputFocus);
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
.soft-keyboard-wrapper
  .soft-keyboard-row
    height: 48px
    text-align: center
    &+.soft-keyboard-row
      margin-top: 12px
  .soft-keyboard-key
    overflow hidden
    display: inline-block
    font-size: 20px
    color: #333
    width: 8%
    height: 100%
    border-radius: 4px
    background-color: #F3F4F5
    &:before
      display: inline-block
      content: ''
      height: 100%
      vertical-align: middle
    & + .soft-keyboard-key
      margin-left: 1.33%
    &.activated
    &:active
      background-color: #76D9B8
</style>
