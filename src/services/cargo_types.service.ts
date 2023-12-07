import { Injectable } from '@nestjs/common';
import { ICargoType } from 'src/interfaces/cargo_type.interface';

@Injectable()
export class CargoTypesService {
  private readonly cargo_types: Array<ICargoType> = [];

  create(cat: ICargoType) {
    this.cargo_types.push(cat);
  }

  findAll(): Array<ICargoType> {
    return this.cargo_types;
  }

  findOne(id: number): ICargoType {
    return this.cargo_types[id];
  }

  update(id: number, cat: ICargoType): ICargoType {
    this.cargo_types[id] = cat;
    return this.cargo_types[id];
  }

  remove(id: number): Array<ICargoType> {
    this.cargo_types.splice(id);
    return this.cargo_types;
  }
}
