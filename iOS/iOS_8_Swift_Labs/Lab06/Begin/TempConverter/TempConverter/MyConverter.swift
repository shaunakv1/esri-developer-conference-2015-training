//
//  MyConverter.swift
//  TempConverter
//
//  Copyright (c) 2014 Classroom. All rights reserved.
//

import Foundation

enum TempScale {
    case F, C, K
}

class MyConverter
{
    var temperatureScale: TempScale
    var temperature: Double
    
    init() {
        temperatureScale = .F
        temperature = 32.0
    }
    
    func convert(scale: TempScale) -> Double {
        var f = 0.0, c = 0.0, k = 0.0
        
        switch temperatureScale {
        case .F:
            f = temperature
            c = (f - 32.0) * (5.0 / 9.0)
            k = (f + 459.67) * (5.0 / 9.0)
        case .C:
            c = temperature
            f = c * (9.0 / 5.0) + 32.0
            k = c + 273.15
        case .K:
            k = temperature
            f = k * (9.0 / 5.0) - 459.67
            c = k - 273.15
        }
        switch scale {
        case .F: return f
        case .C: return c
        case .K: return k
        }
    }
}