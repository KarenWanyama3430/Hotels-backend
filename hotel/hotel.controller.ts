import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.entity';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get()
  findAll() {
    return this.hotelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.hotelService.findOne(id);
  }

  @Post()
  create(@Body() hotel: Hotel) {
    return this.hotelService.create(hotel);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() hotel: Hotel) {
    return this.hotelService.update(id, hotel);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.hotelService.delete(id);
  }
}
