<template>
    <div>

        <form @submit.prevent="submitForm">
            <div class="input_item">
            <input type="text" id="name" v-model="itemName" required placeholder="Введите название блюда:">
            <input type="number" id="cost" v-model="itemCost" required placeholder="Цена:">
            </div>

            <div class="selectedPeopleList" ref="outer">
                <div class="Person_name"><p style="margin: 0">Выберите гостей:</p></div>
                <div class="Person_items">
                    <div class="selectedPersonItem" v-for="person in $store.getters.getPeople" :key="person.ID">
                         <input type="checkbox" :value="person.name" v-model="selectedPeople" />
                         <label style="text-align: right">{{ person.name }}</label>
                    </div>
                </div>
            </div>
            <button type="submit">Добавить</button>

        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemName: '',
            itemCost: '',
            selectedPeople: [],
        };
    },
    computed: {
        people() {
            return this.$store.getters.getPeople;
        },
    },
    methods: {
        submitForm() {
            if (this.itemName && this.itemCost > 0 && this.selectedPeople.length > 0) {
                const item = {
                    name: this.itemName,
                    cost: this.itemCost,
                    people: this.selectedPeople,
                };
                this.$emit('add-item', item);

                this.itemName = '';
                this.itemCost = '';
                this.selectedPeople = [];
            }
        },
    }
};
</script>
<style scoped>

input{
    padding: 10px;
    border: none;
    border-radius: 5px;

}
.input_item{
    display: flex;
    align-items: center;
    justify-content: space-between;

}

#name{
    width: 400px;
    margin-right: 10px;
}
#cost{
    width: 60px;
}
.selectedPeopleList{
    margin: 20px 0 25px;
    display: flex;
    justify-content: space-between;
}
.Person_items{
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;

    background-color: #eedecd;
    border: none;
    border-radius: 5px;
}
.Person_name{
    text-align: left;
    padding: 10px;
    background-color: #eedecd;
    border: none;
    border-radius: 5px;

}
.selectedPersonItem{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;

}
button {
    background-color: #0a1f2e;
    color: #feefdc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    height: 40px;
    min-width: 80px;
    margin: 5px;
    box-shadow: 0 2px 4px rgba(30, 31, 14, 0.5);
}
</style>