import wixLocation from 'wix-location';

export const addParam = (param) => {
    wixLocation.queryParams.add(param);
}
