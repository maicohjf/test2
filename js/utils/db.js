// const Realm = require('realm');
import { Realm } from 'realm';
import { AreaSchema, CitySchema, ProvinceSchema} from '../models/area';

export default {
  writeArea: (area) => {
    Realm.open({schema: [ProvinceSchema, CitySchema, AreaSchema]})
    .then(realm => {
      if (area && area.length > 0) {
        area.forEach(province => {
          try {
            realm.write(() => {
              realm.create('Province', {
                name: province.province_name,
                id: province.id,
                pinyin: province.pinyin,
              });
            });
          } catch (e) {
            console.log("Error on creation");
          }
          if (province && province.cities.length > 0) {
            province.cities.forEach(city => {
              try {
                realm.write(() => {
                  realm.create('City', {
                    name: city.city_name,
                    id: city.id,
                    pinyin: city.pinyin,
                    province_id: province.id,
                  });
                });
              } catch (e) {
                console.log("Error on creation");
              }
              if (city && city.areas.length > 0) {
                city.areas.forEach(area => {
                  try {
                    realm.write(() => {
                      realm.create('Area', {
                        name: area.area_name,
                        id: area.id,
                        pinyin: area.pinyin,
                        city_id: city.id,
                      });
                    });
                  } catch (e) {
                    console.log("Error on creation");
                  }
                })
              }
            });
          }
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
  },
}