<template>
    <div>
        <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
        <p class="mb-0 mainTitle">{{ $t('buddy.chooseCategorie')}}</p>
        <router-link to="/becomegodfather" class="homecard">
            <div class="homecard-text">
                <p class="mb-0 homecard-text--title">{{ $t('buddy.iWantBeGodfather')}}</p>
                <p class="mb-0 homecard-text--subtitle">{{ $t('buddy.toBeClassy')}}</p>
            </div>
            <img :alt="$t('buddy.iWantBeGodfather')" src="../assets/img/parrainboring.svg">
        </router-link>

        <router-link to="/becomegodchild" class="homecard">
            <div class="homecard-text">
                <p class="mb-0 homecard-text--title">{{ $t('buddy.iSearchAGodfather')}}</p>
                <p class="mb-0 homecard-text--subtitle">{{ $t('buddy.iNeedGodfather')}}</p>
            </div>
            <img :alt="$t('buddy.iSearchAGodfather')" src="../assets/img/search.svg">
        </router-link>
    </div>
</template>
<style scoped lang="scss">
    @import "../scss/app-variables";
    @import "../scss/app";
</style>
