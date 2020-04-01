import Router, { Router as RouterType } from "next/router";
import { NextPageContextApollo } from "../typings/types";
// import { NextContext } from "typings/NextContext";
// import { MyContext } from "../../types/types";

interface RedirectOptions {
  asPath?: RouterType["asPath"];
  originalTarget?: string;
  newTarget?: string;
}

export default (
  context: NextPageContextApollo,
  target: string,
  opts: RedirectOptions
) => {
  let pathname;
  let asPath;

  if (opts.originalTarget) {
    pathname = opts.originalTarget;
  } else {
    pathname = target;
    asPath = opts.asPath;
  }
  if (context && context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: pathname });
    context.res.end();
  } else {
    // const pathnameIncludesLogin = pathname.includes("/login");
    // In the browser, we just pretend like this never even happened ;)
    Router.replace(pathname, asPath);
  }
};

export function redirectOnError(ctx: NextPageContextApollo) {
  typeof window !== "undefined"
    ? Router.push("/login")
    : ctx.res?.writeHead(302, { Location: "/login" }).end();
}
