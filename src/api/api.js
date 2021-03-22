import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '105856af-551e-46af-9fb4-81d82cc31e13',
  },
});

export const usersAPI = {

  getUsers(currentPage = 1, pageSize = 10) {
  return instance
    .get(
      `users?page=${currentPage}&count=${pageSize}`
    )
    .then((res) => {
      return res.data;
    });
  },

  unfollowUser(id) {
    return instance.delete(
      `follow/${id}`,
    ).then(res => {
      return res.data
    })
  },

  followUser(id) {
    return instance.post(
      `follow/${id}`,
    ).then(res => {
      return res.data
    })
  }
}

export const headerAPI = {
  getMe() {
    return instance
    .get(`auth/me`)
    .then(res => {
      return res.data;
    })
  }
}

export const profileAPI = {
  getProfile(userId) {
       return instance.get(
         `profile/${userId}`
       )
       .then(res => {
         return res.data;
       })
  },

  getStatus(userId) {
    return instance.get(
      `/profile/status/${userId}`
    )
    .then(res => {
      return res.data
    })
  },

  updateStatus(status) {
    return instance
      .put('/profile/status', {
        status: status,
      })
      .then((res) => {
        return res.data;
      });
  },
  
}