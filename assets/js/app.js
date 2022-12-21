/**
 ***Get data from the product form
 ********************************
 * @param MyParams the parameters
 * @param args the arguments
 */

const productForm = document.getElementById("product-form");
const message = document.querySelector(".message");
const product_sec = document.querySelector(".product-section");
productForm.addEventListener("submit", function (e) {
	e.preventDefault();
	const p_name = document.getElementById("name").value;
	const p_price = document.getElementById("price").value;
	const p_sprice = document.getElementById("s-price").value;
	const p_photo = document.getElementById("photo").value;

	// form validation
	if (p_name == "" || p_price == "" || p_sprice == "" || p_photo == "") {
		message.innerHTML = `<p class="alert alert-danger alert-dismissible" role="alert">
										All feilds are required
										<button class="btn-close" data-bs-dismiss="alert"></button>
									</p>`;
		return;
	} else {
		let dataArr;

		if (dataGet("product")) {
			dataArr = dataGet("product");
		} else {
			dataArr = [];
		}
		dataArr.push({
			name: p_name,
			price: p_price,
			sale: p_sprice,
			photo: p_photo,
		});
		dataSend("product", dataArr);
		let GetProductData = dataGet("product");
		GetProductData.map((item) => {
			let product = `
		<div class="col-lg-4 col-md-6 col-12">
									<div class="card product">
										<img src="${item.photo}" alt="" class="card-img-top" />
										<hr />
										<div class="card-body">
											<h2 class="card-title">${item.name}</h2>
											<delete class="price">$ ${item.price}</delete>
											<h5 class="s-price">$ ${item.sale}</h5>
											<button class="btn btn-warning">Add To Cart</button>
										</div>
									</div>
								</div>
								
			`;
			product_sec.innerHTML += product;
		});

		productForm.reset();
	}
});

let GetProductData = dataGet("product");
GetProductData.map((item) => {
	let product = `
				<div class="col-lg-4 col-md-6 col-12">
									<div class="card product">
										<img
											src="${item.photo}"
											alt=""
											class="card-img" />
										<hr />
										<h2 class="card-title">${item.name}</h2>
										<delete class="price">$ ${item.price}</delete>
										<h5 class="s-price">$ ${item.sale}</h5>
										<button class="btn btn-warning">Add To Cart</button>
									</div>
								</div>
			`;
	product_sec.innerHTML += product;
});
