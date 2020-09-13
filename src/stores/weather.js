import * as axios from "axios";
import { action, observable } from "mobx";

class WeatherStore {
  @observable weather;
  @observable city;
  @observable load;
  @observable error;
  constructor() {
    this.weather = {
      main: { temp: "" },
      wind: { speed: "" },
      weather: [{ icon: "", description: "" }],
    };
    this.city = "Москва";
    this.load = true;
    this.error = "";
  }
  @action fetch = async () => {
    this.setLoad(true);
    const result = await axios(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        this.city +
        "&units=metric&lang=ru&appid=0ecbdb7fcd16e4c89e6f495a7cc83684"
    );

    return result.data;
  };

  @action weatherDate() {
    this.fetch().then((r) => (this.weather = r))
        .catch(()=>this.setError("Наташ, мы уронили интернет :("));
    this.setLoad(false);
  }

  @action setCity(data) {
    this.city = data;
  }
  @action setLoad(bool) {
    this.load = bool;
  }
  @action setError(str) {
    this.error = str;
  }
}

const weatherStore = new WeatherStore();

export default weatherStore;
