import { Request, Response, NextFunction, RequestHandler } from 'express';

export const getPropertyDetails = (req: Request, res: Response, next: NextFunction) => {
    res.json({
        propertyId: req.params.propid,
        details: {
            location: "chennai",
            landmark: "marina"
        }
    })
}