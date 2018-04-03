export const CitySchema = {
  name: 'City',
  properties: {
    name: 'string',
    province_id: 'int',
    pinyin: 'string',
    id: 'int',
  }
};

export const ProvinceSchema = {
  name: 'Province',
  properties: {
    name: 'string',
    id: 'int',
    pinyin: 'string'
  }
};

export const AreaSchema = {
  name: 'Area',
  properties: {
    name: 'string',
    city_id: 'int',
    pinyin: 'string',
    id: 'int',
  }
};

export const LocationVersionSchema = {
  name: 'LocationVersion',
  properties: {
    version: 'int',
  }
}