/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { liveClassService } from "@/services/liveClass.service";

export const getActiveLiveClassAction = async () => {
  const res = await liveClassService.getActiveLiveClass();
  return res.data;
};

export const getAllLiveClassesAction = async () => {
  const res = await liveClassService.getAllLiveClasses();
  return res.data;
};

export const createLiveClassAction = async (payload: any) => {
  const res = await liveClassService.createLiveClass(payload);
  return res;
};

export const updateLiveClassAction = async (id: string, payload: any) => {
  const res = await liveClassService.updateLiveClass(id, payload);
  return res;
};

export const deleteLiveClassAction = async (id: string) => {
  const res = await liveClassService.deleteLiveClass(id);
  return res;
};
