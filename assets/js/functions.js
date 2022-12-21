/**
 ***Data send to local storage
 ********************************
 * @param key the parameters
 * @param product_array the arguments
 */

function dataSend(key, product_array) {
	let data = JSON.stringify(product_array);
	localStorage.setItem(key, data);
	return true;
}

/**
 ***Data get from local storage
 ********************************
 * @param MyParams the parameters
 * @param args the arguments
 */
function dataGet(key) {
	let data = localStorage.getItem(key);

	return data ? JSON.parse(data) : false;
}
