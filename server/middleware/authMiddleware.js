import jwt from "jsonwebtoken";

export function protect(request, response, next) {
  const authorization = request.headers.authorization;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    response.status(401);
    return next(new Error("Not authorized"));
  }

  try {
    const token = authorization.split(" ")[1];
    request.user = jwt.verify(token, process.env.JWT_SECRET || "dev-secret");
    return next();
  } catch (error) {
    response.status(401);
    return next(new Error("Token invalid"));
  }
}
