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
    
    //var conv : MyConverter
    
    override func setUp() {
        super.setUp()
        
        //conv = MyConverter()
        
    }
    
    override func tearDown() {
        super.tearDown()
    }
    
    func testExample() {
        // This is an example of a functional test case.
        XCTAssert(true, "Pass")
    }
    
    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measureBlock() {
        
            // Put the code you want to measure the time of here.
        }
    }
    
    func testCelsiusToFarenheit(){
        let c = MyConverter();
        XCTAssert(c.convertToFarenite(100.0) == 212.0, "Shoud convert from Celsius to Farenheit")
    }
    
    func testFarenheitToCelsius(){
        let c = MyConverter();
        XCTAssert(c.convertToCelcius(212.0) == 100.0, "Shoud convert from Farenfeit to celsius")
    }
}
