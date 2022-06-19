import { createEffect, createEvent, createStore } from "effector";
import { fetcher } from "../../shared/api/fetcher";
import { AnyObject } from "../../shared/libs/any";

interface UserModelProps {
  data: AnyObject;
  isAuth: boolean;
}

export const createUserModel = () => {
  const $user = createStore<UserModelProps>({ data: {}, isAuth: false });
  const setUser = createEvent<UserModelProps>();

  const authFx = createEffect(async () => {
    return (
      await fetcher("/auth/check", {
        method: "POST",
      })
    ).json();
  });

  const logoutFx = createEffect(async () => {
    return (
      await fetcher("/auth/logout", {
        method: "POST",
      })
    ).json();
  });

  authFx();

  const $loading = createStore<boolean>(true);

  $loading.on(authFx.pending, (_, payload) => payload);

  $user.on(authFx.done, (_, payload) => {
    if (payload.result.success) {
      return { data: payload.result.data, isAuth: true };
    }

    return { data: {}, isAuth: false };
  });

  $user.on(logoutFx.done, (store, payload) => {
    console.log(payload);
    if (payload.result.success) {
      return { data: {}, isAuth: false };
    }

    return store;
  });

  $user.on(setUser, (_, payload) => {
    return { data: payload, isAuth: true };
  });

  const logout = () => logoutFx();

  return {
    $user,
    $loading,
    setUser,
    logout,
  };
};

export const user = createUserModel();
