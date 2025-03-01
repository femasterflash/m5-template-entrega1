import { ZodError } from "zod";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { JsonWebTokenError } from "jsonwebtoken";

class HandleErrorMiddleware {
  public static execute = (
    error: Error,
    _: Request,
    res: Response,
    __: NextFunction
  ): Response => {
    if (error instanceof AppError) {
      return res.status(error.status).json({ message: error.message });
    }

    if (error instanceof ZodError) {
      return res.status(400).json({ errors: error.errors });
    }

    if (error instanceof JsonWebTokenError) {
      return res.status(401).json({ message: error.message });
    }

    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  };
}

export const handleErrors = HandleErrorMiddleware.execute;
