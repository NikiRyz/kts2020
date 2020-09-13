import { action, observable } from "mobx";

class ClothesStore {
    @observable sex;

    constructor() {
        this.sex='female'
    }

    @action setSex(bool) {
        if(bool===true ){
            this.sex = 'female'
        }else {this.sex = 'male'}

    }
}

const clothesStore = new ClothesStore();

export default clothesStore;
