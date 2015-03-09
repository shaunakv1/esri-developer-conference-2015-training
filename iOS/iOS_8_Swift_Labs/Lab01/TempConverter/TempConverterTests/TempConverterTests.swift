//
//  TempConverterTests.swift
//  TempConverterTests
//
//  Created by Shaunak Vairagare on 3/8/15.
//  Copyright (c) 2015 Classroom. All rights reserved.
//

import UIKit
import XCTest

class TempConverterTests: XCTestCase {
    
    var conv : MyConverter!
    
    override func setUp() {
        super.setUp()
        conv = MyConverter()
    }
    
    override func tearDown() {
        super.tearDown()
    }
    
    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measureBlock() {
        
            // Put the code you want to measure the time of here.
        }
    }
    
    func testCelsiusToFarenheit(){
        XCTAssert(conv.convertToFarenite(100.0) == 212.0, "Shoud convert from Celsius to Farenheit")
    }
    
    func testFarenheitToCelsius(){
        XCTAssert(conv.convertToCelsius(212.0) == 100.0, "Shoud convert from Farenfeit to celsius")
    }
    
    func testCelsiusToKelvin(){
        XCTAssert(conv.convertCelsiusToKelvin(30) == 303.15, "Shoud convert from celsius kelvin")
    }
    
    func testKelvinToCelsius(){
        XCTAssertEqualWithAccuracy(conv.convertKelvinToCelsius(200.00), Double(-73.15), 0.001, "Shoud convert from celsius kelvin")
    }
}
