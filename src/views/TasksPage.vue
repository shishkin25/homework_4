<template>
    <div class="tasks-page">
        <NavigationPanel/>
        <div class="content-container">
            <AbsenseOfProjects v-if="tasks.length == 0"/>
            <TaskItem
                v-else
                v-for="(item, index) in tasks"
                v-bind:task="item"
                v-bind:key="index"
            ></TaskItem>
        </div>
    </div>
</template>

<script>
import NavigationPanel from '@/components/Navigation/NavigationPanel.vue'
import TaskItem from '@/components/TaskItem/TaskItem.vue'
import AbsenseOfProjects from '@/components/AbsenseOfProjects/AbsenseOfProjects.vue'
export default {
    data() {
        return {
            tasks: [
                {
                    name: 'Название-задачи-1',
                    code: '#1',
                    createdBy: 'Иванов И.И. создал 1 час назад', 
                    changedBy: 'Баранов В.В. изменил 1 минуту назад'
                }, 
                {
                    name: 'Название-задачи-2',
                    code: '#2',
                    createdBy: 'Иванов И.И. создал 1 час назад', 
                    changedBy: 'Баранов В.В. изменил 1 минуту назад'
                },
                {
                    name: 'Название-задачи-3',
                    code: '#3',
                    createdBy: 'Иванов И.И. создал 1 час назад', 
                    changedBy: 'Баранов В.В. изменил 1 минуту назад'
                }, 
                {
                    name: 'Название-задачи-4',
                    code: '#4',
                    createdBy: 'Иванов И.И. создал 1 час назад', 
                    changedBy: 'Баранов В.В. изменил 1 минуту назад'
                }, 
                {
                    name: 'Название-задачи-5',
                    code: '#5',
                    createdBy: 'Иванов И.И. создал 1 час назад', 
                    changedBy: 'Баранов В.В. изменил 1 минуту назад'
                }
            ]
        }
    },
    components: {
        NavigationPanel,
        TaskItem,
        AbsenseOfProjects
    }
}
</script>

<style lang="scss">
.tasks-page {
    height: 100%;
    display: flex;
	flex-direction: column;
    .content-container {
        padding: 24px;
        flex-grow: 1;
    }
}
</style>