import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  // HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  // Redirect,
  // Req,
  // Res,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
// import { Request, Response } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // @Get()
  // @Redirect('https://nestjs.com', 301)
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('Done');
  //   return 'All products';
  // }

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  // @Get()
  // async getAll() {
  //   try {
  //     await Promise.reject('Something went wrong');
  //   } catch (error) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.FORBIDDEN,
  //         error: 'This is a custom message',
  //       },
  //       HttpStatus.FORBIDDEN,
  //       {
  //         cause: error,
  //       },
  //     );
  //   }
  // }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto) {
    // return `Title: ${createProductDto.title} Price: ${createProductDto.price}`;
    return this.productService.create(createProductDto);
  }

  @Delete()
  delete(@Param('id') id: string): string {
    return 'Delete' + id;
  }

  @Put()
  update(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ): string {
    return `Update ${id} + ${updateProductDto.title}`;
  }

  @Patch()
  updatePartial() {}
}
