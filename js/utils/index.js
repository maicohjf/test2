export default {
  isPhoneNumValid: (phone) => {
    return phone && /^1\d{10}$/.test(phone);
  },
  jsonToQueryString: (json) => {
    let str = [];
    for (let p in json)
      if (json.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
      }
    return str.join("&");
  }
}