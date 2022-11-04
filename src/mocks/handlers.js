import { rest } from "msw";

export const handlers = [
  rest.post("/auth/login", (req, res, ctx) => {
    return res(ctx.status(200), ctx.text("TokenHere123"));
  }),
  rest.post("/users", (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        email: "",
        username: "",
        user_id: 0,
      })
    );
  }),
];
