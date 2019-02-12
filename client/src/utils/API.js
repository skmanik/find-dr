import axios from 'axios';

export default {
	getDoctor: function(query) {
		const queryString = query.toUpperCase();
		const queryArray = queryString.split(' ');
		let url;

		if (queryArray.length === 3) {
			url = 'https://openpaymentsdata.cms.gov/resource/a3k9-9uq3.json?physician_first_name=' + queryArray[0] + '&physician_middle_name=' + queryArray[1] + '&physician_last_name=' + queryArray[2];
		} else if (queryArray.length === 2) {
			url = 'https://openpaymentsdata.cms.gov/resource/a3k9-9uq3.json?physician_first_name=' + queryArray[0] + '&physician_last_name=' + queryArray[1];
		} else {
			url = 'https://openpaymentsdata.cms.gov/resource/a3k9-9uq3.json?physician_last_name=' + queryArray[0];
		}

		return new Promise((resolve, reject) => {
			axios.get(url).then((result) => {
				resolve(result.data[0]);
			}).catch((error) => {
				reject(error);
			});
		});
	}
}