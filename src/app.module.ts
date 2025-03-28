import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './quote.entity';
import { QuoteService } from './quote.service';
import { QuoteController } from './quote.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgress',
      database: 'quotesdb',
      entities: [Quote],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Quote]),
  ],
  controllers: [QuoteController],
  providers: [QuoteService],
})
export class AppModule {}
