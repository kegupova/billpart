<template>
    <div class="addItems">
        <p class="greet">Добавление блюд</p>
        <add-items-form @add-item="addItem"></add-items-form>
        <p class="greet">Список блюд</p>
        <item-list :items="items"></item-list>
        <div class="btn_group">
            <button @click="goToPersons">Назад</button>
            <button @click="goToResult">Далее</button>
        </div>

    </div>
</template>

<script>
import AddItemsForm from './AddItemsForm.vue';
import ItemList from './ItemList.vue';

export default {
    components: {
        AddItemsForm,
        ItemList,
    },
    data() {
        return {
            items: [],
        };
    },

    methods: {
        addItem(item) {
            this.items.push(item);
            this.$store.commit('addItem', item);

        },
        goToPersons(){
            this.$router.push('/')
        },
        goToResult(){
            this.$router.push('/result')
        }
    },
};
</script>
<style scoped>
button {
    @include btn();
    min-width: 80px;
    margin: 5px;
}
.greet {
    font-size: 24px;
    margin: 20px;
}
.addItems{
    width: 500px;
    margin: 0 auto;
}
.btn_group{
    display: flex;
    justify-content: space-between;
    margin: 25px 0 10px;
}
</style>