import { Request, Response } from "express";

export let welcome = (req: Request, res: Response) => {
    res.json("Started!");
  };