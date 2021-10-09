export type HourlyWeatherForCityResponseType = {
    list: {
        dt: number;
        main: {
            temp: number;
            feels_like: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            humidity: number;
            sea_level: number;
            grnd_level: number;
            temp_kf: number;
        }
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[]
        clouds: {
            all: number;
        }
        wind: {
            speed: number;
            deg: number;
            gust: number;
        }
        visibility: number;
        pop: number;
        dt_txt: string;
        sys: {
            pod: string;
        }
    }[],
    city: {
        id: number;
        name: string;
        coord: {
            lat: number;
            lon: number;
        }
        country: string;
        timezone: number;
        sunrise: number;
        sunset: number;
    }
}