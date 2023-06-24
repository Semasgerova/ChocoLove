import { useContext, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { ProductContext } from "../context/ProductContext";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import { useWishlist } from "react-use-wishlist";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LangContext } from "../context/LangContext";
import ReactPaginate from "react-paginate";

const Shop = () => {
  const [productItem] = useContext(ProductContext);
  const [lang] = useContext(LangContext);

  const notify = () =>
    toast.success("Added products", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const { addItem, items, isEmpty, removeItem } = useCart();
  const { addWishlistItem } = useWishlist();

  const [data, setData] = useState(productItem.products);
  const filterCategory = (catItem: any) => {
    const result = productItem.products?.filter((item: any) => {
      return item.category === catItem;
    });
    setData(result);
  };

  const [dataAz, setDataAz] = useState(productItem.productsAz);
  const filterCategoryAz = (catItem: any) => {
    const result = productItem.productsAz?.filter((item: any) => {
      return item.category === catItem;
    });
    setDataAz(result);
  };

  

  const handleChange = (e: any) => {
    const value = e.target.value;
    const result = productItem.products?.filter((item: any) => {
      return item.price < value;
    });
    setData(result);
    const resultAz = productItem.productsAz?.filter((item: any) => {
      return item.price < value;
    });
    setDataAz(resultAz);
    setValue(value);
  };

  const clearFilters = () => {
    setData(productItem.products);
    setDataAz(productItem.productsAz);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
    };

  //Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const offset = currentPage * itemsPerPage;
  const currentPageItems = data
    .slice(offset, offset + itemsPerPage)
    .map((item: any) => (
      <Col sm={12} md={6} lg={4} key={item.id} className="txt text-center">
        <div className="box">
          <div className="square"></div>
          <div className="img">
            <LinkContainer to={`/shop/${item.id}`} onClick={scrollToTop}>
              <img src={item.image} alt="" />
            </LinkContainer>
          </div>
          <div className="button">
            <Button
              className="btn p-0 mt-4"
              onClick={() => {
                addItem(item);
                notify();
              }}
            >
              {lang === "az" ? "SƏBƏTƏ ƏLAVƏ ET" : "ADD TO CART"}
              <i className="fa-solid fa-arrow-right"></i>
            </Button>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
          <div className="whisList">
            <Button className="btn" onClick={() => addWishlistItem(item)}>
              <i className="fa-regular fa-heart"></i>
            </Button>
          </div>
        </div>
        <h4>{item.title}</h4>
        <p>{item.price}$</p>
      </Col>
    ));
  const currentPageItemsAz = dataAz
    .slice(offset, offset + itemsPerPage)
    .map((item: any) => (
      <Col sm={12} md={6} lg={4} key={item.id} className="txt text-center">
        <div className="box">
          <div className="square"></div>
          <div className="img">
            <LinkContainer to={`/shop/${item.id}`} onClick={scrollToTop}>
              <img src={item.image} alt="" />
            </LinkContainer>
          </div>
          <div className="button">
            <Button
              className="btn p-0 mt-4"
              onClick={() => {
                addItem(item);
                notify();
              }}
            >
              {lang === "az" ? "SƏBƏTƏ ƏLAVƏ ET" : "ADD TO CART"}
              <i className="fa-solid fa-arrow-right"></i>
            </Button>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
          <div className="whisList">
            <Button className="btn" onClick={() => addWishlistItem(item)}>
              <i className="fa-regular fa-heart"></i>
            </Button>
          </div>
        </div>
        <h4>{item.title}</h4>
        <p>{item.price}$</p>
      </Col>
    ));

   
  

  return (
    <div className="shop">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        {lang === "az" ? <h1>Bütün Məhsullar</h1> : <h1>All Products</h1>}
        {lang === "az" ? (
          <p className="py-3">
            <LinkContainer to="/">
              <span>Ana Səhifə</span>
            </LinkContainer>
            // Məhsullar
          </p>
        ) : (
          <p className="py-3">
            <LinkContainer to="/">
              <span>Home</span>
            </LinkContainer>
            // Products
          </p>
        )}
      </div>
      <div className="bottom py-5">
        <div className="top-img">
          <img
            src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png"
            alt=""
          />
        </div>
        <Container>
          <Row className="m-0">
            <Col lg={4} className="d-lg-flex flex-column d-none">
              <div className="cart">
                {lang === "az" ? <h1>Səbət</h1> : <h1>Cart</h1>}
                {isEmpty ? (
                  <div className="txt">
                    {lang === "az" ? (
                      <p>Səbətdə məhsul yoxdur.</p>
                    ) : (
                      <p>No products in the cart.</p>
                    )}
                  </div>
                ) : (
                  <div className="box">
                    {items.map((item) => (
                      <div className="d-flex align-items-center">
                        <div className="img">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="d-flex justify-content-between w-75">
                          <div className="text">
                            <h6>{item.title}</h6>
                            <p>
                              {item.quantity!} x {item.price}$
                            </p>
                          </div>
                          <div className="btn">
                            <Button
                              variant="danger"
                              className="removeBtn"
                              onClick={() => removeItem(item.id)}
                            >
                              <i className="fa-solid fa-xmark"></i>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="category my-5">
                {lang === "az" ? (
                  <h1>Məhsul kateqoriyaları</h1>
                ) : (
                  <h1>Product categories</h1>
                )}
                {lang === "az" ? (
                  <ul className="p-0 d-flex flex-column">
                    <li
                      onClick={() => {
                        filterCategoryAz("Şokolad");
                      }}
                    >
                      Şokolad
                    </li>
                    <li
                      onClick={() => {
                        filterCategoryAz("Belçika vafliləri");
                      }}
                    >
                      Belçika vafliləri
                    </li>
                    <li
                      onClick={() => {
                        filterCategoryAz("Tünd şokolad");
                      }}
                    >
                      Tünd şokolad
                    </li>
                    <li
                      onClick={() => {
                        filterCategoryAz("Desertlər");
                      }}
                    >
                      Desertlər
                    </li>
                    <li
                      onClick={() => {
                        filterCategoryAz("Trufflelər");
                      }}
                    >
                      Trufflelər
                    </li>
                  </ul>
                ) : (
                  <ul className="p-0 d-flex flex-column">
                    <li
                      onClick={() => {
                        filterCategory("Chocolate");
                      }}
                    >
                      Chocolate
                    </li>
                    <li
                      onClick={() => {
                        filterCategory("Belgian Waffles");
                      }}
                    >
                      Belgian Waffles
                    </li>
                    <li
                      onClick={() => {
                        filterCategory("Dark Chocolate");
                      }}
                    >
                      Dark Chocolate
                    </li>
                    <li
                      onClick={() => {
                        filterCategory("Deserts");
                      }}
                    >
                      Desserts
                    </li>
                    <li
                      onClick={() => {
                        filterCategory("Truffles");
                      }}
                    >
                      Truffles
                    </li>
                  </ul>
                )}
              </div>
              <div className="price">
                {lang === "az" ? <h1>Qiymət</h1> : <h1>Price</h1>}
                <input
                  type="range"
                  className="range-style"
                  value={value}
                  onChange={handleChange}
                  min={1}
                  max={50}
                />
                <br /> <span>{value}$</span>
              </div>
              
              <div className="clear mt-5">
                {lang === "az" ? (
                  <div
                    className="btn d-flex align-items-center justify-content-center"
                    onClick={clearFilters}
                  >
                    Filtrləri Təmizləyin
                  </div>
                ) : (
                  <div
                    className="btn d-flex align-items-center justify-content-center"
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </div>
                )}
              </div>
            </Col>
            <Col lg={8} md={12} className="cards">
              <Container>
                <div className="button d-lg-none mb-5">
                  <Button className="btn" onClick={handleShow}>
                    <i className="fa-solid fa-bars-staggered"></i>
                  </Button>

                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>ChocoLove</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <div className="cart mb-5">
                        {lang === "az" ? <h1>Səbət</h1> : <h1>Cart</h1>}
                        {isEmpty ? (
                          <div className="txt">
                            {lang === "az" ? (
                              <p>Səbətdə məhsul yoxdur.</p>
                            ) : (
                              <p>No products in the cart.</p>
                            )}
                          </div>
                        ) : (
                          <div className="box">
                            {items.map((item) => (
                              <div className="d-flex align-items-center">
                                <div className="img">
                                  <img src={item.image} alt="" />
                                </div>
                                <div className="d-flex justify-content-between w-75">
                                  <div className="text">
                                    <h6>{item.title}</h6>
                                    <p>
                                      {item.quantity!} x {item.price}$
                                    </p>
                                  </div>
                                  <div className="btn">
                                    <Button
                                      variant="danger"
                                      className="removeBtn"
                                      onClick={() => removeItem(item.id)}
                                    >
                                      <i className="fa-solid fa-xmark"></i>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="category">
                        {lang === "az" ? (
                          <h1>Məhsul kateqoriyaları</h1>
                        ) : (
                          <h1>Product categories</h1>
                        )}
                        {lang === "az" ? (
                          <ul className="p-0 d-flex flex-column">
                            <li
                              onClick={() => {
                                filterCategoryAz("Şokolad");
                              }}
                            >
                              Şokolad
                            </li>
                            <li
                              onClick={() => {
                                filterCategoryAz("Belçika vafliləri");
                              }}
                            >
                              Belçika vafliləri
                            </li>
                            <li
                              onClick={() => {
                                filterCategoryAz("Tünd şokolad");
                              }}
                            >
                              Tünd şokolad
                            </li>
                            <li
                              onClick={() => {
                                filterCategoryAz("Desertlər");
                              }}
                            >
                              Desertlər
                            </li>
                            <li
                              onClick={() => {
                                filterCategoryAz("Trufflelər");
                              }}
                            >
                              Trufflelər
                            </li>
                          </ul>
                        ) : (
                          <ul className="p-0 d-flex flex-column">
                            <li
                              onClick={() => {
                                filterCategory("Chocolate");
                              }}
                            >
                              Chocolate
                            </li>
                            <li
                              onClick={() => {
                                filterCategory("Belgian Waffles");
                              }}
                            >
                              Belgian Waffles
                            </li>
                            <li
                              onClick={() => {
                                filterCategory("Dark Chocolate");
                              }}
                            >
                              Dark Chocolate
                            </li>
                            <li
                              onClick={() => {
                                filterCategory("Deserts");
                              }}
                            >
                              Desserts
                            </li>
                            <li
                              onClick={() => {
                                filterCategory("Truffles");
                              }}
                            >
                              Truffles
                            </li>
                          </ul>
                        )}
                      </div>
                      <div className="price">
                        {lang === "az" ? <h1>Qiymət</h1> : <h1>Price</h1>}
                        <input
                          type="range"
                          value={value}
                          onChange={handleChange}
                          min={1}
                          max={50}
                        />
                        <br /> <span>{value}$</span>
                      </div>
                      <div className="clear mt-5">
                        {lang === "az" ? (
                          <div
                            className="btn d-flex align-items-center justify-content-center"
                            onClick={clearFilters}
                          >
                            Filtrləri Təmizləyin
                          </div>
                        ) : (
                          <div
                            className="btn d-flex align-items-center justify-content-center"
                            onClick={clearFilters}
                          >
                            Clear Filters
                          </div>
                        )}
                      </div>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
                <Row className=" m-0">
                  {/* {lang === "az"
                    ? dataAz?.map((item: any) => (
                        <Col
                          sm={12}
                          md={6}
                          lg={4}
                          key={item.id}
                          className="txt text-center"
                        >
                          <div className="box">
                            <div className="square"></div>
                            <div className="img">
                              <LinkContainer to={`/shop/${item.id}`}>
                                <img src={item.image} alt="" />
                              </LinkContainer>
                            </div>
                            <div className="button">
                              <Button
                                className="btn p-0 mt-4"
                                onClick={() => {
                                  addItem(item);
                                  notify();
                                }}
                              >
                                {lang === "az"
                                  ? "SƏBƏTƏ ƏLAVƏ ET"
                                  : "ADD TO CART"}
                                <i className="fa-solid fa-arrow-right"></i>
                              </Button>
                              <ToastContainer
                                position="bottom-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="dark"
                              />
                            </div>
                            <div className="whisList">
                              <Button
                                className="btn"
                                onClick={() => addWishlistItem(item)}
                              >
                                <i className="fa-regular fa-heart"></i>
                              </Button>
                            </div>
                          </div>
                          <h4>{item.title}</h4>
                          <p>{item.price}$</p>
                        </Col>
                      ))
                    : data?.map((item: any) => (
                        <Col
                          sm={12}
                          md={6}
                          lg={4}
                          key={item.id}
                          className="txt text-center"
                        >
                          <div className="box">
                            <div className="square"></div>
                            <div className="img">
                              <LinkContainer to={`/shop/${item.id}`}>
                                <img src={item.image} alt="" />
                              </LinkContainer>
                            </div>
                            <div className="button">
                              <Button
                                className="btn p-0 mt-4"
                                onClick={() => {
                                  addItem(item);
                                  notify();
                                }}
                              >
                                {lang === "az"
                                  ? "SƏBƏTƏ ƏLAVƏ ET"
                                  : "ADD TO CART"}
                                <i className="fa-solid fa-arrow-right"></i>
                              </Button>
                              <ToastContainer
                                position="bottom-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="dark"
                              />
                            </div>
                            <div className="whisList">
                              <Button
                                className="btn"
                                onClick={() => addWishlistItem(item)}
                              >
                                <i className="fa-regular fa-heart"></i>
                              </Button>
                            </div>
                          </div>
                          <h4>{item.title}</h4>
                          <p>{item.price}$</p>
                        </Col>
                      ))} */}
                  {lang === "az" ? currentPageItemsAz : currentPageItems}
                </Row>
                <ReactPaginate
                  pageCount={Math.ceil(data.length / itemsPerPage)}
                  onPageChange={({ selected }: any) => setCurrentPage(selected)}
                  containerClassName="pagination"
                  activeClassName="active"
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Shop;
