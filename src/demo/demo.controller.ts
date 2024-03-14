import { Body, Controller,Delete,Get, HttpCode, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { query } from 'express';
import { get } from 'http';

@Controller('demo')
export class DemoController {
    @Get('/findAll')
    findAll() : string{
        return "This Action returns GET all Demo's!"
    }

    @Post('/add')
    addBook() : string{
        return "This Action returns ADD all Demo's!"
    }
    @Delete('/delete')
    deleteBook() : string{
        return "This Action returns DELETE all Demo's!"
    }
    @Put('/update')
    UpdateBook() : string{
        return "This Action returns UPDATE all Demo's!"
    }
    
    @Get('FindBookById/:id')
    findBookById(@Param() params): string {
    console.log(params.id);
     return `This action returns a #${params.id}`;
    }

    @Get("/get")
  findAllreq(@Req() request: Request): string {
    return 'This action returns all';
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
    // return `This action creates a coffee`;
  }

  @Get()
findAllReq(@Res() response) { 
  // Express.js example using status() and send() methods 
  response.status(200).send('This action returns all coffees');
}

// pagination 
@Get("/pagination")
findAllPagination(@Query() paginationQuery){
  const { limit, offset } = paginationQuery;
  return `This section returns all pagination Detail, Limit: ${limit} , offset: ${offset} `
}
}
