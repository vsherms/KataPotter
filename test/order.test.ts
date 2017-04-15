import { expect } from "chai";
import * as sinon from "sinon";
import Order from "../src/order";


xdescribe("Order", function(){
  it("can create order", function(){
    let order = new Order();
    expect(typeof(order)).to.eql("object");
  });

  it("order has price function", function(){
    let order = new Order();
    expect(typeof(order.price)).to.eql("function");
  });

  it("can recieve an empty order and return 0", function(){
    let order = new Order();
    expect(order.price([])).to.eql(0);
  });

  it("can recieve an order with one book and return 8", function(){
    let order = new Order();
    expect(order.price([0])).to.eql(8);
  });

  it("can recieve an order with two books of same title and return 16", function(){
    let order = new Order();
    expect(order.price([0,0])).to.eql(16);
  });

  it("can recieve an order with three books of same title and return 24", function(){
    let order = new Order();
    expect(order.price([1,1,1])).to.eql(24);
  });

  it("can recieve an order with two different books and return 15.2", function(){
    let order = new Order();
    expect(order.price([0, 1])).to.eql(8 * 2 * 0.95);
  });

  it("can recieve an order with two different books and return 15.2", function(){
    let order = new Order();
    expect(order.price([2, 3])).to.eql(8 * 2 * 0.95);
  });

  it("can recieve an order with three different books and return 21.6", function(){
    let order = new Order();
    expect(order.price([1, 2, 3])).to.eql(8 * 3 * 0.9);
  });

  it("can recieve an order with four different books and return 8 * 4 * 0.8", function(){
    let order = new Order();
    expect(order.price([1, 2, 3, 4])).to.eql(8 * 4 * 0.8);
  });

  it("can recieve an order with four different books and return 8 * 5 * 0.75", function(){
    let order = new Order();
    expect(order.price([0, 1, 2, 3, 4])).to.eql(8 * 5 * 0.75);
  });

  it("can recieve an order with two different books and one duplicate and return 8 + (8 * 2 * 0.95)", function(){
    let order = new Order();
    expect(order.price([0, 0, 1])).to.eql(8 + (8 * 2 * 0.95));
  });

  it("can recieve an order with two pairs of two different books and return 2 * (8 * 2 * 0.95)", function(){
    let order = new Order();
    expect(order.price([0, 0, 1, 1])).to.eql(2 * (8 * 2 * 0.95));
  });

   it("can recieve an order with a set of four and a set of two and return (8 * 4 * 0.8) + (8 * 2 * 0.95)", function(){
    let order = new Order();
    expect(order.price([0, 0, 1, 2, 2, 3])).to.eql((8 * 4 * 0.8) + (8 * 2 * 0.95));
  });

  it("can recieve an order with a full set and one extra book and return 8 + (8 * 5 * 0.75", function(){
    let order = new Order();
    expect(order.price([0, 1, 1, 2, 3, 4])).to.eql(8 + (8 * 5 * 0.75));
  });

  it("can recieve an order with one set of five and three extra return the least expensive price which is 2 * (8 * 4 * 0.8)", function(){
    let order = new Order();
    expect(order.price([0, 0, 1, 1, 2, 2, 3, 4])).to.eql(2 * (8 * 4 * 0.8));
  });

  it("can recieve an order with four sets of five and three extra and return the least expensive price which is 3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8)", function(){
    let order = new Order();
    expect(order.price([0, 0, 0, 0, 0, 
                        1, 1, 1, 1, 1, 
                        2, 2, 2, 2, 
                        3, 3, 3, 3, 3, 
                        4, 4, 4, 4])).to.eql(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8));
  });
  
})
