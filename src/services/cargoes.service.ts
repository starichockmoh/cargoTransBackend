import { Injectable } from '@nestjs/common';
import { ICargo } from 'src/interfaces/cargo.interface';

@Injectable()
export class CargoesService {
  private readonly cargoes: Array<ICargo> = [];

  create(cat: ICargo) {
    this.cargoes.push(cat);
  }

  findAll(): Array<ICargo> {
    return this.cargoes;
  }

  findOne(id: number): ICargo {
    return this.cargoes[id];
  }

  update(id: number, cat: ICargo): ICargo {
    this.cargoes[id] = cat;
    return this.cargoes[id];
  }

  remove(id: number): Array<ICargo> {
    this.cargoes.splice(id);
    return this.cargoes;
  }
}
