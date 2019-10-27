import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store =new Vuex.Store({
  state:{
    storeList:[],
    moreList:[],
    vaList:[]
  },
  mutations:{
    initList(state,val){
      // state.storeList=val;
      localStorage.setItem('list',JSON.stringify(val));
      state.storeList=JSON.parse(localStorage.getItem('list'));
    },
    getMoreList(state,val){
      state.moreList=val
    },
    // valList(state,val){
    //   console.log(val);
    //   state.vaList=val
    // }
  }
});

export default store
