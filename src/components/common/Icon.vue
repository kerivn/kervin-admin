<template>
    <span ref="elRef" :class="$attrs.class"></span>
</template>
<script lang="ts" setup>
import * as IconMap from '@icon-park/vue-next/es/map';
import { render, createVNode } from 'vue'

import { isArray } from '@/utils/is';
import '@icon-park/vue-next/styles/index.css';
type StringKey = Record<string, any>
const iconMap: StringKey = IconMap

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    theme: {
        type: String,
        default: 'outline',
    },
    size: {
        type: [String, Number],
        default: 24,
    },
    spin: {
        type: Boolean,
        default: false,
    },
    color: {
        type: [String, Array],
        default: () => { return '#409EFF' },
    },
    strokeWidth: {
        type: Number,
        default: 4,
    },
    strokeLinecap: {
        type: String,
        default: 'round',
    },
    strokeLinejoin: {
        type: String,
        default: 'miter'
    },

});
const elRef = ref<Element>();
function toPascalCase(val: string) {
    return val.replace(/(^\w|-\w)/g, function (c) {
        return c.slice(-1).toUpperCase();
    });
}
// 当在primary类型的Button中默认表现为白色而不是主题色
function setStyle() {
    const parent = elRef.value!.parentElement!.className;
    const inPrimaryBtn = /-btn-primary/i.test(parent);
    if (inPrimaryBtn) {
        return {
            fill: '#fff',
            theme: 'outline',
            size: 16,
            class: 'mr-2px',
        };
    }
    const inDefaultBtn = /-btn/i.test(parent);
    if (inDefaultBtn) {
        return {
            theme: 'outline',
            size: 16,
            class: 'mr-2px',
        };
    }
    //其他特殊的默认样式也都可以这样做
    return {};
}
async function update() {
    const params = {
        theme: props.theme,
        size: props.size,
        fill: isArray(props.color) ? props.color : [props.color],
        spin: props.spin,
        strokeWidth: props.strokeWidth,
        ...setStyle(),
    };
    const type = toPascalCase(props.name);
    if (!(type in iconMap)) {
        throw new Error(''.concat(type, ' is not a valid icon type name'));
    }
    render(createVNode(iconMap[type], params), elRef.value!);
}
watch(() => props, update, { flush: 'post' });

onMounted(update);
</script>