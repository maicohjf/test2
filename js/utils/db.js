import Realm from 'realm';
import { AreaSchema, CitySchema, ProvinceSchema, LocationVersionSchema } from '../models/area';

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

export default {
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
  writeLocation: (data) => {
    if (!locationRealm) {
      Realm.open({
        schema: [ProvinceSchema, CitySchema, AreaSchema, LocationVersionSchema]
      })
      .then(realm => {
        locationRealm = realm;
        console.log(realm.path);
        saveAll(realm, data);
      })
    } else {
      console.log(realm.path);
      saveAll(locationRealm, data);
    }
  },
}