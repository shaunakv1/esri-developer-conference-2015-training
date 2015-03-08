//
//  MyConverter.swift
//  TempConverter
//
//  Copyright (c) 2014 Classroom. All rights reserved.
//

import Foundation

class MyConverter
{
    func convertToCelsius(temp: Double) -> Double
    {
        let retVal = (temp - 32.0) * (5.0 / 9.0)
        return retVal
    }
    
    func convertToFahrenheit(temp: Double) -> Double
    {
        let retVal = temp * (9.0 / 5.0) + 32.0
        return retVal
    }
}