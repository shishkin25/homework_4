<template>
    <svg :style="svgSizeStyles">
        <use :xlink:href="'#' + svgName"/>
    </svg>
</template>

<script>
export default {
    props: {
        svgName:{
            type: String,
            required: true
        },
        svgSize: {
            type: Object,
            required: true
        }
    }, 
    computed: {
        svgSizeStyles() {
            return {
                width: this.svgSize.width + 'px',
                height: this.svgSize.height + 'px'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/SvgIcon/index.scss';
</style>