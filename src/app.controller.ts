import * as path from 'path';

import { 
	Get, Controller, Req, Res,
	Query, Post, Response,
	Body 
} from '@nestjs/common';

@Controller('')
export class AppController {
	@Get()
	root( @Res() response ) {
		response.sendFile( path.join(__dirname, '../template/index.html'), (err) => {
			console.log('Sent ok');
		} );
	}

	@Get('findAll')
	async findAll( @Req() request, @Query('page') page, @Res() response ) {
		let index: number = 1;
		index += 1;

		console.log(`index : ${index}, page: ${page}`);

		let ret = await new Promise( ( resolve, reject ) => {
			setTimeout( () => {
				resolve( 'promise finished' );
			}, 2000);
		} );

		response.send

	    return `ret : ${ret}`;
	}

	@Post('add')
    async addUser( @Body('user') user) {
		let userName = user;
		
		console.log(`userName :: ${userName}`);

		//res.json( { code: 0 } ).send();
		return { code: 0, msg: 'ok' };
    }
}
