import { createStore } from 'vuex';
import db from './firebase.js';
import { collection, getDocs } from 'firebase/firestore';

const store = createStore({
  state: {
    utilisateurs: [],
  },
mutations: {
  setUtilisateursData(state, data) {
    state.utilisateurs = data;
  },
},
actions: {
  async fetchUtilisateursData({ commit }) {
    try {
      const querySnapshot = await getDocs(collection(db, "utilisateurs"));
      const data = querySnapshot.docs.map(doc => doc.data());
      commit('setUtilisateursData', data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  },
},
});

export default store;