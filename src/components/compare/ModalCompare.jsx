import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Toast from "../base/LoadingError/Toast";
import Rating from "../homeComponents/Rating";

const products = [
  {
    _id: "624abe2f071a39dc8512adb0",
    name: "HAWTHORNE PLAIN OXFORD",
    image: "https://images.dsw.com/is/image/DSWShoes/522647_001_ss_01?impolicy=qlt-medium-high&imwidth=640&imdensity=1",
    description:
      "A true classic, the Hawthorne plain oxford from Cole Haan makes you ready to take on anything the day brings. Made of leather, this lace-up comes with Grand.OS comfort technology.\n\nItem # 522647\nUPC # 194736145262",
    rating: 3.6666666666666665,
    numReviews: 6,
    price: 129,
    countInStock: 8,
    reviews: [
      {
        rating: 5,
        reviewContent:
          "Hàng giao khá nhanh bth mik mang  size 36,5 nhm thấy mn bảo nên tăng 1,2 size nên mik tăng lên size 38 về mang thêm vớ vẫn hơi rộng một chút thôi nhm mik nghĩ mn nên mua nhích lên 1,2 size thì vẫn ok có hơi rộng thì mn nhét thêm miếng lót giày hoặc miếng giấy dưới miếng lót của giày là ok",
        user: "6277dd1e089bebb4a4271de7",
        _id: "62b1430ea81a239b3c1f50ce",
        createdAt: "2022-06-21T04:03:26.258Z",
        updatedAt: "2022-06-21T04:03:26.258Z"
      },
      {
        rating: 1,
        reviewContent: "Chê",
        user: "6277dd1e089bebb4a4271de7",
        _id: "62b188e6bddf36166afbd26f",
        createdAt: "2022-06-21T09:01:26.786Z",
        updatedAt: "2022-06-21T09:01:26.786Z"
      },
      {
        rating: 3,
        reviewContent: "Tạm",
        user: "6277dd1e089bebb4a4271de7",
        _id: "62b18946bddf36166afbd284",
        createdAt: "2022-06-21T09:03:02.346Z",
        updatedAt: "2022-06-21T09:03:02.346Z"
      },
      {
        rating: 4,
        reviewContent: "Chê x3",
        user: "62b52b523ecdc4864016365e",
        _id: "62b536d93ecdc48640163904",
        createdAt: "2022-06-24T04:00:25.014Z",
        updatedAt: "2022-06-24T04:00:25.014Z"
      },
      {
        rating: 5,
        reviewContent: "f",
        user: "624b98120aac26127bb0fbef",
        _id: "631e0e57f62d2d99c9ed0fb4",
        createdAt: "2022-09-11T16:35:35.442Z",
        updatedAt: "2022-09-11T16:35:35.442Z"
      },
      {
        rating: 4,
        reviewContent: "Sản phẩm tốt",
        user: "62f7e09c5e6ac0ae18128e3d",
        _id: "632971ad519d297d14bd9731",
        createdAt: "2022-09-20T07:54:21.769Z",
        updatedAt: "2022-09-20T07:54:21.769Z"
      }
    ],
    __v: 18,
    createdAt: "2018-04-04T09:45:19.303Z",
    updatedAt: "2023-01-31T16:09:09.214Z",
    category: {
      _id: "62aa129e4bb660d141637809",
      name: "Women's Shoes"
    },
    totalSales: 27,
    isDisabled: false,
    comments: [],
    numViews: 207
  },
  {
    _id: "624abe2f071a39dc8512adb2",
    name: "WHITE LEDGE HIKING BOOT - MEN'S",
    image: "https://images.dsw.com/is/image/DSWShoes/193746_001_ss_01?impolicy=qlt-medium-high&imwidth=640&imdensity=1",
    description:
      "Tackle any trail with ease in Timberland's White Ledge Hiker. This hiking boot offers amazing comfort, waterproof protection and a rubber sole perfect for traction over any terrain.\n\n\nItem # 193746\nUPC # 808947004149",
    rating: 0,
    numReviews: 0,
    price: 99.99,
    countInStock: 8,
    reviews: [],
    __v: 1,
    createdAt: "2019-04-04T09:45:19.303Z",
    updatedAt: "2022-09-09T07:35:58.266Z",
    category: {
      _id: "626d733c1064628b30cd71c2",
      name: "Boots"
    },
    totalSales: 2,
    isDisabled: false,
    numViews: 13
  },
  {
    _id: "624abe2f071a39dc8512adb3",
    name: "ALPHABOUNCE 1 RUNNING SHOE - MEN'S",
    image: "https://images.dsw.com/is/image/DSWShoes/519163_036_ss_01?impolicy=qlt-medium-high&imwidth=640&imdensity=1",
    description:
      "Breeze away through tiring sessions in the Alphabounce 1 running shoe by adidas. Partly made using recycled materials, this lace-up sneaker comes with forged mesh upper that offers flexibility, ventilation and support in targeted areas based on Aramis insights. The lightweight Bounce midsole ensures multi-directional energy return for all movements.\n\nItem # 519163\nUPC # 195736763807",
    rating: 0,
    numReviews: 0,
    price: 99.99,
    countInStock: 2,
    reviews: [],
    __v: 1,
    createdAt: "2020-04-04T09:45:19.303Z",
    updatedAt: "2022-12-14T00:28:54.803Z",
    category: {
      _id: "625fce6677d66daf0ede8a25",
      name: "Running Shoes"
    },
    totalSales: 2,
    isDisabled: false,
    numViews: 2
  }
];
const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000
};
const ModalCompare = (props) => {
  const { showBoxCompare, setShowBoxCompare, arrProductCompare, setArrProductCompare } = props;
  const handleShowCompare = () => {
    setShowBoxCompare(!showBoxCompare);
  };

  const handleAddProductArrCompare = (product) => {
    if (product._id !== arrProductCompare[0]._id) {
      arrProductCompare.push(product._id);
      setArrProductCompare(arrProductCompare);
    } else {
      toast.error("Vui lòng chọn sản phẩm khác, sản phẩm này đã được thêm", ToastObjects);
    }
  };

  return (
    <>
      <Toast />
      <div
        className="modal fade bd-example-modal-lg"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg w-sm-100">
          <div id="scroll-custom" className="modal-content d-flex align-items-center pb-3 compare-modal">
            <h5 className="text-center p-3">Recently viewed products</h5>
            <div className="d-flex justify-content-center">
              {products?.map((product) => (
                <div className="col-lg-3 p-1" key={product._id}>
                  <div className="shadow p-3 mb-4 bg-body rounded">
                    <Link to={`/products/${product._id}`}>
                      <div className="shopBack main-effect">
                        <img className="main-scale" src={product.image} alt={product.name} />
                      </div>
                    </Link>

                    <div className="pb-2">
                      <p className="fs-6">
                        <Link to={`/products/${product._id}`}>
                          {`${product.name.length} >= 29` ? `${product.name.slice(0, 29)}...` : ` ${product.name}}`}
                        </Link>
                      </p>

                      <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                      <h6>${product.price}</h6>
                    </div>
                    <Link className="text-primary" onClick={() => handleAddProductArrCompare(product)}>
                      Add compare
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p>Or enter name here to search</p>
            <form className="input-group">
              <input type="search" className="form-control rounded search" placeholder="Search" />
              <button type="submit" className="search-button">
                search
              </button>
            </form>
            <div className="w-100" style={{ padding: "0 40px" }}>
              {products?.map((product) => (
                <div className="pt-1 w-100">
                  <div className="d-flex">
                    <img style={{ width: "70px" }} src={product?.image} alt={product?.name} />
                    <div className="d-flex align-items-center">
                      <b alt={product?.name}>
                        {`${product?.name.lenght}>=25` ? `${product?.name.slice(0, 25)}...` : `${product?.name}`}
                      </b>
                      <b className="pe-3">{product?.price}$</b>
                      <Rating value={product.rating} text={`(${product.numReviews})`} />
                    </div>
                  </div>
                  <div className="text-end right-0">
                    <Link to="#" className="text-primary">
                      Add compare
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="popup-compare">
        <div className="popup-compare__hide" onClick={handleShowCompare}>
          Collapse <i className="fas fa-angle-down"></i>
        </div>
        <ul className="popup-compare__listcompare">
          <li>
            <a href="$">
              <img
                src="https://images.dsw.com/is/image/DSWShoes/509086_020_ss_01?impolicy=qlt-medium-high&imwidth=640&imdensity=1"
                alt=""
              />
              <h3>Zoom Freak 4</h3>
            </a>
          </li>
          {/* <li>
            <a href="$">
              <img
                src="https://images.dsw.com/is/image/DSWShoes/509086_020_ss_01?impolicy=qlt-medium-high&imwidth=640&imdensity=1"
                alt=""
              />
              <h3>Zoom Freak 4</h3>
            </a>
          </li> */}
          <li>
            <a href="$" data-toggle="modal" data-target=".bd-example-modal-lg">
              <i
                className="fal fa-plus-circle"
                style={{ fontSize: "2.5rem", opacity: ".3", fontWeight: "lighter", padding: "5px" }}
              ></i>
              <h3>Add product</h3>
            </a>
          </li>

          <li>
            <Link to="/compare-product" className="action btn-primary round-black-btn p-3">
              Compare now
            </Link>
            <a className="clear-all" href="$">
              Clear all
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ModalCompare;
