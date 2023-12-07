import { Injectable } from '@nestjs/common';
import { IPickupPoint } from 'src/interfaces/pickup_point.interface';

@Injectable()
export class PickupPointsService {
  private readonly pickupPoints: Array<IPickupPoint> = [];

  create(cat: IPickupPoint) {
    this.pickupPoints.push(cat);
  }

  findAll(): Array<IPickupPoint> {
    return this.pickupPoints;
  }

  findOne(id: number): IPickupPoint {
    return this.pickupPoints[id];
  }

  update(id: number, cat: IPickupPoint): IPickupPoint {
    this.pickupPoints[id] = cat;
    return this.pickupPoints[id];
  }

  remove(id: number): Array<IPickupPoint> {
    this.pickupPoints.splice(id);
    return this.pickupPoints;
  }
}
