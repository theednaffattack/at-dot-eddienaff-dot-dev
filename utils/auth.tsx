import { useEffect } from "react";
import Router from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";
import { NextContext } from "../typings/types";

interface LoginProps {
  token: string;
}

export const login = ({ token }: LoginProps) => {
  cookie.set("token", token, { expires: 1 });
  Router.push("/user/profile");
};

export const auth = (ctx: NextContext) => {
  const { token } = nextCookie(ctx);

  // If there's no token, it means the user is not logged in.
  if (!token && ctx.res) {
    if (typeof window === "undefined") {
      ctx.res.writeHead(302, { Location: "/login" });
      ctx.res.end();
    } else {
      Router.push("/login");
    }
  }

  return token;
};

export async function logout(): Promise<void> {
  cookie.remove("token");

  // to support logging out from all windows
  window.localStorage.setItem("logout", Date.now().toString());
  Router.push("/login");
}

export const withAuthSync = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const syncLogout = (event: any) => {
      if (event.key === "logout") {
        console.log("logged out from storage!");
        Router.push("/login");
      }
    };

    useEffect(() => {
      window.addEventListener("storage", syncLogout);

      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async (ctx: NextContext) => {
    const token = auth(ctx);

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps, token };
  };

  return Wrapper;
};
