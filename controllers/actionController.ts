import { Request, Response } from 'express';
import Action from '../models/Action';
import { Op } from 'sequelize';

export const createAction = async (req: Request, res: Response) => {
  try {
    const action = await Action.create(req.body);
    console.log('ACTION', action)
    res.status(201).json(action);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getActions = async (req: Request, res: Response) => {
    try {
      const { shop_id, plu, dateFrom, dateTo, action } = req.query;
      const where: { shopId?: string; plu?: string; date?: any; action?: string } = {};
        
      if (typeof shop_id === 'string') where.shopId = shop_id;
        
      if (typeof plu === 'string') where.plu = plu;
        
      if (typeof dateFrom === 'string') where.date = { [Op.gte]: new Date(dateFrom) };
        
      if (typeof dateTo === 'string') where.date = { ...where.date, [Op.lte]: new Date(dateTo) };
        
      if (typeof action === 'string') where.action = action;

  
      const actions = await Action.findAll({ where });
      res.status(200).json(actions);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };