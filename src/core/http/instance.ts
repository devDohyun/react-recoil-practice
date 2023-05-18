import axios from 'axios'

const instance = axios.create()

export const http = {
  get: <Response = unknown>(url: string) => instance.get<Response>(url).then((res) => res.data),
  post: <Response = unknown, Request = any>(url: string, data?: Request) => instance.post<Response>(url, { data }).then((res) => res.data),
  put: <Response = unknown, Request = any>(url: string, data?: Request) => instance.put<Response>(url, { data }).then((res) => res.data),
  delete: <Response = unknown, Request = any>(url: string, data?: Request) => instance.delete<Response>(url, { data }).then((res) => res.data),
}
