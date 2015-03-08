//
//  TempConverterTests.swift
//  TempConverterTests
//
//  Copyright (c) 2014 Classroom. All rights reserved.
//

import UIKit
import XCTest

class TempConverterTests: XCTestCase {
    
    override func setUp() {
        super.setUp()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testCelsiusToFahrenheit() {
        let c = 100.0
        let converter = MyConverter()
        
        let f = converter.convertToFahrenheit(c)

        XCTAssert(f == 212.0, "Failure")
    }
    
    func testFahrenheitToCelsius() {
        let f = 212.0
        let converter = MyConverter()
        
        let c = converter.convertToCelsius(f)
        
        XCTAssert(c == 100.0, "Failure")
    }
    
    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measureBlock() {
            // Put the code you want to measure the time of here.
        }
    }
    
}






























































