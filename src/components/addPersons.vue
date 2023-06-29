<template>

    <div class="addPerson">
        <p class="greet">Давайте начнем! Введите имена гостей</p>
       <div class="add_person">
           <div class="person_input">
               <input type="text" v-model="personName" placeholder="Введите имя гостя">
               <button @click="addPerson">Добавить</button>
           </div>
           <div class="personList" v-for="person in getPeople" :key="person">
               <p>{{ person.name }}</p>
               <button @click="removePerson(person)">Удалить</button>
           </div>
       </div>
        <button v-if="getPeopleLength >= 2" @click="goToItems">Далее</button>
    </div>

</template>

<script>
export default {
    computed: {
        getPeople() {
            return this.$store.getters.getPeople;
        },
        getPeopleLength() {
            return this.$store.getters.getPeopleLength;
        },
    },
    data() {
        return {
            personName: '',
            price: 0,
        };
    },
    methods: {
        addPerson() {
            if (this.personName) {
                const person = {
                    name: this.personName,
                };
                this.$store.commit('addPerson', person);
                this.personName = '';
            }
        },
        removePerson(person) {
            this.$store.commit('removePerson', person);
        },
        goToItems() {

            this.$router.push('/add-items');
        },
    },
};
</script>
<style  lang="scss">
$primary-color: #0a1f2e;
$secondary-color: #feefdc;
$shadow-color: rgba(30, 31, 14, 0.5);
@mixin btn(){
  background-color: $primary-color;
  color: #feefdc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(30, 31, 14, 0.5);
}
.addPerson{
    width: 500px;
    margin: 0 auto;
}
.person_input{
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
}
.person_input [type="text"] {
    padding: 10px;
    width: 400px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;


}
.greet {
    font-size: 24px;
    margin-bottom: 20px;
}
.personList{
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
}
.personList [type="text"]{
    padding: 10px;
}
.personList button{
    background-color: rgba(10, 31, 46, 0.47);
}



button {
   @include btn();
    height: 40px;
    width: 80px;
}
</style>