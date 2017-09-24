var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
	lambda_invoke: {
    	default: {
        	options: {
            	file_name: 'index.js'
        	}
    	}
	},
	lambda_deploy: {
    	default: {
    		arn: 'arn:aws:lambda:us-east-1:678286522657:function:resizeimage'
    	}
    },
	lambda_package: {
    	default: {
    		include_time: false
    	}
	}
});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy'])
