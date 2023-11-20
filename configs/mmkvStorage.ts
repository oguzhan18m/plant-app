import {MMKV} from 'react-native-mmkv';

export const KEY_AUTH = '@auth';
export const KEY_SESSION = '@session';

export const appStorage = new MMKV({
  id: 'budd-storage',
});

export const setStorage = (key: string, value: any) => {
  appStorage.set(key, value);
};

export const getStorage = (key: string) => {
  return appStorage.getString(key);
};

export const removeFromStorage = (key: string) => {
  return appStorage.delete(key);
};
