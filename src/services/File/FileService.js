import BaseService from '../BaseService';

const download = (url) => {
  return BaseService.get(url, {
    responseType: 'blob'
  })
}

export default {
  download
};
