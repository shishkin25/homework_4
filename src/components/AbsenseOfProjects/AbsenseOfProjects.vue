<template>
    <section class="absense-of-sth">
        <div class="absense-of-sth__content-wrapper">
            <div class="absense-of-sth__text absense-of-sth__text_mb">Не создан ни один проект</div>
            <ButtonComponent>Добавить</ButtonComponent>
        </div>
    </section>
</template>

<script>
import ButtonComponent from '@/components/Button/ButtonComponent.vue'
export default {
    components: {
        ButtonComponent
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/AbsenseOfProjects/index.scss';
</style>