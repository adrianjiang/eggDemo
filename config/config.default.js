'use strict';

module.exports = appInfo => {
	const config = {};

	// should change to your own
	config.keys = appInfo.name + '_1490589510599_299';


	config.mysql = {
		clients: {
	    // clientId, 获取client实例，需要通过 app.mysql.get('clientId') 获取
			db1703281119: {
				host: 'localhost',
				port: '3306',
				user: 'root',
				password: 'angel',
				database: 'db1703281119',
			},
			db1703281120: {
				host: 'localhost',
				port: '3306',
				user: 'root',
				password: 'angel',
				database: 'db1703281119',
			},
		},
		// 所有数据库配置的默认值
		default: {
		},
		// 是否加载到 app 上，默认开启
		app: true,
		// 是否加载到 agent 上，默认关闭
		agent: false,
	};

	return config;
};

