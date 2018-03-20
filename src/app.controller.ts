import { 
	Get, Controller, Req, 
	Query, Post, Response,
	Body 
} from '@nestjs/common';

@Controller('')
export class AppController {
	@Get()
	root(): Object {
	    //return 'Hello World!';
	    return {
	    	name: 'gfx',
	    	address: '人们的心里'
	    };
	}

	@Get('findAll')
	async findAll( @Req() request, @Query('page') page ) {
		let index: number = 1;
		index += 1;

		console.log(`index : ${index}, page: ${page}`);

		let ret = await new Promise( ( resolve, reject ) => {
			setTimeout( () => {
				resolve( 'promise finished' );
			}, 2000);
		} );

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
