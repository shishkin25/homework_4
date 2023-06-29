<template>  
    <button :style="buttonPaddingStyles" class="button" :class="{'button_primary': styleIsPrimary, 'button_secondary': styleIsSecondary}">
        <slot/>
    </button>
</template>

<script>
export default {
    props: {
        buttonPadding: {
            type: Object, 
            default: () => {
                return {top: 12, right: 16, bottom: 12, left: 16}
            }
        },
        buttonStyle: {
            type: String, 
            default: () => 'primary',
            validator: function (value) {
            return ['primary', 'secondary'].includes(value)
            }
        }
    },
    computed: {
        buttonPaddingStyles() {
            return {
                'padding-top': this.buttonPadding.top + 'px',
                'padding-right': this.buttonPadding.right + 'px',
                'padding-bottom': this.buttonPadding.bottom + 'px',
                'padding-left': this.buttonPadding.left + 'px'
            }
        }, 
        styleIsPrimary() {
            return this.buttonStyle === 'primary';
        },
        styleIsSecondary() {
            return this.buttonStyle === 'secondary';
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/Button/index.scss';
</style>