export default {
  isPhoneNumValid: (phone) => {
    return phone && /^1\d{10}$/.test(phone);
  }
}