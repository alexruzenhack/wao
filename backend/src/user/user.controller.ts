import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
    const result = await req.context.user.create({
        data: {
            ...req.body,
        },
    });
    res.status(201).json(result);
};

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await req.context.user.findUnique({
        where: {
            id,
        },
    });
    res.json(result);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params
  const user = await req.context.user.update({
    where: { id },
    data: { ...req.body},
  });
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params
  await req.context.user.delete({
    where: {
      id,
    },
  })
  res.status(204).send('No Content');
};