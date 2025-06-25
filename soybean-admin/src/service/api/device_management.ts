import { request } from '../request';

export function fetchDeviceList(params: any) {
  return request<Api.DeviceManagement.DeviceList>({ url: '/device/list', params });
}
