import * as axios from "axios";
import {action, observable} from "mobx";



class WeatherStore {
     @observable weather;
constructor() {
        this.weather = {main:{temp:''},wind:{speed:''},weather:[{icon:'',description:''}]}
    this.weatherDate()
}
    @action fetch = async () => {
        const result = await axios("http://api.openweathermap.org/data/2.5/weather?q=москва&units=metric&lang=ru&appid=0ecbdb7fcd16e4c89e6f495a7cc83684")
        return result.data}

    @action weatherDate(){
    this.fetch().then(r =>   this.weather=r)

}

}

const weatherStore = new WeatherStore();

export default weatherStore;
