import { publicService } from '../../service/axiosConfig.js';
import { userAddress } from '../../service/address.js';

export const loginServices = {
  //* 실제로 post 되는 지점은 여기
  signUp: ({ email, password, nickname }) =>
    publicService.post(userAddress.signUp, {
      email,
      password,
      nickname,
    }),
};
