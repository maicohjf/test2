import Realm from 'realm';
import { AreaSchema, CitySchema, ProvinceSchema, LocationVersionSchema } from '../models/area';
import { DictSchema } from '../models/dict';

const saveProvince = (realm, province) => {
  try {
    realm.write(() => {
      realm.create('Province', {
        name: province.province_name,
        id: province.id,
        pinyin: province.pinyin,
      });
    });
  } catch (e) {
    console.log(e);
    console.log("Error on creation Province");
  }
};

const saveCity = (realm, province, city) => {
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
    console.log(e);
    console.log("Error on creation City");
  }
};

const saveArea = (realm, city, area) => {
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
    console.log(e);
    console.log("Error on creation Area");
  }
};

const saveLocation = (realm, location) => {
  if (location && location.length > 0) {
    location.forEach(province => {
      saveProvince(realm, province);
      if (province && province.cities.length > 0) {
        province.cities.forEach(city => {
          saveCity(realm, province, city);
          if (city && city.areas.length > 0) {
            city.areas.forEach(area => {
              saveArea(realm, city, area);
            })
          }
        });
      }
    });
  }
};

const saveAll = (realm, data) => {
  const curVersion = data.version;
  let preVersion = null;
  const versions = realm.objects('LocationVersion');
  if (versions && versions.length > 0) {
    preVersion = versions[versions.length - 1].version;
    console.log(`preVersion is ${preVersion}`);
  }
  if (preVersion === null || curVersion > preVersion) {
    console.log(`begion to write to realm`);
    try {
      realm.write(() => {
        realm.deleteAll();
        realm.create('LocationVersion', {
          version: data.version,
        });
      });
    } catch (e) {
      console.log(e);
    }
    const address = data.list.address;
    saveLocation(realm, address);
  } else {
    console.log(`location data current version ${curVersion}, no need to update.`)
  }
};

let locationRealm;
let dictRealm;

const getLocationRealm = (callback) => {
  if (!locationRealm) {
    Realm.open({
      schema: [ProvinceSchema, CitySchema, AreaSchema, LocationVersionSchema]
    })
    .then(realm => {
      locationRealm = realm;
      callback(realm);
    })
  } else {
    callback(locationRealm);
  }
};

const getDictRealm = (callback) => {
  if (!dictRealm) {
    Realm.open({
      schema: [DictSchema]
    })
    .then(realm => {
      dictRealm = realm;
      callback(realm);
    })
  } else {
    callback(dictRealm);
  }
};

export default {
  writeDict: (data) => {
    getLocationRealm((realm) => {
      console.log(realm.path);
      // saveAll(locationRealm, data);
    });
  },
  readDict: (item, callback) => {
    getDictRealm((realm) => {
      const dicts = realm.objects('Dict').filtered('name == $0', item);
      let dict;
      if (dicts.length > 0) {
        dict = dicts[0];
      }
      callback(dict);
    });
  },
  readLocation: (callback) => {
    if (!locationRealm) {
      Realm.open({
        schema: [ProvinceSchema, CitySchema, AreaSchema, LocationVersionSchema]
      })
      .then(realm => {
        locationRealm = realm;
        const cities = realm.objects('City');
        console.log(cities.length);
        callback(cities);
      })
    } else {
      const cities = locationRealm.objects('City');
      console.log(cities.length);
      callback(cities);
    }
  },
  readCities: (callback) => {
    getLocationRealm((realm) => {
      const cities = locationRealm.objects('City').sorted('pinyin');
      const formatedCities = {};
      cities.forEach(city => {
        if (city.pinyin && city.name) {
          const py = city.pinyin.trim();
          if (py) {
            const frist = py[0].toUpperCase();
            if (!formatedCities[frist]) {
              formatedCities[frist] = [];
            }
            formatedCities[frist].push({
              name: city.name,
              id: city.id,
            });
          }
        }
      });
      const allCities = [];
      Object.keys(formatedCities).forEach(key => {
        allCities.push({
          title: key,
          value: formatedCities[key],
        });
      })
      callback(allCities);
    });
  },
  writeLocation: (data) => {
    getLocationRealm((realm) => {
      console.log(realm.path);
      saveAll(locationRealm, data);
    });
  },
}