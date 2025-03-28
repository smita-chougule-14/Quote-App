import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quote: string;

  @Column()
  quoteAuthor: string;

  @Column({ type: 'timestamp', array: true, default: () => 'ARRAY[]::timestamp[]' })
  scheduledDates: Date[];
  
}
