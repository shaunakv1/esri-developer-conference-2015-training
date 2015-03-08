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
        return (temp - 32.0) * (5.0/9.0)
    }
    
    func convertToFarenite(temp:Double) ->Double {
        return temp * (9.0/5.0) + 32.0
    }
    
    func convertCelsiusToKelvin(temp:Double) ->Double {
        return temp + 273.15
    }
    
    func convertKelvinToCelsius(temp:Double) ->Double {
        return temp - 273.15
    }
}