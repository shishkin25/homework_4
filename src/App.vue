<template>
  <div id="app">
    
    <ProjectsPage/>


    <!-- <TasksPage/> -->


    <!-- <UserProfilePage/> -->


    <!-- Демонстрация состояния disabled у кнопки -->
    <!-- <div @click="handler" class="content-container">
      <div>Как только ButtonCounter станет 5, кнопка станет disabled</div>
      <div>ButtonCounter: {{ButtonCounter}}</div>
      <ButtonComponent :disabled="isDisabled">Нажми меня</ButtonComponent>
    </div> -->


    <!-- Демонстрация dropdownButton. При нажатии кнопка активна и будет выпадать список. Опять же присутсвует много пропсов, 
    потому что без них как будто бы никак не переиспользовать те компоненты кнопки и компоненты иконки, которые уже есть. 
    Инлайн стили у DropdownButton только чтобы нормально расположить кнопку по центру и видеть выпадающий список при нажатии-->
    <!-- <div class="content-container">
      <DropdownButton style="display: table; margin: 0 auto"
        :buttonPadding="{top: 12, right: 8, bottom: 12, left: 16}"
        :buttonText="'Button'"
        :svgName="'arrow-down'"
        :svgSize="{width: 12, height: 16}"
      />
    </div> -->


    <!-- Демонстрация dropdownButton с другой иконкой и без текста. -->
    <!-- <div class="content-container">
      <DropdownButton style="display: table; margin: 0 auto"
        :buttonPadding="{top: 9, right: 9, bottom: 9, left: 9}"
        :buttonText="''"
        :svgName="'dots'"
        :svgSize="{width: 5, height: 13}"
        :buttonStyle="'secondary'"
      />
    </div> -->



    <!-- <div class="content-container">
      <InputComponent/>
    </div> -->


  </div>
</template>

<script>
import ProjectsPage from '@/views/ProjectsPage.vue';
/* import TasksPage from '@/views/TasksPage.vue' */
/* import UserProfilePage from '@/views/UserProfilePage.vue' */
/* import ButtonComponent from '@/components/Button/ButtonComponent.vue' */
/* import DropdownButton from '@/components/DropdownButton/DropdownButton.vue' */
/* import InputComponent from '@/components/Input/InputComponent.vue' */

export default {
  name: 'App',
  components: {
    ProjectsPage,
    /* TasksPage, */
    /* UserProfilePage, */
    /* ButtonComponent, */
    /* DropdownButton, */
    /* InputComponent, */
  },
  data() {
    return {
      ButtonCounter: 0
    }
  },
  methods: {
    handler(event) {
       if (event.target.tagName === 'BUTTON') {
        this.ButtonCounter++;
      }
    }

  },
  computed: {
    isDisabled() {
      return this.ButtonCounter === 5;
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/style.scss';
.content-container {
  padding: 24px;
  flex-grow: 1;
}
</style>
