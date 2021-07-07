import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CustomerSchema } from './schemas/customer.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/customer-app', { useNewUrlParser: true }),
  ],
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class AppModule {}
