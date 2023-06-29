<template>
    <div class="result_page">
        <p class="greet">Ура! Теперь узнаем результаты</p>
        <div class="result_block">
            <div class="total_score">

                    <p><b>Общий счет: {{ totalCost }}₽.</b></p>
                    <p class="guest_score" v-for="(cost, person) in guestCosts" :key="person">
                        {{ person }}: {{ cost }}₽.

                    </p>


            </div>
            <div class="btn_group">

                <button @click="goToItems">Назад</button>

                <button @click="goToPersons">К началу</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "resultPage",
    computed: {
        ...mapState(["items"]),
        totalCost() {
            if (this.items) {
                return this.items.reduce((total, item) => total + parseFloat(item.cost), 0);
            }
            return 0;
        },
        guestCosts() {
            const guestCosts = {};
            if (this.items) {
                this.items.forEach(item => {
                    item.people.forEach(person => {
                        if (!guestCosts[person]) {
                            guestCosts[person] = 0;
                        }
                        guestCosts[person] += parseFloat(item.cost) / item.people.length;
                    });
                });
            }
            return guestCosts;
        }
    },
    methods: {
        goToPersons() {
            this.$router.push("/");
        },
        goToItems() {
            this.$router.push("/add-items");
        }
    }
};
</script>

<style scoped>
.total_score{
    padding: 15px;
    text-align: left;
}

.greet {
    font-size: 24px;
    margin: 20px;
}
.result_page{
    width: 500px;
    margin: 0 auto;

}
.result_block{
    background-color: #eedecd;
    border-radius: 10px;
    border: 1px solid rgba(254, 239, 220, 0.42);

}
button {
    background-color: #0a1f2e;
    color: #feefdc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    height: 40px;
    width: 80px;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(30, 31, 14, 0.5);
}
.btn_group{
    display: flex;
    justify-content: space-between;
    margin: 10px 0 10px;
}
</style>