/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.3.1
// 	protoc              v3.19.4
// source: grpc/cart.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./cart_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.CartClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.CartPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddToCartRequest,
 *   !proto.AddToCartResponse>}
 */
const methodDescriptor_Cart_AddToCart = new grpc.web.MethodDescriptor(
  '/Cart/AddToCart',
  grpc.web.MethodType.UNARY,
  proto.AddToCartRequest,
  proto.AddToCartResponse,
  /**
   * @param {!proto.AddToCartRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddToCartResponse.deserializeBinary
);


/**
 * @param {!proto.AddToCartRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.AddToCartResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AddToCartResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CartClient.prototype.addToCart =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Cart/AddToCart',
      request,
      metadata || {},
      methodDescriptor_Cart_AddToCart,
      callback);
};


/**
 * @param {!proto.AddToCartRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AddToCartResponse>}
 *     Promise that resolves to the response
 */
proto.CartPromiseClient.prototype.addToCart =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Cart/AddToCart',
      request,
      metadata || {},
      methodDescriptor_Cart_AddToCart);
};


module.exports = proto;

