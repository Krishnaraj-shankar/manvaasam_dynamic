let showOrderDetails = (json) => {
    json = JSON.parse(json);
    if ($(".MYmodal-wrapper").length === 0) {
        let container = $(`<div class="MYmodal-wrapper open"><div class="modal-dialog" role="document"><div class="modal-content"><div class="d-flex justify-content-between align-items-center pe-3"><h3 class="modal-title text-center" style="padding: 10px;font-weight: bold">About This Product</h3><button type="button" class="btn btn-close"></button></div><div class="modal-body">${json.data}</div><div class="modal-footer"><a href="https://www.flipkart.com/search?q=manvaasam&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"><button type="button" class="btn btn-success">FLIPKART</button></a><a href="https://play.google.com/store/apps/details?id=com.karthiar.manvaasam"><button type="button" class="btn btn-success">ORDER THROUGH APP</button></a><a href="tel:6380091001"><button type="button" class="btn btn-success">CALL / CHAT</button></a></div></div></div></div>`);
        $("body").append(container);
    }
    $(".MYmodal-wrapper .btn-close").on("click", () => {
        $(".MYmodal-wrapper").remove();
    });
};

let showQuickOrders = (id) => {
    if ($(".MYmodal-wrapper").length === 0) {
        let container = $(`<div class="MYmodal-wrapper open"><form action="" method="post"><div class="modal-dialog" role="document"><div class="modal-content"><div class="d-flex justify-content-between align-items-center pe-3"><h3 class="modal-title text-center" style="padding: 10px;font-weight: bold">Quick Order</h3><button type="button" class="btn btn-close"></button></div><div class="p-2"><div class="p-2"><input type="text" name="fullname" placeholder="Full Name" class="form-control"></div><div class="p-2"><input type="text" name="email" placeholder="Email ID" class="form-control"></div><div class="p-2"><input type="text" name="mobile" placeholder="Mobile No" class="form-control"></div>                    <input type="hidden" name="productid" value="${id}"><div class="modal-footer"><button type="submit" class="btn btn-success">Order Now</button></div></div></div></div></form></div>`);
        $("body").append(container);
    }
    $(".MYmodal-wrapper .btn-close").on("click", () => {
        $(".MYmodal-wrapper").remove();
    });
};