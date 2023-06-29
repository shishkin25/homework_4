<template>
    <div class="profile-page">
        <NavigationPanel/>
        <div class="content-container">
            <ProfileItem/>
        </div>
    </div>
</template>

<script>
import NavigationPanel from '@/components/Navigation/NavigationPanel.vue'
import ProfileItem from '@/components/ProfileItem/ProfileItem.vue'
export default {
    components: {
        NavigationPanel,
        ProfileItem
    }
}
</script>

<style lang="scss">
.profile-page {
    height: 100%;
    display: flex;
	flex-direction: column;
    .content-container {
        padding: 24px;
        flex-grow: 1;
    }
}
</style>