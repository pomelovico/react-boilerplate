import request from "@/request/baseRequest";

function getInfo(param: any) {
  return request.post<{ content: any }>(`your_api`, param);
}

export { getInfo };
