enum StorageSceneKey {
  DEVICE = 'storage-device-uuid',
  USER = 'storage-user',
}

function getItem<T = any>(key: string): T {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) ?? null : null
}
function setItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value))
}
function removeItem(key: string) {
  localStorage.removeItem(key)
}

export { getItem, setItem, removeItem, StorageSceneKey }
