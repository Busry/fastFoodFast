//Handling Error
module.exports = {

	error1: (req, res, next) => {
  
 		const error = new Error('Not found');
  		error.status = 404;
  		next(error);
	},

	error2: (error, req, res, next) => {
  
  		res.status(error.status || 500);
  		res.json({
    		error: {
        		message:error.message
      		}
  		});
	}

}