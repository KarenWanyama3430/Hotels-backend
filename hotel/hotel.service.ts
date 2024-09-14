import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hotel } from './hotel.entity';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>,
  ) {}

  findAll(): Promise<Hotel[]> {
    return this.hotelRepository.find();
  }

  findOne(id: number): Promise<Hotel> {
    return this.hotelRepository.findOne(id);
  }

  create(hotel: Hotel): Promise<Hotel> {
    return this.hotelRepository.save(hotel);
  }

  async update(id: number, hotel: Hotel): Promise<void> {
    await this.hotelRepository.update(id, hotel);
  }

  async delete(id: number): Promise<void> {
    await this.hotelRepository.delete(id);
  }
}
