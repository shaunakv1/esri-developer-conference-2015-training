//
//  MyConverter.swift
//  TempConverter
//
//  Created by Shaunak Vairagare on 3/8/15.
//  Copyright (c) 2015 Classroom. All rights reserved.
//

import Foundation

class MyConverter {
    func convertToCelsius(temp:Double) ->Double {
        let tempC = (temp - 32.0) * (5.0/9.0)
        return tempC
    }
    
    func convertToFarenite(temp:Double) ->Double {
        let tempF = temp * (9.0/5.0) + 32.0
        return tempF
    }
    
    func convertCelsiusToKelvin(temp:Double) ->Double {
        let tempK = temp + 273.15
        return tempK
    }
    
    func convertKelvinToCelsius(temp:Double) ->Double {
        let tempC = temp - 273.15
        return tempC
    }
}