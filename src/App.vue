<template>
    <div id="app">
        <h1>Добро пожаловать в приложение "Разделение счета"</h1>
        <router-view></router-view>

        <!-- Добавь другие компоненты и логику переключения экранов здесь -->
    </div>
</template>

<script>
export default{
    name: 'App'
}
</script>

<style lang="scss">
html{
    background-color: #feefdc;
    font-family: 'Montserrat', sans-serif;

}
#app {


  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a1f2e;

}

</style>

