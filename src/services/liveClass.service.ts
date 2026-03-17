/* eslint-disable @typescript-eslint/no-explicit-any */
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const liveClassService = {
  async getActiveLiveClass() {
    const res = await fetch(`${API_URL}/live-class/active`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch active live class");
    }

    return res.json();
  },

  async getAllLiveClasses() {
    const res = await fetch(`${API_URL}/live-class`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch live classes");
    }

    return res.json();
  },

  async createLiveClass(payload: any) {
    const res = await fetch(`${API_URL}/live-class`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Failed to create live class");
    }

    return res.json();
  },

  async updateLiveClass(id: string, payload: any) {
    const res = await fetch(`${API_URL}/live-class/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Failed to update live class");
    }

    return res.json();
  },

  async deleteLiveClass(id: string) {
    const res = await fetch(`${API_URL}/live-class/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete live class");
    }

    return res.json();
  },
};
