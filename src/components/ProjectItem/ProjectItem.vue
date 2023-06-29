<template>
    <section class="element">
        <div class="element__wrapper">
            <div class="element__content">
                <div class="element__content-header">
                    <div class="element__content-name">{{project.name}}</div>
                </div>
        
                <div class="element__content-footer">
                    <div class="element__content-info">
                        <div class="element__content-code">{{project.code}}</div>
                        <div class="element__content-created timestamp">{{project.createdBy}}</div>
                    </div>
        
                    <div class="element__content-changing">
                        <div class="timestamp">{{project.changedBy}}</div>
                    </div>
                </div>
            </div>
            <DropdownButton class="element__options"
                :buttonPadding="{top: 9, right: 9, bottom: 9, left: 9}"
                :buttonText="''"
                :svgName="'dots'"
                :svgSize="{width: 5, height: 13}"
                :buttonStyle="'secondary'"
            />
        </div>
    </section>
</template>

<script>
import DropdownButton from '@/components/DropdownButton/DropdownButton.vue'
export default {
    props: {
        project: {
            type: Object, 
            required: true
        }
    },
    components: {
        DropdownButton
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/ProjectItem/index.scss';
</style>