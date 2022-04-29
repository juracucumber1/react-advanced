import {Moment} from "moment";

export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? `@${date.getMonth() + 1}` : date.getMonth() + 1
    const day = date.getDay() < 10 ? `@${date.getDay()}` : date.getDay()
    return `${year}.${month}.${day}`
}