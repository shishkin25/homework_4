<template>
    <div @click="toggleActiveState" class="dropdown-button">
        <ButtonComponent :buttonPadding="buttonPadding" :buttonStyle="buttonStyle" :class="{'button_primary_active': isActiveForPrimary, 'button_secondary_active': isActiveForSecondary}">
            <div class="button-container">
                <template v-if="haveText">
                    <div class="button-container__text">{{buttonText}}</div>
                    <div class="button-container__svg">
                        <SvgIcon 
                            :svgName="identifySvgName"
                            :svgSize="svgSize"
                        />
                    </div>
                </template>
                <template v-else>
                    <div :style="{height: '24px'}" class="button-container__svg">
                        <SvgIcon
                            :svgName="identifySvgName"
                            :svgSize="svgSize"
                        />
                    </div>
                </template>
            </div>
        </ButtonComponent>
        <ul v-show="isActive" class="dropdown-list">
            <li class="dropdown-list__item">Item text</li>
            <li class="dropdown-list__item">Item text texttexttexttext texttexttexttext text text</li>
            <li class="dropdown-list__item dropdown-list__item_active">Item text</li>
        </ul>
    </div>
</template>

<script>
import ButtonComponent from '@/components/Button/ButtonComponent.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
export default {
    components: {
        ButtonComponent, 
        SvgIcon
    }, 
    props: {
        buttonText: {
            type: String, 
            required: true
        },
        svgName: {
            type: String, 
            required: true
        }, 
        svgSize: {
            type: Object, 
            required: true
        },
        buttonPadding: {
            type: Object,
            required: true
        }, 
        buttonStyle: {
            type: String,
            default: 'primary',
        }
    }, 
    data() {
        return {
            isActive: false
        }
    }, 
    methods: {
        toggleActiveState() {
            this.isActive = !this.isActive;
        }
    },
    computed: {
        identifySvgName() {
            if (this.svgName === 'arrow-down') {
                if (this.isActive) {
                    return 'arrow-up'
                } else {
                    return this.svgName
                }
            } else {
                return this.svgName
            }
        }, 
        haveText() {
            return this.buttonText !== ''
        },
        isActiveForPrimary() {
            return this.isActive && this.buttonStyle === 'primary'
        }, 
        isActiveForSecondary() {
            return this.isActive && this.buttonStyle === 'secondary'
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/DropdownButton/index.scss';
</style>