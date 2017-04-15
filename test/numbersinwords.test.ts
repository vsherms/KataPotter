import { expect } from "chai";
import * as sinon from "sinon";
import Converter from "../src/converter";


describe("Converter", function(){
  it("can create a Converter object", function(){
      let converter: Converter = new Converter();
    expect(typeof(converter)).to.eql("object");
  });

  it("has a function called convert", function(){
      let converter: Converter = new Converter();
    expect(typeof(converter.convert)).to.eql("function");
  });

  it("can receive 1.00 and return one dollar", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(1.00)).to.eql("one dollar");
  });

  it("can receive 2.00 and return 'two dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(2.00)).to.eql("two dollars");
  });

  it("can receive 9.00 and return 'nine dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(9.00)).to.eql("nine dollars");
  });

  it("can receive 13.00 and return 'thirteen dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(13.00)).to.eql("thirteen dollars");
  });

  it("can receive 26.00 and return 'twenty six dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(26.00)).to.eql("twenty six dollars");
  });

  it("can receive 47.00 and return 'fourty seven dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(47.00)).to.eql("fourty seven dollars");
  });

  it("can receive 99.00 and return 'ninety nine dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(99.00)).to.eql("ninety nine dollars");
  });

   it("can receive 105.00 and return 'one hundred and five dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(105.00)).to.eql("one hundred and five dollars");
  });

  it("can receive 112.00 and return 'one hundred and twelve dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(112.00)).to.eql("one hundred and twelve dollars");
  });

  it("can receive 113.00 and return 'one hundred and thirteen dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(113.00)).to.eql("one hundred and thirteen dollars");
  });

  it("can receive 542.00 and return 'five hundred and fourty two dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(542.00)).to.eql("five hundred and fourty two dollars");
  });

  it("can receive 999.00 and return 'nine hundred and nintey nine dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(999.00)).to.eql("nine hundred and ninety nine dollars");
  });

  it("can receive 1005.00 and return 'one thousand five dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(1005.00)).to.eql("one thousand and five dollars");
  });

  it("can receive 1015.00 and return 'one thousand fifteen dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(1015.00)).to.eql("one thousand and fifteen dollars");
  });

  it("can receive 1315.00 and return 'one thousand three hundred and fifteen dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(1315.00)).to.eql("one thousand three hundred and fifteen dollars");
  });

  it("can receive 8999.00 and return 'eight thousand nine hundred and ninety nine dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(8999.00)).to.eql("eight thousand nine hundred and ninety nine dollars");
  });

   xit("can receive 10101.00 and return 'ten thousand one hundred and one dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(10101.00)).to.eql("ten thousand one hundred and one dollars");
  });

  it("can receive 14215.00 and return 'fourteen thousand two hundred and fifteen dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(14215.00)).to.eql("fourteen thousand two hundred and fifteen dollars");
  });

  it("can receive 18817.00 and return 'eighteen thousand eight hundred and seventeen dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(18817.00)).to.eql("eighteen thousand eight hundred and seventeen dollars");
  });

  it("can receive 20127.00 and return 'twenty thousand one hundred and twenty seven dollars'", function(){
      let converter: Converter = new Converter();
    expect(converter.convert(20127.00)).to.eql("twenty thousand one hundred and twenty seven dollars");
  });
});