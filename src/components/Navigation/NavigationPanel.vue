<template>
    <header class="menu">
        <div class="menu__content">
            <nav class="menu__nav">
                <ul class="menu__nav-list">
                    <li class="menu__nav-item btn"><a href="#">Проекты</a></li>
                    <li class="menu__nav-item btn"><a href="#">Задачи</a></li>
                    <li class="menu__nav-item btn"><a href="#">Пользователи</a></li>
                </ul>
            </nav>
            <div class="menu__user-btn">
                <div class="avatar">
                    <img :src="AvatarImg" alt="avatar">
                </div>
                <div class="menu__user-arrow">
                    <svg>
                        <use xlink:href="#arrow-down"/>
                    </svg>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import AvatarImg from '@/assets/images/avatar.png'


export default {
  data () {
    return {
      AvatarImg
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/components/Navigation/index.scss';
</style>
