import React, { useEffect, useCallback, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../base/LoadingError/Error";
import {
  createProductComment,
  createProductCommentReply,
  deleteProductComment,
  listCommentProduct,
  updateCommentProduct
} from "../../Redux/Actions/productActions";
import {
  PRODUCT_CREATE_COMMENT_FAIL,
  PRODUCT_CREATE_COMMENT_REPLY_FAIL,
  PRODUCT_CREATE_COMMENT_REPLY_RESET,
  PRODUCT_CREATE_COMMENT_RESET
} from "../../Redux/Constants/productConstants";

const ProductComment = (props) => {
  const { userInfo, match } = props;
  const productId = match.params.id;
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
  const [usernameComment, setUsernameComment] = useState("");
  const [contentFirstReply, setContentFirstReply] = useState("");
  const [checkIdReplyComment, setCheckIdReplyComment] = useState(null);
  const [isEditComment, setIsEditComment] = useState(false);

  const getCommentProduct = useSelector((state) => state.productComment);
  const { comments } = getCommentProduct;

  const notifiCreateProductComment = useSelector((state) => state.productCreateComment);
  const { success: successCreateComment, error: errorCreateComment } = notifiCreateProductComment;

  const notifiCreateProductCommentReply = useSelector((state) => state.productCreateCommentReply);
  const { success: successCreateCommentReply, error: errorCreateCommentReply } = notifiCreateProductCommentReply;

  const loadListCommentProduct = useCallback(() => {
    dispatch(listCommentProduct(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (usernameComment !== "") {
      setContentFirstReply(`@${usernameComment} `);
    }
  }, [usernameComment]);

  const loadNotifiCreateProductComment = useCallback(() => {
    if (successCreateComment || successCreateCommentReply) {
      setContent("");
      setContentFirstReply(`@${usernameComment} `);
      setCheckIdReplyComment(null);
      loadListCommentProduct();
      dispatch({ type: PRODUCT_CREATE_COMMENT_RESET });
      dispatch({ type: PRODUCT_CREATE_COMMENT_REPLY_RESET });
    }
    if (errorCreateComment || errorCreateCommentReply) {
      dispatch({ type: PRODUCT_CREATE_COMMENT_FAIL });
      dispatch({ type: PRODUCT_CREATE_COMMENT_REPLY_FAIL });
    }
  }, [
    dispatch,
    successCreateComment,
    errorCreateComment,
    successCreateCommentReply,
    errorCreateCommentReply,
    usernameComment,
    loadListCommentProduct
  ]);

  const onAvatarLoadError = (e) => {
    e.currentTarget.onerror = null; // prevents looping
    e.currentTarget.src = "../images/avatar/default.png";
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductComment({
        productId,
        content
      })
    );
  };

  const onEditCommentHandler = (id) => {
    let contentFirstReplyEdit = comments?.find((idContentFirst) => idContentFirst._id === id);
    setIsEditComment(true);
    setCheckIdReplyComment(id);
    setContentFirstReply(contentFirstReplyEdit?.content);
  };

  const onEditCommentReplyHandler = (reply) => {
    let contentFirstReply = comments
      ?.find((idContent) => idContent._id === reply.parentComment)
      ?.replies.find((idContentFirstReply) => idContentFirstReply._id === reply._id);
    setIsEditComment(true);
    setCheckIdReplyComment(contentFirstReply?._id);
    setContentFirstReply(contentFirstReply?.content);
  };

  const submitReplyFirstLevelHandler = (e) => {
    e.preventDefault();
    if (isEditComment === true) {
      dispatch(
        updateCommentProduct({
          commentId: checkIdReplyComment,
          content: contentFirstReply
        })
      );
      setCheckIdReplyComment(null);
    } else {
      dispatch(
        createProductCommentReply({
          productId,
          content: contentFirstReply,
          parentCommentId: checkIdReplyComment
        })
      );
    }
  };

  const onCancelReplyHandler = () => {
    setCheckIdReplyComment(null);
    setContent("");
    setIsEditComment(false);
    setContentFirstReply(`@${usernameComment} `);
  };

  const onDeleteCommentHandler = useCallback(
    (id) => {
      if (window.confirm("Are you sure delete comment?")) {
        dispatch(deleteProductComment(id));
      }
    },
    [dispatch]
  );

  useEffect(() => loadListCommentProduct(), [loadListCommentProduct]);
  useEffect(() => loadNotifiCreateProductComment(), [loadNotifiCreateProductComment]);
  return (
    <div className="wrap-comment">
      <h3>Product comment</h3>
      {userInfo ? (
        <form className="mt-3 mb-3 nav justify-content-end" onSubmit={submitHandler}>
          <textarea
            required
            placeholder="Enter your comment"
            className="content-comment form-control"
            id="contentComment"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button type="submit" className="btn btn-primary mt-3 btn-size p-2">
            SEND COMMENT
          </button>
        </form>
      ) : (
        <div className="my-3">
          <Message variant={"alert-warning"}>
            Please{" "}
            <Link to={`/login?redirect=products/${productId}`}>
              " <strong>Login</strong> "
            </Link>{" "}
            to write a comment{" "}
          </Message>
        </div>
      )}

      <div className="list-comment border border-info rounded">
        {comments?.length > 0 ? (
          comments?.map((item) => {
            return (
              <div value={item._id} key={item._id} className="comment-ask rounded">
                <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                  <img
                    className="img-xs rounded-circle p-1 border border-primary"
                    src={item?.user?.avatarUrl}
                    onError={onAvatarLoadError}
                    alt="User avatar"
                  />
                  <strong className="ms-2">{item.user?.name}</strong>
                  <p className="fs-6 fst-italic">Question: {moment(item.createdAt).calendar()}</p>
                  <div className="alert alert-info p-2">{item.content}</div>

                  <div className="action-user">
                    {checkIdReplyComment === item._id ? (
                      userInfo ? (
                        <form className="mb-3" onSubmit={submitReplyFirstLevelHandler}>
                          <textarea
                            required
                            placeholder="Enter your reply"
                            className="content-comment form-control"
                            value={contentFirstReply}
                            onChange={(e) => setContentFirstReply(e.target.value)}
                          ></textarea>
                          <div className="d-flex justify-content-between">
                            <b
                              className="mt-2 p-1 btn btn-danger btn-size cursor-pointer"
                              onClick={onCancelReplyHandler}
                            >
                              Cancel reply
                            </b>
                            {isEditComment === true ? (
                              <button type="submit" className="p-1 mt-2 btn btn-warning btn-size">
                                Update comment
                              </button>
                            ) : (
                              <button type="submit" className="p-1 mt-2 btn btn-primary btn-size">
                                Send reply
                              </button>
                            )}
                          </div>
                        </form>
                      ) : (
                        <div className="my-3">
                          <Message variant={"alert-warning"}>
                            Please{" "}
                            <Link to={`/login?redirect=products/${productId}`}>
                              " <strong>Login</strong> "
                            </Link>{" "}
                            to write a comment{" "}
                          </Message>
                        </div>
                      )
                    ) : (
                      <>
                        <b
                          value={checkIdReplyComment}
                          className="text-primary cursor-pointer"
                          onClick={() => {
                            setUsernameComment(item.user.name);
                            setCheckIdReplyComment(item._id);
                            setIsEditComment(false);
                          }}
                        >
                          Reply
                        </b>
                        <div className="dropdown float-end">
                          <Link to="#" data-bs-toggle="dropdown" className="">
                            <i className="fas fa-ellipsis-h text-primary"></i>
                          </Link>
                          <div className="dropdown-menu">
                            {(userInfo?.isAdmin === true || userInfo?._id === item.user?._id) && (
                              <>
                                <Link
                                  to="#"
                                  className="dropdown-item btn-size"
                                  onClick={() => onEditCommentHandler(item._id)}
                                >
                                  Edit info
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item btn-size"
                                  onClick={() => onDeleteCommentHandler(item._id)}
                                >
                                  Delete
                                </Link>
                              </>
                            )}
                            <Link to="#" className="dropdown-item btn-size">
                              Report
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {item?.replies.map((reply) => {
                    return (
                      <div key={reply._id} className="comment-reply">
                        <img
                          className="img-xs rounded-circle p-1"
                          src={reply.user.avatarUrl}
                          onError={onAvatarLoadError}
                          alt="User avatar"
                        />
                        <strong className="ms-2">{reply.user.name}</strong>
                        <div className="fs-6 fst-italic">Reply: {moment(reply.createdAt).calendar()}</div>
                        <div className="alert alert-info p-2">{reply.content}</div>
                        <div className="action-user">
                          {checkIdReplyComment === reply._id ? (
                            userInfo ? (
                              <form className="mb-3" onSubmit={submitReplyFirstLevelHandler}>
                                <textarea
                                  required
                                  placeholder="Enter your reply"
                                  className="content-comment form-control"
                                  value={contentFirstReply}
                                  onChange={(e) => setContentFirstReply(e.target.value)}
                                ></textarea>
                                <div className="d-flex justify-content-between">
                                  <b
                                    className="mt-2 p-1 btn btn-danger btn-size cursor-pointer"
                                    onClick={onCancelReplyHandler}
                                  >
                                    Cancel reply
                                  </b>
                                  {isEditComment === true ? (
                                    <button type="submit" className="p-1 mt-2 btn btn-warning btn-size">
                                      Update comment
                                    </button>
                                  ) : (
                                    <button type="submit" className="p-1 mt-2 btn btn-primary btn-size">
                                      Send reply
                                    </button>
                                  )}
                                </div>
                              </form>
                            ) : (
                              <div className="my-3">
                                <Message variant={"alert-warning"}>
                                  Please{" "}
                                  <Link to={`/login?redirect=products/${productId}`}>
                                    " <strong>Login</strong> "
                                  </Link>{" "}
                                  to write a comment{" "}
                                </Message>
                              </div>
                            )
                          ) : (
                            <>
                              <b
                                value={checkIdReplyComment}
                                className="text-primary cursor-pointer"
                                onClick={() => {
                                  setUsernameComment(reply.user.name);
                                  setCheckIdReplyComment(reply._id);
                                }}
                              >
                                Reply
                              </b>
                              <div className="dropdown float-end">
                                <Link to="#" data-bs-toggle="dropdown" className="">
                                  <i className="fas fa-ellipsis-h text-primary"></i>
                                </Link>
                                <div className="dropdown-menu">
                                  {(userInfo?.isAdmin === true || userInfo?._id === reply.user._id) && (
                                    <>
                                      <Link
                                        to="#"
                                        className="dropdown-item btn-size"
                                        onClick={() => onEditCommentReplyHandler(reply)}
                                      >
                                        Edit info
                                      </Link>
                                      <Link
                                        to="#"
                                        className="dropdown-item btn-size"
                                        onClick={() => onDeleteCommentHandler(reply._id)}
                                      >
                                        Delete
                                      </Link>
                                    </>
                                  )}
                                  <Link to="#" className="dropdown-item btn-size">
                                    Report
                                  </Link>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-2 bg-light border">There are no comments for this product</div>
        )}
      </div>
    </div>
  );
};

export default ProductComment;
