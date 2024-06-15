import { ILocalStorageItem } from "@/api/types/weather-details";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/helpers/local-storage";

export const historyCityLogic = (key: string, data: ILocalStorageItem) => {
  const list = getLocalStorageItem<ILocalStorageItem[]>(key);
  if (list) {
    if (
      !list.some(
        (item) =>
          item.name === data.name && item.description === data.description
      )
    ) {
      if (list.length < 7) {
        list.push(data);
        setLocalStorageItem<ILocalStorageItem[]>(key, list);
      } else {
        list.shift();
        list.push(data);
        setLocalStorageItem<ILocalStorageItem[]>(key, list);
      }
    }
  } else {
    setLocalStorageItem<ILocalStorageItem[]>(key, [data]);
  }
};
