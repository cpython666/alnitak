import request from '@/utils/request';
import { baseURL } from '@/utils/request';
import { useAsyncData } from 'nuxt/app';

// 上传视频信息
export const uploadVideoInfoAPI = (uploadVideo: UploadVideoType) => {
  return request.post('v1/video/uploadVideoInfo', uploadVideo);
}

// 获取上传视频信息
export const getVideoStatusAPI = (vid: number) => {
  return request.get(`v1/video/getVideoStatus?vid=${vid}`);
}

// 提交审核
export const submitReviewAPI = (id: number) => {
  return request.post('v1/video/submitReview', { id });
}

// 编辑视频
export const editVideoAPI = (editVideo: EditVideoType) => {
  return request.put("v1/video/editVideoInfo", editVideo);
}

// 获取所有视频列表
export const getAllVideoAPI = () => {
  return request.get("v1/video/getAllVideoList");
}

// 删除视频
export const deleteVideoAPI = (id: number) => {
  return request.delete(`v1/video/deleteVideo/${id}`);
}

// 提交审核
export const getUploadVideoAPI = (page: number, pageSize: number) => {
  return request.get(`v1/video/getUploadVideo?page=${page}&pageSize=${pageSize}`);
}

// 获取视频信息
export const asyncGetVideoInfoAPI = async (videoId: number | string) => {
  return await useAsyncData(() => $fetch(`${baseURL}/api/v1/video/getVideoById?vid=${videoId}`));
}

// 获取视频支持的分辨率
export const getResourceQualityApi = async (resourceId: number | string) => {
  return request.get(`v1/video/getResourceQuality?resourceId=${resourceId}`)
}

// 获取视频文件URL
export const getVideoFileUrl = (resourceId: number, quality: string) => {
  return `${baseURL}/api/v1/video/getVideoFile?resourceId=${resourceId}&quality=${quality}`;
}

