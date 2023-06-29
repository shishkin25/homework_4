<template>
    <div class="projects-page">
        <NavigationPanel/>
        <div class="content-container">
            <AbsenseOfProjects v-if="projects.length == 0"/>
            <ProjectItem
                v-else
                v-for="(item, index) in projects"
                v-bind:project="item"
                v-bind:key="index"
            ></ProjectItem>
        </div>
    </div>
    
</template>

<script>
import NavigationPanel from '@/components/Navigation/NavigationPanel.vue'
import ProjectItem from '@/components/ProjectItem/ProjectItem.vue'
import AbsenseOfProjects from '@/components/AbsenseOfProjects/AbsenseOfProjects.vue'

export default {
    data() {
        return {
            projects: [
                /* {
                    name: 'Название-проекта-1',
                    code: '#1',
                    createdBy: 'Иванов И.И. создал 1 час назад', 
                    changedBy: 'Баранов В.В. изменил 1 минуту назад'
                }, 
                {
                    name: 'Название-проекта-2',
                    code: '#2',
                    createdBy: 'Иванов И.И. создал 1 час назад', 
                    changedBy: 'Баранов В.В. изменил 1 минуту назад'
                },
                {
                    name: 'Название-проекта-3',
                    code: '#3',
                    createdBy: 'Иванов И.И. создал 1 час назад', 
                    changedBy: 'Баранов В.В. изменил 1 минуту назад'
                }, 
                {
                    name: 'Название-проекта-4',
                    code: '#4',
                    createdBy: 'Иванов И.И. создал 1 час назад', 
                    changedBy: 'Баранов В.В. изменил 1 минуту назад'
                }, 
                {
                    name: 'Название-проекта-5',
                    code: '#5',
                    createdBy: 'Иванов И.И. создал 1 час назад', 
                    changedBy: 'Баранов В.В. изменил 1 минуту назад'
                } */
            ]
        }
    },
    components: {
        NavigationPanel,
        ProjectItem,
        AbsenseOfProjects
    }
}
</script>

<style lang="scss">
.projects-page {
    height: 100%;
    display: flex;
	flex-direction: column;
    .content-container {
        padding: 24px;
        flex-grow: 1;
    }
}
</style>