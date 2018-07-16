import Cookies from 'js-cookie'
import storage from 'good-storage'

const TokenKey = 'Sh-Load-Web-Token'

const NameKey = 'Sh-Load-Web-Name'

const InfoKey = 'Sh-Load-Web-Info'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getName() {
  return Cookies.get(NameKey)
}

export function setName(name) {
  return Cookies.set(NameKey, name)
}

export function removeName() {
  return Cookies.remove(NameKey)
}

export function getInfo() {
  return storage.get(InfoKey)
}

export function setInfo(info) {
  return storage.set(InfoKey, info)
}

export function removeInfo() {
  return storage.remove(InfoKey)
}
