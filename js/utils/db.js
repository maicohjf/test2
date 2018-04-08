import Realm from 'realm';
import { AreaSchema, CitySchema, ProvinceSchema, LocationVersionSchema } from '../models/area';
import { DictSchema, DictVersionSchema } from '../models/dict';

const saveProvince = (realm, province) => {
  realm.create('Province', {
    name: province.province_name,
    id: province.id,
    pinyin: province.pinyin,
  });
};

const saveCity = (realm, province, city) => {
  realm.create('City', {
    name: city.city_name,
    id: city.id,
    pinyin: city.pinyin,
    province_id: province.id,
  });
};

const saveArea = (realm, city, area) => {
  realm.create('Area', {
    name: area.area_name,
    id: area.id,
    pinyin: area.pinyin,
    city_id: city.id,
  });
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

const deleteAllLocation = (realm) => {
  let allVersion = realm.objects('LocationVersion');
  realm.delete(allVersion);
  let allProvince = realm.objects('Province');
  realm.delete(allProvince);
  let allCity = realm.objects('City');
  realm.delete(allCity);
  let allArea = realm.objects('Area');
  realm.delete(allArea);
}

const saveAll = (realm, data) => {
  const curVersion = data.version;
  let preVersion = null;
  const versions = realm.objects('LocationVersion');
  if (versions && versions.length > 0) {
    preVersion = versions[versions.length - 1].version;
    console.log(`location preVersion is ${preVersion}`);
  }
  if (preVersion === null || curVersion > preVersion) {
    console.log(`location: begion to write to realm`);
    try {
      const address = data.list.address;
      realm.write(() => {
        deleteAllLocation(realm);
        realm.create('LocationVersion', {
          version: data.version,
        });
        saveLocation(realm, address);
      });
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log(`location data current version ${curVersion}, no need to update.`)
  }
};

const saveDictItem = (realm, dict) => {
  if (dict) {
    const keys = Object.keys(dict);
    if (keys && keys.length > 0) {
      keys.forEach(key => {
        const options = dict[key];
        if (options && options.length > 0) {
          options.forEach(option => {
            realm.create('Dict', {
              module: key,
              usage: option.module,
              code: option.code,
              val: option.val,
            });
          });
        }
      });
    }
  }
};

const deleteAllDict = (realm) => {
  let allVersion = realm.objects('DictVersion');
  realm.delete(allVersion);
  let allDict = realm.objects('Dict');
  realm.delete(allDict);
}

const saveDict = (realm, data) => {
  const curVersion = data.version;
  let preVersion = null;
  const versions = realm.objects('DictVersion');
  if (versions && versions.length > 0) {
    preVersion = versions[versions.length - 1].version;
    console.log(`dict preVersion is ${preVersion}`);
  }
  if (preVersion === null || curVersion > preVersion) {
    console.log(`dict: begion to write to realm`);
    try {
      const dict = data.dict;
      realm.write(() => {
        deleteAllDict(realm);
        realm.create('DictVersion', {
          version: data.version,
        });
        saveDictItem(realm, dict);
      });
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log(`dict data current version ${curVersion}, no need to update.`)
  }
};

let currentRealm;

const getRealm = (callback) => {
  if (!currentRealm) {
    Realm.open({
      schema: [ProvinceSchema, CitySchema, AreaSchema, LocationVersionSchema, DictSchema, DictVersionSchema]
    })
    .then(realm => {
      currentRealm = realm;
      callback(realm);
    })
  } else {
    callback(currentRealm);
  }
};

export default {
  writeDict: (data) => {
    getRealm((realm) => {
      console.log(realm.path);
      saveDict(realm, data);
    });
  },
  readDict: (item, callback) => {
    getRealm((realm) => {
      const dicts = realm.objects('Dict').filtered('module == $0', item);
      callback(dicts);
    });
  },
  readLocation: (callback) => {
    if (!currentRealm) {
      Realm.open({
        schema: [ProvinceSchema, CitySchema, AreaSchema, LocationVersionSchema]
      })
      .then(realm => {
        currentRealm = realm;
        const cities = realm.objects('City');
        console.log(cities.length);
        callback(cities);
      })
    } else {
      const cities = currentRealm.objects('City');
      console.log(cities.length);
      callback(cities);
    }
  },
  readCities: (callback) => {
    return new Promise((resolve, reject) => {
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
        const sections = Object.keys(formatedCities);
        sections.forEach(key => {
          allCities.push({
            title: key,
            data: formatedCities[key],
          });
        });
        resolve({cities: allCities, sections: sections});
      });
    })
  },
  writeLocation: (data) => {
    getRealm((realm) => {
      console.log(realm.path);
      saveAll(currentRealm, data);
    });
  },
}