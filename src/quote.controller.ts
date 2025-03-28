import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { Quote } from './quote.entity';

@Controller('quotes')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  findAll(): Promise<Quote[]> {
    return this.quoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Quote|null> {
    return this.quoteService.findOne(id);
  }

  @Post()
  create(@Body() quote: Partial<Quote>): Promise<Quote> {
    return this.quoteService.create(quote);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() quote: Partial<Quote>): Promise<Quote|null> {
    return this.quoteService.update(id, quote);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.quoteService.delete(id);
  }
}
