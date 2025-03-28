import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from './quote.entity';

@Injectable()
export class QuoteService {
  constructor(
    @InjectRepository(Quote)
    private quoteRepository: Repository<Quote>,
  ) {}

  findAll(): Promise<Quote[]> {
    return this.quoteRepository.find();
  }

  findOne(id: number): Promise<Quote| null> {
    return this.quoteRepository.findOneBy({ id });
  }

  create(quote: Partial<Quote>): Promise<Quote> {
    return this.quoteRepository.save(quote);
  }

  async update(id: number, quote: Partial<Quote>): Promise<Quote|null> {
    await this.quoteRepository.update(id, quote);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.quoteRepository.delete(id);
  }
}
