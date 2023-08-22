import { createStore } from "vuex";

export default createStore({
  state: {
    people: [],
    items: [],
    totalSum: 0,

  },

  getters: {
    getPeople(state) {
      return state.people;
    },
    getPeopleLength(state) {
      return state.people.length;
    },
    getItemsByPerson: (state) => (person) => {
      return state.items.filter((item) => item.people.includes(person.name));
    },
    getItems(state) {
      return state.items;
    },


  },

  mutations: {
    addPerson(state, person) {
      state.people.push(person);
    },
    removePerson(state, person) {
      const index = state.people.indexOf(person);
      if (index !== -1) {
        state.people.splice(index, 1);
      }
    },
    addItem(state, item) {
      state.items.push(item);
      state.totalSum += item.cost;
    },


  },
});
