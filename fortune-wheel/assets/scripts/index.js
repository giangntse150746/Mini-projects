// Global vars
const
  originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  originalNum = "0123456789"

var _defaultPath = '/wheel',
  _priceGotted = localStorage.getItem('gvt'),
  _path = location.pathname,
  globalVariablesTemplate = {
    device: '',
    lastVisit: new Date(),
    data: {
      hasPrize: false,
      val: '0',
    },
  }

//  Global functions
const rot13 = {
  encode: (text, step = 13, key = '0') => {
    return text.replace(/[a-zA-Z]/g, letter => originalAlpha[
      originalAlpha.indexOf(letter) + step >= originalAlpha.length
        ? originalAlpha.indexOf(letter) + step - originalAlpha.length
        : step
    ]);
  },
  decode: (text, step = 13, key = '0') => {
    return text.replace(/[a-zA-Z]/g, letter => originalAlpha[
      originalAlpha.indexOf(letter) - step < 0
        ? originalAlpha.indexOf(letter) - step + originalAlpha.length
        : step
    ]);
  },
}
const useIO = {
  saveInfo: (data, storageType = 'all', key = 'prz') => {
    globalVariablesTemplate.data = data;
    switch (storageType) {
      case 'local':
        localStorage.setItem(key, data)
        break;
      case 'session':
        sessionStorage.setItem(key, data)
        break;
      case 'firebase':

        break;
      default:
        localStorage.setItem(key, data)
        sessionStorage.setItem(key, data)

        break;
    }
  },
  getInfo: (storageType, key = 'prz') => {
    const data = { hasPrize: false, val: '0' };
    switch (storageType) {
      case 'local':
        data = localStorage.getItem(key)
        !!data && (globalVariablesTemplate.data = { ...data })
        break;
      case 'session':
        data = sessionStorage.getItem(key)
        !!data && (globalVariablesTemplate.data = { ...data })
        break;
      case 'firebase':
        break;
      default:
        data = sessionStorage.getItem(key) ?? localStorage.getItem(key)
        !!data && (globalVariablesTemplate.data = { ...data })
        break;
    }
    return data
  }
}